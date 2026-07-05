import { useState } from "react"

function App(){
    const [selected,setSelected] = useState({
        html:false,
        css:false,
        js:false
    });
    const htmlChecked = (e) => {
        console.log(e.target.checked)
        setSelected({...selected,html:e.target.checked});
    }
    const cssChecked = (e) => {
        console.log(e.target.checked)
        setSelected({...selected,css:e.target.checked});
    }
    const jsChecked = (e) => {
        console.log(e.target.checked)
        setSelected({...selected,js:e.target.checked});
    }
    return(
        <div>
            <h1>Ashish Decodes checkox</h1>
            <label>
                <input type="checkbox" checked={selected.html}
                onChange={htmlChecked}>HTML</input>
            </label>
            <br></br>
            <br></br>
            <label>
                <input type="checkbox" checked={selected.css}
                onChange={cssChecked}>CSS</input>
            </label>
            <br></br>
            <br></br>
            <label>
                <input type="checkbox" checked={selected.js}
                onChange={jsChecked}>JS</input>
            </label>
            <br></br>
            <h2>Selected:</h2>
            <ul>
                {selected.html && <li>HTML</li>}
                {selected.css && <li>CSS</li>}
                {selected.js && <li>JAVASCRIPT</li>}
            </ul>
        </div>
    )
}
export default App;