import { memo } from "react";

const Child = memo(({name})=>{
    console.log("Child Componet Rendering")
    return(
        <div>
            <h2>Child component</h2>
            <p>name:{name}</p>
        </div>
    )
})
export default Child;