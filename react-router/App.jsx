import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

function App(){
  const router = createBrowserRouter([
    {path:"/Pages/Home",element:<Home />},
    {path:"/Pages/ContactUs",element:<ContactUs />}
  ])
  return(
    <div>
      <h1>this is react-router testing</h1>
      <RouterProvider router={router} />
    </div>
  )
}
export default App;