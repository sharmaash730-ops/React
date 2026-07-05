import Child from "./Child";

function Parent(){
    return(
        <div style={{background:"green",padding:"20px"}}>
            <h1>Parent Component</h1>
            <Child />
        </div>
    )
}
export default Parent;