import { createContext } from "react";
const userContext =createContext({
    loggedInUser:"dibya majumadr", //always make context as a object .otherwise you cant use it as uerContext.provider 
} 
);
export default userContext; 