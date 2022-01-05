/*
 * Ajax demo
 */
import React, {useState, useEffect} from 'react'
import 'zinggrid'

function Ajax() {
	const [dataSet, setDataSet] = useState(undefined)

	// Delay for ms milliseconds
	const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

	// Fetch the dataset
	async function getData() {
		try {
			const res = await fetch('./shows.json')
			const data = await res.json()
			// purposely timeout so the loading screen displays longer
			await delay(2000)
			setDataSet(JSON.stringify(data.shows))
		} catch(err) {
			console.log(err)
		}
	}

	// Call getData() on mount
	useEffect(() => getData())

	return (
		<div className="Grid-wrapper">
			<zing-grid data={dataSet} 
				caption="Shows" 
				editor
				head-class="grid-header"
				loading
				loading-text="Loading (delayed by 2 seconds)">
			</zing-grid>
		</div>
	)
}

export default Ajax