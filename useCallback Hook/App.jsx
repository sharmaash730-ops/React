import { useCallback, useState } from "react";
import Child from "./Child";

function App(){
     const [count,setCount] = useState(0);
     const handleClick = useCallback(()=>{
        console.log("child Button clicked")
     },[]);
    return(
        <div>
            <h2>usecallback | Ashish decodes</h2>
            <Child onclick={handleClick} />
            <h2>Result:{count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}
export default App;