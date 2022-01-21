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

	const readBody = () => ({
		query: `
			query {
				repository(owner:"${owner}", name:"${name}") {
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
		})

	const createBody = (record) => ({
		query: `
			mutation {
				createIssue(input:{repositoryId:"${repoId}", title:"${record['title']}", body:"${record['body']}"}) {
					issue {
						id
					}
				}
			}`
		})

	const updateRowBody = (record) => ({
		query: `
			mutation {
				updateIssue(input:{id:"${record.id}", title:"${record.title}", body:"${record.body}"}) {
					issue {
						id
					}
				}
			}`
		})

	const updateCellBody = (record) => ({
		query: `
			mutation {
				updateIssue(input:{id:"${record.id}", title:"${record.title}", body:"${record.body}"}) {
					issue {
						id
					}
				}
			}`
		})

	const deleteBody = (record) => ({
		query: `
			mutation {
				updateIssue(input:{id:"${record.id}", state: CLOSED}) {
					issue {
						id
					}
				}
			}`
		})

	useEffect(() => {
		ZingGrid.registerMethod(readBody, 'readBody', this)
		ZingGrid.registerMethod(createBody, 'createBody', this)
		ZingGrid.registerMethod(updateRowBody, 'updateRowBody', this)
		ZingGrid.registerMethod(updateCellBody, 'updateCellBody', this)
		ZingGrid.registerMethod(deleteBody, 'deleteBody', this)
	},[])

	return (
		<div className="Grid-wrapper">
			<zing-grid context-menu caption="Github Issues Demo" editor-controls>
				<zg-data src="https://api.github.com/graphql" adapter="graphql">
					<zg-param name="recordPath" value="data.repository.issues.edges"></zg-param>
					<zg-param name="nodePath" value="node"></zg-param>
					<zg-param name="headers" value='{"Authorization": "token 7b864f62dd5c3ae9b7cc1438f13398cd65ff71a5"}'></zg-param>
					<zg-param name="readBody" value="readBody"></zg-param>
					<zg-param name="createBody" value="createBody"></zg-param>
					<zg-param name="updateRowBody" value="updateRowBody"></zg-param>
					<zg-param name="updateCellBody" value="updateCellBody"></zg-param>
					<zg-param name="deleteBody" value="deleteBody"></zg-param>
				</zg-data>
			</zing-grid>
		</div>
	)
}

export default GraphQLCRUD