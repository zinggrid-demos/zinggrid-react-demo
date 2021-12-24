/*
 * Demonstrates one-way binding between a text box and a ZingGrid.
 */
import React, {useState, useRef} from 'react';
import 'zinggrid';

function OneWay() {
	const grid = useRef(null)
	const [dataIndex, setDataIndex] = useState(1)
	const [caption, setCaption] = useState('Change Me Please!')
	const [pagerOn, setPagerOn] = useState(true)
	const [theme, setTheme] = useState('default')
	const [stringData, setStringData] = useState('')

	const data = [
		// dataset 1
		[
			[1,2,3], 
			[4,5,6]
		],
		// dataset 2
		[
			{ "breed": "Chow Chow", "name": "Butter"},
			{ "breed": "Dachshund", "name": "Sousage"},
			{ "breed": "Pug", "name": "Potat"},
			{ "breed": "Corgi", "name": "Plop"},
			{ "breed": "Pomeranian", "name": "Floof"}
		]
	]

  return (
    <div className="GridSidebar-wrapper">
      <zing-grid 
				ref={grid}
				caption={caption}
				data={stringData}
				pager={pagerOn}
				theme={theme}
				page-size="5"
				page-size-options="2,5,15,25,50" />
      <div className="Sidebar-wrapper">
				<h3>Data</h3>
				<p>Paste your JSON data here</p>
				<textarea name="ds" cols="50" rows="8" value={stringData} 
				  onChange={ev => setStringData(ev.target.value)} />
				<br />
				
				<label htmlFor="pager-toggle">Toggle Pager</label>
				<input id="pager-toggle" type="checkbox" checked={pagerOn} 
					onChange={ev => setPagerOn(ev.target.value)} />
				<br />

				<label htmlFor="caption-text">Change Caption</label>
				<input id="caption-text" type="text" placeholder="Caption" value={caption} 
					onChange={ev => setCaption(ev.target.value)} />
				<br />

				<label htmlFor="theme-text">Change Theme</label>
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