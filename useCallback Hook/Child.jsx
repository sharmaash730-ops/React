import React, { memo } from "react";

const Child = ({onclick}) =>{
    console.log("Child Component Render")
    return(
        <div>
            <h2>Child component</h2>
            <button onClick={onclick}>Click Me!</button>
        </div>
    )
}
export default React.memo (Child);