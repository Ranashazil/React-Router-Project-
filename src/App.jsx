import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Normal from "./Normal";
import Home from "./components/Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import User from "./User/User";
import Github, { infoLoader } from "./Github/Github";

const router2 = createBrowserRouter([
  {
    path: "/", // this is top level elemnt iske ander nesting ho rai ha,
    element: <Normal />,
    children: [
      {
        path: "",
        element: <Home/>
      }, 
      {
       path: "about", 
       element: <About/>
      },
      {
       path: "contact", 
       element: <Contact/>
      },
      {
       path: "user/:ourId", 
       element: <User/>
      },
      {
        path : "github",
        element: <Github/>,
        loader : infoLoader,
      },
    ]
  
  },

]);
function App() {
 

  return (
    <>
      <RouterProvider router={router2} />
    </>
  );
}

export default App;
