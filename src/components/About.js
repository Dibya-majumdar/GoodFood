import userContext from "../../util/userContext";
import { useContext } from "react";



const About=()=>{

let data=useContext(userContext);
    return (
         <>
         <div>
      <div className="p-6 md:p-12 text-white  bg-[#1D232A]   mt-2 mb-2  lg:w-1/2 px-6 md:px-16 py-12 flex flex-col lg:ml-[550px] rounded-md overflow-hidden ">
  <h1 className="text-3xl md:text-5xl font-bold text-green-600 mb-4">About GoodFood</h1>
  
  <p className="text-lg md:text-xl mb-6">
    GoodFood is a platform made for users to buy the foods listed here
  </p>
  
  <h2 className="text-2xl font-bold text-green-600 mb-2">🚀 Our Mission</h2>
  <p className="mb-6">
    To make a website liek online food ordering app
  </p>

  <h2 className="text-2xl font-bold text-green-600 mb-2">💡 Why GoodFood?</h2>
  <p className="mb-6">
    i made it just to check am i able to make swigy like website or not
  </p>

  <h2 className="text-2xl font-bold text-green-600 mb-2">🧑‍💻 Meet the Creator</h2>
  <p className="mb-6">
    Hey! I’m Dibya, a Computer Science student and passionate web developer. I created DevBuddy because I personally felt the need to find coding partners who share the same vibe and ambition.
  </p>

  <h2 className="text-2xl font-bold text-green-600 mb-2">🌱 What's Next?</h2>
  <p className="mb-6">
    We're working on features like real-time chat, matching algorithms, and project collaboration tools. Stay tuned!
  </p>

  <h2 className="text-2xl font-bold text-green-600 mb-2">🤝 Join the GoodFood Community</h2>
  
</div>

    </div>
        </>
    )
}
export default About;