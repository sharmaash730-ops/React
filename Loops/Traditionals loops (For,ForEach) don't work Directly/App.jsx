import { useState } from "react";

function App(){
    const fruits = ["Apple","Banana","Cherry"]
    function addFruit(){
        const item = [];
        for (let i = 0;i< fruits.length; i++){
            item.push(<li>{fruits[i]}</li>)
        }
        return item;
    }
    return(
        <div>
            <h1>Map Loops</h1>
            <ul>{addFruit()}</ul>
        </div>
    )
}
export default App;