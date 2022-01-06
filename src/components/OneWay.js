/*
 * Demonstrates one-way binding between a text box and a ZingGrid.
 */
import React, {useState} from 'react'
import 'zinggrid'

function OneWay() {
	const dataSet = [
		// dataSet 0
		[
			[1,2,3], 
			[4,5,6]
		],
		// dataSet 1
		[
			{ "breed": "Chow Chow", "name": "Butter"},
			{ "breed": "Dachshund", "name": "Sousage"},
			{ "breed": "Pug", "name": "Potat"},
			{ "breed": "Corgi", "name": "Plop"},
			{ "breed": "Pomeranian", "name": "Floof"}
		]
	]
	const [dataIndex, setDataIndex] = useState(1)
	const [caption, setCaption] = useState('Change Me Please!')
	const [pagerOn, setPagerOn] = useState(true)		// true or null, because JSX doesn't understand false for boolean attributes
	const [theme, setTheme] = useState('default')
	const [stringData, setStringData] = useState(JSON.stringify(dataSet[dataIndex]))

	// Set stringData based on dataIndex
	const setData = (ev) => {
		const index = ev.target.value
		setDataIndex(index)
		setStringData(JSON.stringify(dataSet[index]))
	}

  return (
    <div className="GridSidebar-wrapper">
      <zing-grid 
				caption={caption}
				data={stringData}
				pager={pagerOn}
				theme={theme}
				head-class="grid-header"
				page-size="5"
				page-size-options="2,5,15,25,50" />
      <div className="Sidebar-wrapper">
				<p>Paste your JSON data here:</p>
				<textarea name="ds" cols="50" rows="12" value={stringData} 
				  onChange={ev => setStringData(ev.target.value)} />
				<br />
				
				<label htmlFor="pager-toggle">Toggle Pager</label>
				<input id="pager-toggle" type="checkbox" checked={pagerOn} 
					onChange={ev => setPagerOn(ev.target.checked ? true : null)} />
				<br />

				<label htmlFor="data-select">Load Data Set: </label>
				<select id="data-select" value={dataIndex} onChange={setData}>
					<option value="0">Numbers</option>
					<option value="1">Dogs</option>
				</select>
				<br />

				<label htmlFor="caption-text">Change Caption: </label>
				<input id="caption-text" type="text" placeholder="Caption" value={caption} 
					onChange={ev => setCaption(ev.target.value)} />
				<br />

				<label htmlFor="theme-text">Change Theme: </label>
				<select id="theme-text" value={theme} onChange={ev => setTheme(ev.target.value)}>
					<option value="default">Default</option>
					<option value="android">Android</option>
					<option value="ios">iOS</option>
					<option value="dark">Dark</option>
					<option value="black">Black</option>
				</select>
			</div>
		</div>
  )
}

export default OneWay;