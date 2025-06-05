import { useState,useEffect } from "react";


export const useOnlineStatus=()=>{
  const [onlineStstus,setonlineStstus]=useState(true);
    useEffect(()=>{
window.addEventListener("offline",()=>{
    setonlineStstus(false);
})
window.addEventListener("online",()=>{
    setonlineStstus(true);
})
    },[])


    return onlineStstus;
}