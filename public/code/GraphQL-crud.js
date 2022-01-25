/*
 * Demo of CRUD operations on GraphQL data. We include the
 * `id` field in the initial query but hide the column in
 * the table using the `hidden` attribute and exclude it 
 * from the create-record dialog with `editor="disabled"`.
 * 
 * Note that we can include fields from the current record
 * of the table in the query templates using the `[[ ... ]]`
 * syntax.
 *
 * If the demo server is not available at the URL below, you
 * can run a local instance. See the `server` directory in this
 * repo.
 * 
 * NOTE: the public server has not been set up yet, use a local
 * server for now.
 */
import React from 'react'
import 'zinggrid'


function GraphQLCRUD() {
	const demoServer = 'http://localhost:4000/graphql'

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

	const createBodyJSON = JSON.stringify({ 
		query: `
			mutation {
				createShow(title:"[[record.title]]", seasons:[[record.seasons]], provider:"[[record.provider]]", genre:"[[record.genre]]") {
					id
				}
			}`
		})

	const updateRowBodyJSON = JSON.stringify({
		query: `
			mutation {
				updateShow(id:[[record.id]], title:"[[record.title]]", seasons:[[record.seasons]], provider:"[[record.provider]]", genre:"[[record.genre]]") {
					id
				}
			}`
		})

	const updateCellBodyJSON = JSON.stringify({
		query: `
			mutation {
				updateShow(id:[[record.id]], title:"[[record.title]]", seasons:[[record.seasons]], provider:"[[record.provider]]", genre:"[[record.genre]]") {
					id
				}
			}`
		})

	const deleteBodyJSON = JSON.stringify({
		query: `
			mutation {
				deleteShow(id: [[record.id]]) {
					success
				}
			}`
		})

	return (
		<div className="Grid-wrapper">
			<zing-grid context-menu caption="GraphQL CRUD Demo" head-class="grid-header" editor-controls>
				<zg-colgroup>
					<zg-column index="id" hidden editor="disabled"></zg-column>
					<zg-column index="title" header="Series Title"></zg-column>
					<zg-column index="seasons" header="# of Seasons"></zg-column>
					<zg-column index="provider" header="Provider or Channel"></zg-column>
					<zg-column index="genre" header="Genre"></zg-column>
				</zg-colgroup>
				<zg-data src={demoServer} adapter="graphql">
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

export default GraphQLCRUD
