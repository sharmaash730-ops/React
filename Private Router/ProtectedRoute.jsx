import { Navigate } from "react-router";
import { useAuth } from "./AuthContext"

const ProtectedRoute = ({ children }) => {
    const { isLogin } = useAuth();

    if (!isLogin){
        return <Navigate to="/login" replace />
    }
    return children;
}
export default ProtectedRoute;