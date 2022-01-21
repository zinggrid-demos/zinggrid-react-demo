/*
 * Demo of fetching GraphQL data. We define the `readBody` function
 * to return the query object, then register it in a useEffect hook
 * to make it available to this instance of ZingGrid.
 */
import React, {useEffect} from 'react'
import ZingGrid from 'zinggrid'


function GraphQLRead() {

	const readBody = () => ({
		query: `
			{
				continents {
					name
				}
			}
		`
	})

	useEffect(() => ZingGrid.registerMethod(readBody, 'readBody', this),[])

	return (
		<div className="Grid-wrapper">
			<zing-grid caption="GraphQL Demo" head-class="grid-header" loading>
				<zg-data src="https://countries.trevorblades.com/" adapter="graphql">
					<zg-param name="recordPath" value="data.continents"></zg-param>
					<zg-param name="readBody" value="readBody"></zg-param>
				</zg-data>
			</zing-grid>
		</div>
	)
}

export default GraphQLRead