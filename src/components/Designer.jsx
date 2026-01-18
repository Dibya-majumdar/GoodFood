import dibyaImg from "./dibya.jpg";

const Designer=()=>{
    return(
      <div className="min-h-screen py-12 px-4 flex items-center justify-center">
        <div className="max-w-md w-full">
          {/* Profile Card */}
          <div className="glass-effect rounded-3xl overflow-hidden card-hover">
            {/* Cover Image */}
            <div className="relative h-80 sm:h-96">
              <img 
                src={dibyaImg} 
                className="w-full h-full object-cover"
                alt="Dibya Majumdar"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-emerald-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span className="text-white text-sm font-medium">Available</span>
              </div>
            </div>
            
            {/* Info Section */}
            <div className="p-6 -mt-16 relative">
              {/* Name & Age */}
              <div className="flex items-end gap-3 mb-4">
                <h2 className="text-3xl font-bold text-white">Dibya Majumdar</h2>
                <span className="text-gray-400 text-lg pb-1">21</span>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Male</span>
                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">Developer</span>
                <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">Student</span>
              </div>
              
              {/* Bio */}
              <p className="text-gray-300 leading-relaxed mb-6">
                Aspiring Full Stack Developer & Machine Learning Enthusiast. Passionate about building beautiful web experiences and exploring AI/ML.
              </p>
              
              {/* Skills */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✨</span>
                  <span className="text-gray-400">React, Node.js, Python</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">🎯</span>
                  <span className="text-gray-400">Web Development, Machine Learning</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="btn-primary flex-1">
                  Connect
                </button>
                <button className="flex-1 py-2 rounded-full border border-gray-600 text-gray-300 hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Designer