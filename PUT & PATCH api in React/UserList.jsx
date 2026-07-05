import { useEffect, useState } from "react";

 function UserList(){

    const [userData,setUserData] = useState([]);

    useEffect(()=>{
        fetchUserData();
   },[]);

    async function fetchUserData() {
    const URL = "http://localhost:3000/users";
    let res = await fetch(URL);
    res = await res.json();
    console.log(res);
    setUserData(res);
    }
    const handleDelete = async (id) =>{
        const URL = `http://localhost:3000/users/${id}`;
        let response = await fetch(URL,{
            method:"DELETE",

        });
        if (response.ok){
            alert("user delete successfully");
            fetchUserData();
        }
    }

    return(
        <div>
            <h1>User list</h1>
            <ul style={{listStyle:"none",padding:0,margin:0}}>
                {userData.map((user)=>(
                    <li key={user.id}
                    style={{
                        marginBottom:"10px",
                        padding:"10px",
                        border:"1px solid #ccc",
                        borderRadius:"5px",
                    }}>
                        <strong>Name:</strong>{user.name}<br/>
                        <strong>Email:</strong>{user.email}<br/>
                        <strong>Age:</strong>{user.age}<br/>
                        <button onClick={()=>handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default UserList;