/*
 * Demo of CRUD operations on GraphQL data. We define each of
 * the 5 functions ZingGrid requires to support CRUD and then
 * register them to make them available to this instance of
 * ZingGrid. Note that we can access other constants defined
 * in this scope (like `owner`)--we could use this to 
 * share values across multiple queries/mutations.
 */
import React, {useEffect} from 'react'
import ZingGrid from 'zinggrid'


function GraphQLCRUD() {

	const owner = "jeanettephung"
	const name = "API_Demo"
	const repoId = "MDEwOlJlcG9zaXRvcnkxMzA3NTEzMDk="

	const readBodyQuery = `
		query readIssue($owner: String!, $name: String!) {
			repository(owner: $owner, name: $name) {
				issues(last:20 states:OPEN) {
					edges {
						node {
							id
							state
							title
							body
						}
					}
				}
			}
		}`

	const createBodyQuery = `
		mutation createIssue($repoId: String!, $title: String!, $body: String!) {
			createIssue(input:{repositoryId: $repoId, title: $title, body: $body}) {
				issue {
					id
				}
			}
		}`

	const updateRowBodyQuery = `
		mutation updateIssue($id: String!, $title: String!, $body: String!) {
			updateIssue(input:{id: $id, title: $title, body: $body}) {
				issue {
					id
				}
			}
		}`

	const updateCellBodyQuery = `
		mutation updateCell($id: String!, $title: String!, $body: String!) {
			updateIssue(input:{id: $id, title: $title, body: $body}) {
				issue {
					id
				}
			}
		}`

	const deleteBodyQuery = `
		mutation deleteIssue($id: String!) {
			updateIssue(input:{id: $id, state: CLOSED}) {
				issue {
					id
				}
			}
		}`

	return (
		<div className="Grid-wrapper">
			<zing-grid context-menu caption="Github Issues Demo" editor-controls>
				<zg-data src="https://api.github.com/graphql" adapter="graphql">
					<zg-param name="recordPath" value="data.repository.issues.edges"></zg-param>
					<zg-param name="nodePath" value="node"></zg-param>
					<zg-param name="headers" value='{"Authorization": "token 7b864f62dd5c3ae9b7cc1438f13398cd65ff71a5"}'></zg-param>
					<zg-param name="readBodyQuery" value={readBodyQuery} data-owner={owner} data-name={name}></zg-param>
					<zg-param name="createBodyQuery" value={createBodyQuery} data-repoId={repoId} data-title="record-title" data-body="record-body"></zg-param>
					<zg-param name="updateRowBodyQuery" value={updateRowBodyQuery} data-id="record-id" data-title="record-title" data-body="record-body"></zg-param>
					<zg-param name="updateCellBodyQuery" value={updateCellBodyQuery} data-id="record-id" data-title="record-title" data-body="record-body"></zg-param>
					<zg-param name="deleteBodyQuery" value={deleteBodyQuery} data-id="record-id"></zg-param>
				</zg-data>
			</zing-grid>
		</div>
	)
}

export default GraphQLCRUD