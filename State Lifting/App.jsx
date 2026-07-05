import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

function App(){
    const[msg,setMsg] = useState("");
    return(
        <div>
            <h1>State Lifting in React | Ashish Decodes</h1>
            <ChildA setMsg={setMsg}/>
            <ChildB msg={msg}/>
        </div>
    )
}
export default App;