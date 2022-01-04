/*
 * Demonstrates two-way binding between a text box and a ZingGrid.
 */
import React, {useState, useRef, useEffect} from 'react';
import 'zinggrid';

function TwoWay() {
	const [tableData, setTableData] = useState([
		{ "breed": "Chow Chow", "name": "Butter"},
		{ "breed": "Dachshund", "name": "Sousage"},
		{ "breed": "Pug", "name": "Potat"},
		{ "breed": "Corgi", "name": "Plop"},
		{ "breed": "Pomeranian", "name": "Floof"}
	])

	const [textData, setTextData] = useState(JSON.stringify(tableData))

	const grid = useRef(null)

	// Called when a table row is deleted
	const dataDelete = (ev) => {
		console.log('--- data:delete fired ---', ev)
		setTextData(JSON.stringify(ev.target.data))
	}

	// Called when a table row is added
	const dataInsert = (ev) => {
		console.log('--- data:insert fired ---', ev)
		setTextData(JSON.stringify(ev.target.data))
	}

	// Called when a cell or record is changed
	const dataChange = (ev) => {
		console.log('--- data:change fired ---', ev)
		setTextData(JSON.stringify(ev.target.data))
	}

	// Attach event listeners to grid
	useEffect(() => {
		grid.current.addEventListener('data:record:beforedelete', dataDelete)
		grid.current.addEventListener('data:record:insert', dataInsert)
		grid.current.addEventListener('data:cell:change', dataChange)
		grid.current.addEventListener('data:record:change', dataChange)
	})

  return (
    <div className="GridSidebar-wrapper">
      <zing-grid 
				ref={grid}
				caption="Two-Way Data Binding (right click on cells for context menu options)"
				context-menu
				editor
				editor-controls
				layout-controls
				search
				sorter
				pager
				page-size="5"
				head-class="grid-header"
				page-size-options="2,5,15"
				data={JSON.stringify(tableData)} />
      <div className="Sidebar-wrapper">
				<p>JSON data</p>
				<textarea name="ds" cols="50" rows="22" value={textData} 
				  onChange={ev => setTableData(JSON.parse(ev.target.value))} />
			</div>
		</div>
  )
}

export default TwoWay;
