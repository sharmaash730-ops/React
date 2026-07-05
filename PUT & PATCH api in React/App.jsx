import { useEffect, useState } from "react"

const App=()=>{
    const [user,setUser] = useState({
        name:"",
        email:"",
    })
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () => {
        const URL = "http://localhost:3000/users/pfRACVgBL_4"
        const response = await fetch(URL);
        if (response.ok){
            const data = await response.json();
            setUser(data);
        } 
    }
    const handleChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value});
    }   
    const handlePUT = async () => {
        const URL ="http://localhost:3000/users/1"
        const response = await fetch (URL,{
            method:"PUT",
            body:JSON.stringify(user)
        });
        if (response.ok){
            alert("PUT resquest successful");
            fetchData();
        }
    }
    const handlePATCH = async () => {
        const URL ="http://localhost:3000/users/1"
        const response = await fetch (URL,{
            method:"PATCH",
            body:JSON.stringify({name:user.name})
        });
        if (response.ok){
            alert("PATCH resquest successful");
            fetchData();
        }
    }
    return(
        <div>
            <h2>PUT and PATCH API Integration</h2>
            <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name"/>
            <br/><br/>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Email"/>
            <br/><br/>
        <button onClick={handlePUT}>Update PUT Data</button>{" "}
            <button onClick={handlePATCH}>Update PATCH Data</button>
        </div>
    );
};
export default App;