import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { linkedin, github_follow } from '../assets'

const Contact = () => {

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact.
        </h3>
 
        <div>
          <button 
            className='bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 m-3 rounded-xl inline-flex items-center border border-gray-40 shadow-gray-600 shadow-md'
            onClick={() => window.open("https://github.com/gdong6", "_blank")}
          >
            <img className='fill-current h-9 mr-2' src={ github_follow }/>
            <span>gdong6 GitHub</span>
          </button>

          <button 
            className='bg-white hover:bg-indigo-100 text-[#0077B5] font-bold py-2 px-4 m-3 rounded-xl inline-flex items-center border-4 border-[#0077B5] shadow-blue-500/50 shadow-md'
            onClick={() => window.open("https://www.linkedin.com/in/dong-guoxuan-008910226/", "_blank")}
          >
            <img className='fill-current h-9 mr-2' src={ linkedin }/>
            <span>view my profile</span>
          </button>
          
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")