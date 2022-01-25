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

	const readBody = () => ({
		query: `
			query {
				shows {
					id
					title
					seasons
					provider
					genre
				}
			}`
		})

	const readBodyJSON = JSON.stringify({
		query: `
			query {
				shows {
					id
					title
					seasons
					provider
					genre
				}
			}`
		})

	const createBody = (record) => ({
		query: `
			mutation {
				createShow(title:"${record['title']}", seasons:${record['seasons']}, provider:"${record['provider']}", genre:"${record['genre']}"}) {
					id
				}
			}`
		})

				//createShow(title:"[[record['title']]]", seasons:[[record['seasons']]], provider:"[[record['provider']]]", genre:"[[record['genre']]]"}) {
	const createBodyJSON = JSON.stringify({ 
		query: `
			mutation {
				createShow(title:"[[record.title]]", seasons:[[record.seasons]], provider:"[[record.provider]]", genre:"[[record.genre]]") {
					id
				}
			}`
		})

	const updateRowBody = (record) => {debugger; return({
		query: `
			mutation {
				updateShow(id:${record.id}, title:"${record.title}", seasons:${record.seasons}, provider:"${record.provider}", genre:"${record.genre}") {
					id
				}
			}`
		})
	}

	const updateRowBodyJSON = JSON.stringify({
		query: `
			mutation {
				updateShow(id:[[record.id]], title:"[[record.title]]", seasons:[[record.seasons]], provider:"[[record.provider]]", genre:"[[record.genre]]") {
					id
				}
			}`
		})

	const updateCellBody = (record) => {debugger; return({
		query: `
			mutation {
				updateShow(id:${record.id}, title:"${record.title}", seasons:${record.seasons}, provider:"${record.provider}", genre:"${record.genre}") {
					id
				}
			}`
		})
	}

	const updateCellBodyJSON = JSON.stringify({
		query: `
			mutation {
				updateShow(id:[[record.id]], title:"[[record.title]]", seasons:[[record.seasons]], provider:"[[record.provider]]", genre:"[[record.genre]]") {
					id
				}
			}`
		})

	const deleteBody = (record) => { debugger;  return({
		query: `
			mutation {
				deleteShow(id: ${record.id}) {
					success
				}
			}`
		})
	}

	const deleteBodyJSON = JSON.stringify({
		query: `
			mutation {
				deleteShow(id: [[record.id]]) {
					success
				}
			}`
		})

	useEffect(() => {
		/*
		ZingGrid.registerMethod(readBody, 'readBody', this)
		ZingGrid.registerMethod(createBody, 'createBody', this)
		ZingGrid.registerMethod(updateRowBody, 'updateRowBody', this)
		ZingGrid.registerMethod(updateCellBody, 'updateCellBody', this)
		ZingGrid.registerMethod(deleteBody, 'deleteBody', this)
		*/
	},[])

	return (
		<div className="Grid-wrapper">
			<zing-grid context-menu caption="Github Issues Demo" head-class="grid-header" editor-controls>
				<zg-colgroup>
					<zg-column index="id" hidden editor="disabled"></zg-column>
					<zg-column index="title" header="Series Title"></zg-column>
					<zg-column index="seasons" header="# of Seasons"></zg-column>
					<zg-column index="provider" header="Provider or Channel"></zg-column>
					<zg-column index="genre" header="Genre"></zg-column>
				</zg-colgroup>
				<zg-data src="http://maya:4000/graphql" adapter="graphql">
					<zg-param name="recordPath" value="data.shows"></zg-param>
					<zg-param name="readBody" value={readBodyJSON}></zg-param>
					<zg-param name="createBody" value={createBodyJSON}></zg-param>
					<zg-param name="updateRowBody" value={updateRowBodyJSON}></zg-param>
					<zg-param name="updateCellBody" value={updateCellBodyJSON}></zg-param>
					<zg-param name="deleteBody" value={deleteBodyJSON}></zg-param>
				</zg-data>
			</zing-grid>
		</div>
	)
}

/*
					<zg-param name="createOptions" value={JSON.stringify({exclude: 'id'})}></zg-param>

					<zg-param name="readBody" value="readBody"></zg-param>
					<zg-param name="createBody" value="createBody"></zg-param>
					<zg-param name="updateRowBody" value="updateRowBody"></zg-param>
					<zg-param name="updateCellBody" value="updateCellBody"></zg-param>
					<zg-param name="deleteBody" value="deleteBody"></zg-param>

					<zg-param name="nodePath" value="data.shows"></zg-param>
					<zg-param name="recordPath" value="shows"></zg-param>
					<zg-param name="nodePath" value="node"></zg-param>
					<zg-param name="headers" value='{"Authorization": "token 7b864f62dd5c3ae9b7cc1438f13398cd65ff71a5"}'></zg-param>
*/

export default GraphQLCRUD