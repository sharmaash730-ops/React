import { useRef } from "react";
import User from "./User";

function App() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
    inputRef.current.value = "Ashish Decodes"
  }
  return (
    <div>
      <h1>forwardref in React 19</h1>
      <User ref={inputRef}/>
      <br></br>
      <br></br>
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  )
}
export default App;