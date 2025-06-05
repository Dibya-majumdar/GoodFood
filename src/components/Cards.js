import { Link } from "react-router-dom";

const Cards=(prop)=>{
   
    const {po}=prop;
   
      return(
          <div   className="h-full w-48 bg-neutral-200 rounded-md hover:bg-neutral-400 shadow-xl">
           <Link to={"/cpp/"+po.info.id}>
           {/* <Link to="/cpp/:Id"> */}
                  <img className="mt rounded-md w-full h-40 " src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+po.info.cloudinaryImageId}></img>
                  <p> {po.info.name}</p>
                  <p>{po.info.cuisines.join(', ')}</p>

                  <p>{po.info.avgRating}</p>
                 
                  </Link> </div>
      )
  }
  export default Cards;