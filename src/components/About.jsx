import userContext from "../../util/userContext";
import { useContext } from "react";

const About = () => {
  let data = useContext(userContext);
  
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">About GoodFood</h1>
          <p className="text-xl text-gray-400">Delivering happiness, one meal at a time</p>
        </div>
        
        {/* Main Content */}
        <div className="glass-effect rounded-2xl p-8 md:p-12 space-y-8">
          
          <div className="space-y-4">
            <p className="text-lg text-gray-300 leading-relaxed">
              GoodFood is a platform made for users to discover and order delicious food from the best restaurants around you.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl p-6 border border-emerald-500/20">
              <div className="text-3xl mb-3">🚀</div>
              <h2 className="text-xl font-bold text-emerald-400 mb-2">Our Mission</h2>
              <p className="text-gray-400">
                To create a seamless food ordering experience like popular apps, making it easy for everyone to enjoy great food.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
              <div className="text-3xl mb-3">💡</div>
              <h2 className="text-xl font-bold text-blue-400 mb-2">Why GoodFood?</h2>
              <p className="text-gray-400">
                Built as a learning project to explore React, Redux, and modern web development practices.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-6 border border-orange-500/20">
              <div className="text-3xl mb-3">🧑‍💻</div>
              <h2 className="text-xl font-bold text-orange-400 mb-2">Meet the Creator</h2>
              <p className="text-gray-400">
                Hey! I'm Dibya, a Computer Science student and passionate web developer exploring the world of full-stack development.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-xl p-6 border border-pink-500/20">
              <div className="text-3xl mb-3">🌱</div>
              <h2 className="text-xl font-bold text-pink-400 mb-2">What's Next?</h2>
              <p className="text-gray-400">
                Working on real-time features, payment integration, and enhanced user experience. Stay tuned!
              </p>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center pt-6">
            <h2 className="text-2xl font-bold text-white mb-4">🤝 Join the GoodFood Community</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/" className="btn-primary">Order Now</a>
              <a href="/Designer" className="px-6 py-2 rounded-full border border-gray-600 text-gray-300 hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300">
                Meet Designer
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About;
