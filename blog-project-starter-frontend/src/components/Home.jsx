import React from 'react'
import BlogProfileImage from "../assets/Blog Website Design.png"
import CSS from "../assets/css-3.png"
import HTML from "../assets/html.png"
import DB from "../assets/data-server.png"
import JS from "../assets/js.png"
import REACTICON from "../assets/physics.png"
import NODE from "../assets/node-js.png"
import P1 from "../assets/p1.jpg"
import P2 from "../assets/p2.png"
import P3 from "../assets/p3.png"
import BlogImage from "../assets/blogImage.png"
import { useNavigate } from 'react-router-dom';
import Footer from './common/Footer'
import {motion} from 'framer-motion'
import News from './News'
import About from './About'
function Home() {
    const navigate = useNavigate()
    return (
        <div>

            <div className='flex items-center justify-center mt-14 bg-gray-100 '>
                <motion.div
                initial={{opacity:0,translateX:"-100%"}}
                whileInView={{opacity:1,translateX:0}}
                transition={{duration:2}}
                className="w-full sm:w-1/2 flex-col justify-center">
                    <h2 className='text-3xl md:text-6xl font-bold pb-2 text-[#123C69] '>Hey! I Am</h2>
                    <h2 className='text-4xl md:text-7xl font-bold text-[#AC3B61] py-2'>Jacky Thomas</h2>
                    <div className='flex justify-center'>
                    <img src={BlogProfileImage} className='w-60 block sm:hidden ' alt="Blog Profile " />
                    </div>
                    <p className='py-2'>I can create stunning website for your company, Do check my works. I won't disappoint you. Try me for 7 Days before you decide anything.</p>
                    <button className='button-style mt-2'>Hire Me</button>
                </motion.div>
                <motion.div
                initial={{opacity:0,translateX:"100%"}}
                whileInView={{opacity:1,translateX:0}}
                transition={{duration:2}}
                
                className='justify-center hidden sm:block'>
                    <img src={BlogProfileImage} className='w-60 md:w-96 ' alt="Blog Profile " />

                </motion.div>

            </div>


            <motion.div
             initial={{ opacity: 0, translateY: "+100%" }}
             whileInView={{ opacity: 1, translateY: 0 }}
             transition={{ duration: 2 }}
            className='flex justify-evenly py-6 gap-1 mt-16'>
                <img className='w-12 md:w-24' src={HTML}  alt='#'/>
                <img className='w-12 md:w-24' src={CSS}  alt='#'/>
                <img  className='w-12 md:w-24' src={JS}  alt='#'/>
                <img  className='w-12 md:w-24' src={REACTICON} alt='#' />
                <img  className='w-12 md:w-24' src={DB}  alt='#' />
                <img  className='w-12 md:w-24' src={NODE}  alt='#' />
            </motion.div>

            <motion.div
             initial={{ opacity: 0, translateY: "+50%" }}
             whileInView={{ opacity: 1, translateY: 0 }}
             transition={{ duration: 2 }}
            className='flex flex-col mt-16 items-center justify-around sm:flex-row'>
                <div className='flex-col'>
                    <div className='mt-4 border-[6px] rounded-lg border-purple-500 p-5 border-t-0 w-60 flex-col items-center'>
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-purple-200 to-purple-600'>6</div>
                        <p className='text-center font-medium'>Projects Completed</p>
                    </div>
                    <div className='mt-4 border-[6px] rounded-lg border-green-500 p-5 border-t-0 w-60 flex-col items-center'>
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-green-200 to-green-600'>6</div>

                        <p className='text-center font-medium'>Months of Experience</p>
                    </div>
                </div>

                <div className='ml-4 mt-24 sm:mt-0'>
                    <h2 className='text-3xl sm:text-7xl font-bold text-[#123C69]'>My Awesome</h2>
                    <h2 className='text-3xl sm:text-7xl font-bold text-[#AC3B61]'>Services</h2>
                    <p className='my-2'>I have attahed my Resume here for your Reference</p>
                    <button className='button-style mt-2'>Download CV</button>

                </div>

            </motion.div>

            <motion.div
            initial={{ opacity: 0, translateY: "+60%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 2 }}

            className='mt-16'>
                <h2 className='text-center text-4xl md:text-5xl my-10 md:my-14 font-bold text-[#123C69]'>Checkout My Live <span className='text-[#AC3B61]'>Projects</span> Here</h2>
                <div className='flex items-center justify-around my-5 flex-col sm:flex-row'>

                    <img src={P1} className='w-64 border rounded-md cursor-pointer' alt="#" />

                    <img src={P2} className='w-64 border rounded-md cursor-pointer' alt="#" />

                    <img src={P3} className='w-64 border rounded-md cursor-pointer' alt="#" />

                </div>
            </motion.div>

                <News/>

                <About/>

            <motion.div
             initial={{ opacity: 0, translateY: "+50%" }}
             whileInView={{ opacity: 1, translateY: 0 }}
             transition={{ duration: 2 }}
            className='flex items-center justify-center my-14 mt-16'>
                <div className='justify-center hidden sm:block'>
                    <img src={BlogImage} className='w-60 md:w-96 ' alt="Blog Profile "></img>

                </div>
                <div className="w-full sm:w-1/2 flex-col justify-center ml-6">
                    <h2 className='text-4xl md:text-6xl font-bold pb-2 text-[#123C69]'>I like to Write</h2>
                    <h2 className='text-4xl md:text-7xl font-bold text-[#AC3B61] py-2'>Blogs about tech</h2>

                    <p className='py-2'>You can know better about me by reading my blogs here. I share my expertise here.</p>
                    <button className='button-style mt-2' onClick={() => navigate("/blogs")}>Read My Blogs</button>
                </div>


            </motion.div>


            <Footer/>


        </div>
    )
}

export default Home