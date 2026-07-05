import { useRef} from "react"

function App(){

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailref.current.value;
        const password = passwordRef.current.value;
        alert(`Name:${name},Email:${email},password:${password}`);
    }

    const handleReset = () =>{
        nameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
    }
    
    return(
        <div className="App">
            <h1>ashish Uncontrolled Component</h1>
            <form>
                <input type="text" id="name" ref={nameRef} placeholder="Enter your name"/>
                <br></br>
                <br></br>
                <input type="email" id="email" ref={emailRef} placeholder="Enter your email"/>
                <br></br>
                <br></br>
                <input type="password" id="password" ref={passwordRef} placeholder="Enter your password"/>
                <br></br>
                <br></br>
                <button type="submit">Submit</button>
                <button type="reset" onClick={handleReset}>Reset</button>
            </form>
        </div>
    )
}
export default App;