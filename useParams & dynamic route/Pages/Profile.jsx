import { useParams } from "react-router"

const Profile = () => {
    const { id } = useParams();
    return(
        <div>
            <h1>Profile Page</h1>
            <p>User Profile Page</p>
            <p>Welcome to User Id : { id }</p>
        </div>
    );
}
export default Profile;