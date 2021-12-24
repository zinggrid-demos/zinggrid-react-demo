/*
 * Demostrates using a reference to set the data after the 
 * ZingGrid has been created and changing the grid's theme.
 * Note that in this case the data is an array (compare this
 * to Simple.js).
 */
import React, {useState, useRef, useEffect} from 'react';
import 'zinggrid';

function ReadOnly() {
	const grid = useRef(null);
	const [theme, setTheme] = useState('default');
	const data = [
		[1,2,3],
		[4,5,6]
	];

	useEffect(() => grid && grid.current.setData(data))

	return (
		<div className="Grid-wrapper">
			<zing-grid ref={grid} caption="Hello World" theme={theme}>
				<zg-colgroup>
					<zg-column index="0" header="Column 1"></zg-column>
					<zg-column index="1" header="Column 2"></zg-column>
					<zg-column index="2" header="Column 3"></zg-column>
				</zg-colgroup>
			</zing-grid>

			<br />
			<hr />
			<select value={theme} onChange={ev => setTheme(ev.target.value)}>
				<option value="default">Default</option>
				<option value="android">Android</option>
				<option value="ios">iOS</option>
				<option value="dark">Dark</option>
				<option value="black">Black</option>
			</select>
		</div>
	)
}

export default ReadOnly;