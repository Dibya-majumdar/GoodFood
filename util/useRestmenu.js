import { useEffect,useState } from "react";


export const useRestmenu=(Id)=>{
    
    const [fetchdata,setfetchdata]=useState(null);

    useEffect(()=>{
        fetchApi();
    },[])
    const fetchApi=async ()=>{
      const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId="+Id);
      const json=await data.json();
      
      setfetchdata(json.data);
     
    //   [0].card.info.name
      
    }
    // console.log(fetchdata);

if(fetchdata !=null){
    return fetchdata;
}
    // return <h1>waiting</h1>            //when we did not return anyting it means by default js return undefined .so we have to fix there where this return is worked .handel it using if else
    
}