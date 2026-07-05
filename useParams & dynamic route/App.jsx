import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";


const router = createBrowserRouter([
  {path:"/",element:<Home />},
  {path:"/user/:id",element: <Profile />},
]);

function App(){
  return <RouterProvider router={router}/>
}
export default App; 