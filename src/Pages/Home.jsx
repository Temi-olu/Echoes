import { motion } from "framer-motion"
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <div className="flex flex-col gap-3 items-center justify-center">
        <motion.h1
          initial={{ opacity: 0.2, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-white" >
          Echoes
        </motion.h1> 

        <motion.p
          initial={{ opacity: 0.2, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-gray-100"
        >
          Your thoughts echoing back, beautifully animated
        </motion.p>

        <div className="flex gap-2 shadow-2xs">
          <Link to="/login">
            <button className="border-none w-24 mt-2 hover:bg-blue-500 rounded-lg text-blue-950 bg-gray-200 p-2">
              Login
            </button>
          </Link>
          <button className="border-none w-24 mt-2 hover:bg-amber-500 rounded-lg text-gray-200 bg-blue-950 p-2">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
