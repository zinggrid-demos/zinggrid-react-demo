/*
 * Demo using method calls to set the data on a grid
 */
import React, {useRef, useEffect} from 'react'
import 'zinggrid'

function Methods() {
	const dataSet = [
		{ "breed": "Chow Chow", "name": "Butter"},
		{ "breed": "Dachshund", "name": "Sousage"},
		{ "breed": "Pug", "name": "Potat"},
		{ "breed": "Corgi", "name": "Plop"},
		{ "breed": "Pomeranian", "name": "Floof"}
	]

	const grid = useRef(null)
	const textarea = useRef(null)

	// Set the grid data from the contents of the text area
	const setData = () => grid.current.setData(textarea.current.value)

	useEffect(() => {
		textarea.current.value = JSON.stringify(dataSet)
		setData()
	})

	return (
		<div className="GridSidebar-wrapper">
			<zing-grid 
				ref={grid} 
				editor 
				pager
				head-class="grid-header"
				/>
			<div className="Sidebar-wrapper">
				<br/>
				<textarea ref={textarea} cols="50" rows="12"></textarea>
				<br/>
				<button onClick={setData}>Set Data</button>
			</div>
		</div>   
	)
}

export default Methods