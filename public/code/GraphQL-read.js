/*
 * Demo of fetching GraphQL data. 
 */
import React from 'react'
import 'zinggrid'


function GraphQLRead() {

	const readBodyJSON =  JSON.stringify({
		query: `
			{
				continents {
					name
				}
			}
		`
	})

	return (
		<div className="Grid-wrapper">
			<zing-grid caption="GraphQL Demo" head-class="grid-header" loading>
				<zg-data src="https://countries.trevorblades.com/" adapter="graphql">
					<zg-param name="recordPath" value="data.continents"></zg-param>
					<zg-param name="readBody" value={readBodyJSON}></zg-param>
				</zg-data>
			</zing-grid>
		</div>
	)
}

export default GraphQLRead