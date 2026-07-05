import { Link } from "react-router";

const Home = () => {
    return(
        <div>
            <h1> Home Page</h1>
            <p>Select User to View Profile</p>
            <ul>
                <li><Link to= "/user/101">User 101</Link></li>
                <li><Link to= "/user/102">User 102</Link></li>
                <li><Link to= "/user/103">User 103</Link></li>
            </ul>
        </div>
    )
}
export default Home;