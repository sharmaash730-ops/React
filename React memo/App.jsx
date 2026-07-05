import React from "react";
import{ useState } from "react";
import Child from "./Child";

function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Ashish Decode | React.memo</h1>
            <Child name="Ashish" />
            <h2>count:{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <br></br>
            <br></br>
            <button onClick={() => setCount(count - 1)}>decrement</button>
        </div>
    );
}
export default App;