import Parent from "./components/Parent";
import { UserProvider } from "./UserContext";

function App(){
    return(
        <div style={{background:"red" , padding:"20px"}}>
            <h1>App Comp</h1>
            <UserProvider>
                <Parent />
            </UserProvider>
        </div>
    )
}
export default App;