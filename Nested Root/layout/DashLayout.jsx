import { NavLink, Outlet } from "react-router";

const DashLayout = () => {
    return(
        <div>
            <h1>DashBoard layout</h1>
            <nav>
                <NavLink to="profile">Profile</NavLink>
                <NavLink to="setting">Setting</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}
export default DashLayout; 