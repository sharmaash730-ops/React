import { useContext } from "react";
import { UserContext } from "../UserContext";

function Child(){
    const {user,setUser} = useContext(UserContext)
    return(
        <div style={{background:"yellow",padding:"20px"}}>
            <h1>Child Component:{user}</h1>
            <button onClick={() => setUser("Ashish Sharma")}>change user</button>
        </div>
    )
}
export default Child;