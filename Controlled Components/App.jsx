import { useState } from "react";

function App(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    alert(`Name:${name},Email:${email},password:${password}`)
  }
  const handleclear = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
  }
  return(
    <div>
      <h1>Controlled Components</h1>
      <form onSubmit={HandleSubmit}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/>
        <br></br>
        <br></br>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email"/>
        <br></br>
        <br></br>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
        <br></br>
        <br></br>
        <button type="reset" onClick={handleclear}>clear</button>
        <p>live value ={name},{email},{password}</p>
      </form>
    </div>
  )
}
export default App;