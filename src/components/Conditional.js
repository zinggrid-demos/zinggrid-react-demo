/*
 * Conditional rendering demo
 */
import React, {useState, useEffect} from 'react'
import "zinggrid"

function Conditional() {
	const [data1, setData1] = useState(undefined)
	const [data2, setData2] = useState(undefined)
	const [defaultColumns, setDefaultColumns] = useState(true)

	// fetch datasets on mount
	useEffect(() => {
		async function getData() {
			try {
				const res1 = await fetch('./shows.json')
				const data1 = await res1.json()
				setData1(JSON.stringify(data1.shows))
	
				const res2 = await fetch('./shows2.json')
				const data2 = await res2.json()
				setData2(JSON.stringify(data2.shows))
			} catch(err) {
				console.log(err)
			}
		}

		getData();
	})

	return (
		<div className="Grid-wrapper">
			<button onClick={() => setDefaultColumns(!defaultColumns)}>
				Switch to
				{defaultColumns ? " Second " : " First "}
				Dataset
			</button>
			<zing-grid
				data={defaultColumns ? data1 : data2}
				caption={defaultColumns ? "Shows 1" : "Shows 2"}
				editor
				loading
				layout="row"
				head-class="grid-header"
				viewport-stop
				pager
				page-size="5"
			>
				{defaultColumns ? (
					<zg-colgroup>
						<zg-column index="title" />
						<zg-column index="genre" />
					</zg-colgroup>
				) : (
					<zg-colgroup>
						<zg-column index="titleChanged" />
						<zg-column index="genreChanged" />
					</zg-colgroup>
				)}
			</zing-grid>
		</div>
	)
}

export default Conditional
