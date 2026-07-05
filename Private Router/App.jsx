import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import LoginI from "./Pages/LoginI";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
    {path:"/",element:<Home />},
    {path:"/login",element:<LoginI />},
    {path:"/dashboard",element:(
        <ProtectedRoute>
            <Dashboard/>
        </ProtectedRoute>
    )}
])
function App(){
    return <RouterProvider router = {router} />
};
export default App;