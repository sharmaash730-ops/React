import { createBrowserRouter, RouterProvider } from "react-router";
// import Home from "./Pages/Home";
// import Product from "./Pages/Product";
// import LocationInfo from "./Pages/LocationInfo";
import React, { Suspense } from "react";

const Home = React.lazy(() => import ('./pages/Home'));
const LocationInfo = React.lazy(() => import ('./pages/Locationinfo'))
const Product = React.lazy(() => import ('./pages/Product'))

const router= createBrowserRouter([
    {path:"/",element:<Home />},
    {path:"/locationInfo",element:<LocationInfo />},
    {path:"/product",element:<Product />},
])

function App(){
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router}/>
        </Suspense>
    )
}
export default App;