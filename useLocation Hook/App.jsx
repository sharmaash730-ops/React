import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home";
import LocationInfo from "./Pages/Locationinfo";

const router = createBrowserRouter([
    {path:"/", element:<Home />},
    {path:"/location", element:<LocationInfo />}
])
function App(){
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
export default App;