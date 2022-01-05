/*
 * Methods demo
 */
import React, {useState, useRef, useEffect} from 'react'
import 'zinggrid'

function Methods() {
	const [dataSet, setDataSet] = useState([
		{ "breed": "Chow Chow", "name": "Butter"},
		{ "breed": "Dachshund", "name": "Sousage"},
		{ "breed": "Pug", "name": "Potat"},
		{ "breed": "Corgi", "name": "Plop"},
		{ "breed": "Pomeranian", "name": "Floof"}
	])

	const [pagerOn, setPagerOn] = useState(false)
	const [caption, setCaption] = useState(undefined)

	const grid = useRef(null)
	const input = useRef(null)
	const textarea = useRef(null)

/*
      this.cInput = null;
      this.grid = null;
      this.textarea = null;
  

    handleEvent = (event) => { // changes to grid data will change data store
        this.setState({ datastore: JSON.stringify(this.grid.data) });
    }
  
*/
	const setData = () => setDataSet(JSON.parse(textarea.current.value))

  const setCaptionFromInput = () => setCaption(input.current.value)

	useEffect(() => {
		textarea.current.value = JSON.stringify(dataSet)

	})

	return (
		<div className="GridSidebar-wrapper">
			<zing-grid 
				ref={grid} 
				editor 
				pager={pagerOn}
				head-class="grid-header"
				data={dataSet} />
			<div className="Sidebar-wrapper">
				<label htmlFor="pager-toggle">Toggle Pager</label>
				<input id="pager-toggle" type="checkbox" checked={pagerOn} 
					onChange={ev => setPagerOn(ev.target.checked ? true: null)} />
				<br />

			<input ref={input} type="text" placeholder="Caption"/>
			<button onClick={setCaptionFromInput}>Set Caption</button>
			<br/>
			<br/>
			<textarea ref={textarea} name="ds" cols="50" rows="8"></textarea>
			<br/>
			<button id="cdBtn" onClick={setData}>Set Data</button>
			</div>
		</div>   
	)
}

export default Methods