import { Link } from "react-router";

function Home(){
    return(
        <div>
            <nav>
                <Link to="/">Home</Link> | {" "}
                <Link to="/locationInfo">Location Info</Link> | {" "}
                <Link to="/product">Product</Link>
            </nav>
        </div>
    );
}
export default Home;