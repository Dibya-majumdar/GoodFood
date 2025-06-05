import dibyaImg from "./dibya.jpg";
const Designer=()=>{
    return(
        <>
        <div id="userExp" className="h-full w-[500px] ml-[700px] mb-5 rounded-md cursor-pointer bg-[#1D232A] text-white     mt-5 border border-solid border-black"> 
                      
                      <div className="w-[500px] h-[580px] ">
                          <img src= {dibyaImg} className=" w-full h-full object-fill  "></img>
                         
                      </div>
                      <div className="flex mt-5 w-[500px]">
                          <p  className="ml-5 text-3xl font-bold ">Dibya Majumdar</p> 
                           <p className="ml-3 ">21</p>
                        </div>
                      <p className="ml-5 text-xl ">male</p>
                      <div className="ml-5 text-xl ">
                          <p>Aspiring Full Stack Developer & Machine Learning Enthusiast</p>
                      </div>
                      
        
        
                  </div>
        </>
    )
}
export default Designer