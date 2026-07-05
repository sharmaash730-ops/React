import { useState } from "react";

function CreateUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const handleUserAdd = async () => {
        // console.log("user added:",{name,email,age})
        const URL = "http://localhost:3000/users";
        let response = await fetch(URL, {
            method:"POST",
            body: JSON.stringify({ name, email, age }),
        },
        );
        if (response) {
            alert("User added successfully");
        }
    }
    return (
        <div>
            <h1>Post Api</h1>
            <h2>Add User</h2>
            <input type="text" placeholder="Enter name" onChange={e => setName(e.target.value)} />
            <br />
            <br />
            <input type="text" placeholder="Enter your email" onChange={e => setEmail(e.target.value)} />
            <br />
            <br />
            <input type="text" placeholder="Enter your age" onChange={e => setAge(e.target.value)} />
            <br />
            <br />
            <button onClick={handleUserAdd}>Submit</button>
        </div>
    )
}
export default CreateUser;