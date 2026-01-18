import { Link } from "react-router-dom";

const Cards=(prop)=>{
   
    const {po}=prop;
   
      return(
        <div className="group relative w-full sm:w-[280px] md:w-[300px] rounded-2xl overflow-hidden glass-effect card-hover cursor-pointer">
          <Link to={"/cpp/"+po.info.id} className="block">
            {/* Image Container */}
            <div className="relative h-48 sm:h-52 overflow-hidden">
              <img 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+po.info.cloudinaryImageId}
                alt={po.info.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Rating Badge */}
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-emerald-500/90 backdrop-blur-sm px-2 py-1 rounded-full">
                <span className="text-yellow-300">★</span>
                <span className="text-white text-sm font-semibold">{po.info.avgRating}</span>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-white truncate group-hover:text-emerald-400 transition-colors">
                {po.info.name}
              </h3>
              <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                {po.info.cuisines.join(', ')}
              </p>
              
              {/* Footer */}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-700">
                <span className="text-emerald-400 font-medium text-sm">
                  {po.info.sla?.deliveryTime || '30'} mins
                </span>
                <span className="text-gray-400 text-sm">
                  {po.info.costForTwo || '₹300 for two'}
                </span>
              </div>
            </div>
          </Link>
        </div>
      )
  }
  export default Cards;