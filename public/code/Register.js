/*
 * Demonstrate registering a method on a ZingGrid
 */
import React, {useRef, useEffect} from 'react'
import ZingGrid from 'zinggrid'

function Register() {
	const grid = useRef(null)
	const dataSet = [
		{ "first": "Maria", "last": "John", "number": 123 },
		{ "first": "David", "last": "Smith", "number": 456 },
		{ "first": "Felicity", "last": "Snow", "number": 789 }
	]

	// Custom renderer to convert to uppercase
	const customRenderer = (text) => text.toUpperCase()

	// On mount, assign the data and register a custom renderer
	useEffect(() => {
		grid.current.setData(dataSet)
		ZingGrid.registerMethod(customRenderer, 'customRenderer')
	})

	return (
		<div className="Grid-wrapper">
			<zing-grid
				ref={grid}
				head-class="grid-header"
				caption="Hello World">
				<zg-colgroup>
					<zg-column index="first" header="Column 1" renderer="customRenderer"></zg-column>
					<zg-column index="last" header="Column 2"></zg-column>
					<zg-column index="number" header="Column 3"></zg-column>
				</zg-colgroup>
			</zing-grid>
		</div>
	)}

export default Register