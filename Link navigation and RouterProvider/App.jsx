import { Link, Outlet } from "react-router";

function App(){
  return(
    <div>
      <h1>React-router v7</h1>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/About">About</Link> |{" "}
        <Link to="/ContactUs">ContactUs</Link>
      </nav>
      <Outlet />
    </div>
  )
}
export default App;