/*
 * A simple demo with local data. Note that the
 * data is not an array of objects, it's a string
 * (the JSON representation of an array of objects).
 */
import React, {useState} from 'react';
import 'zinggrid';

function Simple() {
	const [data] = useState(`[
		{
			"name": "Philip J. Fry",
			"origin": "Earth"
		},
		{
			"name": "Turanga Leela",
			"origin": "Earth"
		},
		{
			"name": "Bender Bending Rodriguez",
			"origin": "Earth"
		},
		{
			"name": "Amy Wong",
			"origin": "Mars"
		},
		{
			"name": "Doctor John Zoidberg",
			"origin": "Decapod 10"
		},
		{
			"name": "Lord Nibbler",
			"origin": "Earth"
		}
	]`)

	return (
		<div className="Grid-wrapper">
			<zing-grid caption="Hello Futurama" data={data} head-class="grid-header" />
		</div>
	)	
}

export default Simple;