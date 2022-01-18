/*
 * Events demo
 */
import React, {useRef, useEffect} from 'react'
import 'zinggrid'

function Events() {
	const grid = useRef(null)
	const eventLog = useRef(null)

  const dataSet = [
		{name: "Kevin", age: "22"},
		{name: "Joe", age: "40"},
		{name: "Liz", age: "25"},
		{name: "Tim", age: "24"},
		{name: "Ron", age: "30"},
		{name: "Jane", age: "31"}
	]

	// Render parts of the ZGData structure according to
	// the event type, preceded by a newline and 2 spaces
	const details = (type, data) => {
		if(!data) return ''

		switch(type) {
			case 'cell:click': 
				return `\n  col: ${data.columnIndex+1} row: ${data.rowIndex+1} value: ${data.value}`
			case 'header:click': 
				return `\n  value: ${data.text}`
			case 'grid:pagechange': 
				return `\n  pageSize: ${data.pageSize} currentPage: ${data.currentPage}`
			default: 
				return '\n  unrecognized details'
			}
	}
          
	// Handle an event by logging it to the eventLog
	const handleEvent = (event) => {
		let text = ''
		const target = event.detail.ZGTarget ? event.detail.ZGTarget.localName : 'zing-grid'

		text += `${event.type} from ${target}`
		text += details(event.type, event.detail.ZGData)
		text += '\n\n'

		eventLog.current.value += text
		eventLog.current.scrollTop = eventLog.current.scrollHeight
	}

	const events = ['grid:ready', 'cell:click', 'header:click', 'grid:pagechange']

	useEffect(() => {
		for(const ev of events)
			grid.current.addEventListener(ev, handleEvent)
	})

	return (
		<div className="GridSidebar-wrapper">
			<zing-grid 
				ref={grid} 
				id="eventGrid" 
				caption="Events" 
				head-class="grid-header"
				pager 
				page-size="3" 
				data={JSON.stringify(dataSet)} />
			<br />
			<div className="Sidebar-wrapper">
				<h3>Event Log</h3>
				<textarea ref={eventLog} cols="40" rows="16" readOnly></textarea>
			</div>
		</div>
	)
}

export default Events