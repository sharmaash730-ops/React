import { useState } from "react";

function App(){
    const [vegies,setVegies] = useState(["carrot","Potato","Tomato"])
    const fruits = ["Apple","Banana","Cherry"]
    return(
        <div>
            <h1>Map Loops</h1>
            <ul>
                {
                    //Using Map to loop through fruits
                    fruits.map((fruits,index) => (
                        <li key={index}>{fruits}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default App;