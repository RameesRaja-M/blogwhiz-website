import React from 'react'
import { motion } from 'framer-motion'
function Footer() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: "+100%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 2 }}

        className=" mt-6 p-5 bg-gray-900 text-white flex justify-between text-center ">
        <div className="flex  flexgap-5">

          <div className="flex flex-col justify-between text-center">

            <p>Blogwhiz Business</p>
            <p>Teach On Blogwhiz</p>
            <p>Get the App</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
          <div className="flex flex-col justify-between text-center">
            <p>Careers</p>
            <p>Blog</p>
            <p>Help and Support</p>
            <p>Affiliate</p>
            <p>Investors</p>
          </div>
        </div>
        <div className=" mt-10 md:mt-20 md:mr-18">

          <h1 className=" md:text-3xl font-bold">B L O G W H I Z </h1>
          <p className="md:text-xl mt-2 mr-2 ">&copy; 2024 BlogWhiz. All rights reserved</p>
        </div>
      </motion.div>
    </>
  )
}

export default Footer