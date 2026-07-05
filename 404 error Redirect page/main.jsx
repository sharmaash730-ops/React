import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import ContactUs from './Components/ContactUs.jsx';
import NotFound from './Components/NotFound.jsx';
import RedirectPage from './Components/RedirectPage.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement:<NotFound />,
    children:[
      {path:"/",element: <Home />},
      {path:"About",element: <About />},
      {path:"ContactUs",element: <ContactUs/>},
      {path:"*" , element: <NotFound />},
      {path:"home",element: <RedirectPage />},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);