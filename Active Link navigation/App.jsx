import { NavLink, Outlet } from "react-router";

function App(){
  const navStyle=({isActive}) => ({
    fontWeight : isActive ? "bold" : "normal",
    color : isActive ? "blue" : "black",
    textDecoration : "none",
    margin:"0 10px"
  })
  return(
    <div>
      <h1>React Router v7 Demo via NavLink</h1>
      <nav>
        <NavLink to="/" style={navStyle}>Home</NavLink>
        <NavLink to="About" style={navStyle}>About</NavLink>
        <NavLink to="ContactUs" style={navStyle}>Contact-Us</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}
export default App;