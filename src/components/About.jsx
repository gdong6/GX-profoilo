import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[220px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.74)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card shadow-indigo-500/30 dark:shadow-indigo-500/60"
      >
        <div 
          options={{max:45, scale: 1, speed: 450 }} 
          className='bg-gradient-to-b from-gray-100 to-gray-300 dark:bg-gradient-to-br dark:from-gray-700 dark:via-gray-900 dark:to-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-zinc-400 text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div>
        <p className="sm:text-[18px] text-[14px] text-black dark:text-secondary uppercase tracking-wider">Introduction</p>
        <h2 className="text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("","", 0.1, 1)}
        className="mt-4 text-zinc-400 dark:text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi there! I'm Guoxuan, a grad student studying at Cornell University. Anything about electronics always attracts me, and this is why I chose computer science as my major at UW-Madison for four years. I always believe technology can bring people a better life in an intangible and seamless way, like smart homes, smartphones, and wearable devices. All those technologies are powered by software.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")