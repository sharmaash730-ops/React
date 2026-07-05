import { useEffect } from "react";
function Count({count,data}){
    function handleData(){
        console.log("Data Clicked")
    }
    function handleCount(){
        console.log("Count Clicked")
    }
    useEffect(()=>{
        handleCount()
    },[count]);
    useEffect(()=>{
        handleData()
    },[data]);
    return(
        <div>
            <h1> Count:{count}</h1>
            <h1>Data:{data}</h1>
        </div>
    )
}
export default Count;