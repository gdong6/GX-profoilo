import React, { useEffect, useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'

import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const ExperienceCard = ({ experience, darkMode }) => (
  <VerticalTimelineElement
    contentStyle={{ background: `${darkMode==='dark'? "#151517" : "gray"}`, color: "white" }}
    contentArrowStyle={{ borderRight: "7px solid  black" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%]object-contain"/>
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{ margin:0 }}>{ experience.company_name }</p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      { experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme")? localStorage.getItem("theme") : "dark"
  );

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    console.log(newColorScheme);
    setDarkMode(event.matches ? "dark" : "light")
  });



  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-black dark:text-secondary text-center uppercase tracking-wider">
          What I have done so far
        </p>
        <h2 className="text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#105BF5] to-[#C2E8FC] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          My Experience_
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline  lineColor={ 'gray' } >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              darkMode={darkMode}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")