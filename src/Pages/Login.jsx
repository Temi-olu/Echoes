import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import thoughts from '../assets/thoughts.png'

function Login() {
  return (
    <div className='flex mt-12  justify-center items-center  '>
     <div className="flex shadow-xl p-3"> 
        <img 
        src={thoughts}
        className="w-64 border-none rounded-bl-lg  rounded-tl-lg "
        />
        <div className='ml-3 relative top-18  '>
      <motion.h1 
        intial={{x: 100, scale:0}}
        animate={{x: 70, scale:1}}
         transtion={{duration: 6}}
         className="text-3xl"
         >
        Login
      </motion.h1>
      {/* form */}
      <div className='flex flex-col gap-2'>
       <label htmlFor="">Email:</label>
       <input type="text" className="border rounded-lg p-2"  placeholder='e.g temi@example.com'/>
        <label htmlFor="">Password:</label>
          <input type="text" className="border rounded-lg p-2"  placeholder='*******'/>
     
      <button className="rounded-lg border-none p-2 flex mt-2 mb-1 justify-center text-white bg-blue-400 hover:bg-amber-600">Submit</button>
      </div>
      <motion.p className="text-gray-400">Don't have an account?<Link className="text-blue-500">Register</Link></motion.p>
      </div>
      </div>  
    </div>
  )
}

export default Login
