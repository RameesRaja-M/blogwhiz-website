import React from 'react'
import { motion } from 'framer-motion'

const News = () => {
  return (
    <>
    <motion.section 
    initial={{ opacity: 0, translateY: "+100%" }}
    whileInView={{ opacity: 1, translateY: 0 }}
    transition={{ duration: 2 }}
    
    className=" container mx-auto text-center mt-16 ">
        <h1 className=" text-3xl md:text-5xl font-bold mt-5 p-2 font-chakra text-[#AC3B61]">Join Our News Letter</h1>
        <p className=" text-2xl m-3 md:text-3xl font-semibold">Signup for our email newspaper to get exclusive discounts, updates, and
            more </p>
        <input type="text" className="border border-black p-2 m-3 w-[80%] "/>
        <br />
        <button className="button-style py-2 px-2 text-white text-xl font-bold rounded-md w-fit my-5">Subscribe</button>
    </motion.section>
</>
  )
}

export default News