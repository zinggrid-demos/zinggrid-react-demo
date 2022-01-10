/*
 * Demo of fetching data
 */
import React, {useRef, useEffect} from 'react'
import 'zinggrid'

function Fetch() {
	const grid = useRef(null)

	// Delay for ms milliseconds
	const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

	// Fetch the dataset
	async function getData() {
		try {
			const res = await fetch('./shows.json')
			const data = await res.json()
			// purposely timeout so the loading screen displays longer
			await delay(2000)
			grid.current.setData(data.shows)
		} catch(err) {
			console.log(err)
		}
	}

	// Call getData() on mount
	useEffect(() => getData())

	return (
		<div className="Grid-wrapper">
			<zing-grid ref={grid}
				caption="Shows" 
				editor
				head-class="grid-header"
				loading
				loading-text="Loading (delayed by 2 seconds)">
			</zing-grid>
		</div>
	)
}

export default Fetch