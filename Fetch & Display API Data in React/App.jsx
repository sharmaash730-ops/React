import { useEffect, useState } from "react";

 function App(){

    const [userData,setUserData] = useState([]);

    useEffect(()=>{
        fetchUserData();
   },[]);

    async function fetchUserData() {
    const URL = "https://jsonplaceholder.typicode.com/users";
    let res = await fetch(URL);
    res = await res.json();
    console.log(res);
    setUserData(res);
    }

    return(
        <div>
            <h1>hello world</h1>
            {userData && userData.map((item)=>{
                return(
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.email}</p>
                        <p>{item.phone}</p>
                        <p>{item.website}</p>
                        <p>{item.address.city}</p>
                        <p>{item.company.name}</p>
                        <hr />
                    </div>
                )
                
            })
            }
        </div>
    )
}
export default App;