import { Link } from "react-router";

const NotFound=()=>{
    return(
        <div style={{textAlign:"center" , margin:'50px'}}>
            <h1>404 - Page Not Found</h1>
            <p>Sorry,the page you are looking for does not exists.</p>
            <Link to="/">Go To Home</Link>
        </div>
    );
}
export default NotFound;