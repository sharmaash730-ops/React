import { useNavigate } from "react-router";
import { useAuth } from "../AuthContext"

const LoginI = () => {
    const {login} = useAuth();
    const navigation = useNavigate();

    const handleClick = () => {
        login();
        navigation("/dashboard")
    }
    return(
        <div>
            <h1>Login page</h1>
            <button onClick={handleClick}>Login Here</button>
        </div>
    )
}
export default LoginI;