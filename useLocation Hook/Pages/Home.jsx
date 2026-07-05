import { Link } from "react-router";

const Home = () => {
    return(
        <div>
            <nav>
                <Link to="/">Home-Page</Link> | {" "}
                <Link to="/location">Location-Page</Link> | {" "}
                <Link to="/location?q=react&categary=frontend3#category2" state={{from:"dashboard"}}>Location page with state</Link>
            </nav>
        </div>
    )
}
export default Home;