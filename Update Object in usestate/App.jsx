import { useState } from "react";

function App(){

    const [user,setUser] =  useState({
        name:"Ashish",
        age:22,
        address:{
            city:"Mumbai",
            state:"Maharastra"
        }
    });
    const updateAge = () =>{
        setUser({...user, age: user.age +1});
    }
    const updateCity = () =>{
        setUser({
            ...user,
             address:{
            ...user.address,
            city:"Panvel",
        }
    });
    }
    return(
        <div>
            <h1>Updation Object in State | Ashish Decodes</h1>
            <h2>Name:{user.name}</h2>
            <h2>Age:{user.age}</h2>
            <h2>City:{user.address.city}</h2>
            <h2>State:{user.address.state}</h2>
            <button onClick={updateAge}>Update Age</button>
            {" "}
            <button onClick={updateCity}>Update City</button>
        </div>
    )
}
export default App;