import { useEffect,useState } from "react";
import op from "./mocdata2"


export const useRestmenu=(Id)=>{
    
    const [fetchdata,setfetchdata]=useState(null);

    useEffect(()=>{
        fetchApi();
    },[])
    const fetchApi=async ()=>{
        try{
            const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId="+Id);
            const json=await data.json();
    //   const json= op;
      
      setfetchdata(json.data);
     
    //   [0].card.info.name
      
    }
    // console.log(fetchdata);
        
        catch (error) {
  console.error("Failed to fetch restaurant data:", error);
  console.log("pls download corr extension and on it else api will not work")
  const json = op;
   setfetchdata(json.data);
 
}
      
    }
if(fetchdata !=null){
    return fetchdata;
}
    // return <h1>waiting</h1>            //when we did not return anyting it means by default js return undefined .so we have to fix there where this return is worked .handel it using if else
    

}



