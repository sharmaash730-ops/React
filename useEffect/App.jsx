import { useEffect, useState } from "react";

function App(){
    const[count,setCount]=useState(0);
    const[data,setData]=useState(0);

    useEffect(() => {
        console.log("Component mounted");
        setCount(count+1);
        setData(data + 1);
    },[]);

    useEffect(() => {
        if(count > 1 || data > 1){
            console.log("component Updated")
        }
    },[count,data])
    return(
        <div>
            <h1> Count: {count} </h1>
            <h1> Data: {data} </h1>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setData(data + 1)}>Increment data</button>
        </div>
    )
}
export default App;