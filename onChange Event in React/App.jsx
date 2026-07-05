import { useState } from "react";

function App(){
  const [name,setName] = useState("");
  const HandleChange = (e) => {
    console.log(e);
    setName(e.target.value);
  }
  return(
    <div>
      <h2>Ashish Decodes</h2>
      <input type="text" value={name}
      onChange={HandleChange}
      placeholder="Enter name"/>
      <button onClick={() => setName("")}>clear</button>
      <p>Live preview: {name}</p>
    </div>
  )
}
export default App;