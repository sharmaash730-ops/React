import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import ContactUs from './Components/ContactUs.jsx';

const router = createBrowserRouter([
  {
    path:"/", element: <App />,
    children:[
      {path:"/",element: <Home />},
      {path:"About",element: <About />},
      {path:"ContactUs",element: <ContactUs/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);