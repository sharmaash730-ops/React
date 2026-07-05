import { useMemo, useState } from "react"

function App(){
    const[count,setCount]=useState(0);
    const [number,setNumber] = useState(10);

    const expensiveComputation = () => {
        console.log("expensive computation started");
        let result = 0;
        for(let i=0;i<10000000;i++){
            result += number;
        }
        return result
    }
    const result = useMemo(()=> expensiveComputation(),[number])
    return(
        <div>
            <h2>Expensive Computation Button</h2>
            <p>Expensive {result}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> setCount(count+1)}>Increment:{count}</button>
        </div>
    )
}
export default App