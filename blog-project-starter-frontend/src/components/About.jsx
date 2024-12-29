import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <>
      <section className="text-center bg-gray-200 shadow-2xl mt-20 mb-10 md:m-10">
        <h1 className="text-4xl font-bold mt-5 text-[#AC3B61] font-chakra">About US</h1>
        <p className="m-2 md:text-xl font-poppins font-medium mt-5">Welcome to BLOGWHIZ, the ultimate platform for bloggers and content creators who value effortless communication and effective audience engagement. </p>
        <div className="md:flex ">
          <motion.div
            initial={{ opacity: 0, translateY: "+100%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 2 }}

            className="border border-white bg-[#AC3B61] text-white p-2 m-6">

            <h2 className="text-2xl font-medium text-white font-poppins pb-2">Simplify Blogging</h2>
            <p>Transform your blogging journey with BLOGWHIZ. From customizable templates to in-depth analytics, 
              we provide the tools you need to craft impactful blog posts and connect with your audience. 
              Whether you're sharing ideas, stories, or expertise, BLOGWHIZ makes it simple to grow and succeed.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: "+130%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 2 }}

            className="border border-white bg-[#AC3B61] text-white p-2 m-6">

            <h2 className="text-2xl font-medium text-white font-poppins pb-2">Effortless Content Management</h2>
            <p>BLOGWHIZ offers seamless tools to elevate your blogging game. 
              From automated scheduling to detailed performance reports, 
              we’ve got everything you need to run a successful blog. 
              Engage your readers with beautifully designed posts and track your growth in real time. 
              Achieve more with BLOGWHIZ effortlessly!</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: "+160%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 2 }}

            className="border border-white bg-[#AC3B61] text-white p-2 m-6">

            <h2 className="text-2xl font-medium text-white font-poppins pb-2">Smarter Blogging Tools</h2>
            <p>BLOGWHIZ makes blogging smarter and more impactful. With advanced customization options, 
              tailored templates, and real-time insights, you can target the right audience and maximize your reach. 
              Whether you're a beginner or a seasoned blogger, 
              BLOGWHIZ empowers you to create better content and achieve your goals with ease!</p>
          </motion.div>

        </div>
      </section>
    </>
  )
}

export default About