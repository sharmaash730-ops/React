import { useState } from "react";
import Count from "./Count";

function App(){
    const [count,setCount] = useState(0);
    const [data,setData] = useState(0);
    return(
        <div>
            <h1>Parent comp</h1>
            <Count count={count} data={data} />
            <button onClick={() => setCount(count + 1)}>count</button>
            <button onClick={() => setData(data + 1)}>data</button>
        </div>
    )
}
export default App;