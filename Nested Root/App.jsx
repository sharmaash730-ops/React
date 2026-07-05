import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import DashLayout from "./Layout/DashLayout";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";

const router=createBrowserRouter([
  {
    path:"/dashboard",
    element:<DashLayout />,
    children:[
      {index:true,element:<Navigate to="profile" />},
      {path:"profile",element:<Profile />},
      {path:"setting",element:<Setting />}, 
    ]
  }
])

function App(){
  return<RouterProvider router = {router} />
}
export default App;