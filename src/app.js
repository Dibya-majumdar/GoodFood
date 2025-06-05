import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Cart from "./components/Cart.js";
 import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

import Inner from "./components/Inner";
import { useOnlineStatus } from "../util/useOlineStatus";


import { useContext, useEffect, useState } from "react";
import userContext from "../util/userContext.js";
import { Provider } from "react-redux";
import appStore from "../util/appStore.js";
import Designer from "./components/Designer.js";





const App=()=>{
   const data1=useContext(userContext)
    const [username,setusername]=useState(data1);

    useEffect(()=>{
        const data={
            loggedInUser:"brkfire"
        }
        setusername(data)
    },[])

const OnlineStatus=useOnlineStatus();
// console.log(OnlineStatus)
if(OnlineStatus==false){
    return <h1>oops something went wrong</h1>
}else{


    return (
        <Provider store={appStore}>
        <>
       <userContext.Provider value={username}   >
      
      
        <Header/>
       
     {/*  i want to make here some conditioal renderingg .so if path =/ then i want home page and if our path is /about then we want to change the path as the about component */}
      <Outlet/>
      </userContext.Provider>
     
       </>
       </Provider>
)

}

}

let router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/Cart",
                element:<Cart/>
            },
            {
                path:"/Designer",
                element:<Designer/>
            },
            {
                path:"/cpp/:Id",
                element:<Inner   />
            }
        ]

    }
  
])

const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={router}/>);












