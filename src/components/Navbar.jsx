import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles} from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const element = document.documentElement;
  const [lang, setLang] = useState(true);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme")? localStorage.getItem("theme") : "dark"
  );
  const darkQury = window.matchMedia("(prefers-color-scheme: dark)");

  function onWindowMatch() {
    if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQury.matches)) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();
  
  useEffect(() => {
    switch (darkMode) {
      case true:
        element.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;
      case false:
        element.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        break;
      default:
        localStorage.removeItem('theme');
        break;
  }
  }, [darkMode]);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm border-b border-white dark:border-gray-600`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={() => { 
            setActive(""); 
            window.scrollTo(0,0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className='text-black dark:text-white text-[18px] font-bold cursor-pointer flex'>
            Guoxuan &nbsp;
            <span className='sm:block hidden'>|&nbsp; Dong</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li 
              key={link.id} 
              className={`${active === link.title ? (darkMode? "text-white" : "text-black") : (darkMode? "text-secondary" : "text-[#B3B6B7]")} hover:text-[#0078FF] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}  
        </ul>
          
        {/* setting buttons */}
        <div className='flex justify-between items-center'>
          {/* languages */}
          <button className='mr-2'>
            <svg id="" className="fill-black dark:fill-secondary hover:scale-x-[-1] w-7 h-7 object-contain" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
              onClick={() => setLang(!lang)}
            >
              <title> language </title>
              <path d="M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z"/>
            </svg>
          </button>
          {/* dark mode */}
          <button >
            <svg id="darkmode" className="fill-black dark:fill-secondary transition duration-300 ease-in-out hover:rotate-180 w-8 h-8 object-contain" width="20" height="20" version="1.1" viewBox="0 -60 700 700" xmlns="http://www.w3.org/2000/svg"
              onClick={() => setDarkMode(!darkMode)}
            >
            <title> dark mode </title>
              <g>
                <path d="m533.3 426.86c33.332-41.707 51.555-93.473 51.699-146.86-0.57031-61.953-25.363-121.23-69.074-165.13-43.715-43.906-102.88-68.965-164.82-69.809-47.91 0.050781-94.676 14.613-134.14 41.77-39.469 27.152-69.785 65.629-86.957 110.35-17.969 47.719-19.93 99.984-5.582 148.91 14.348 48.93 44.223 91.863 85.113 122.32 40.891 30.461 90.582 46.789 141.57 46.527 35.004-0.23828 69.516-8.2656 101.03-23.5 31.516-15.234 59.242-37.297 81.172-64.582zm-183.3 47.562c-51.879-0.53516-101.44-21.574-137.86-58.527-36.422-36.949-56.738-86.812-56.52-138.7 1.2383-51.09 22.352-99.684 58.855-135.45 36.504-35.766 85.52-55.887 136.62-56.086v91.539c36.379 0.50781 69.785 20.211 87.828 51.805 18.047 31.594 18.047 70.375 0 101.97-18.043 31.594-51.449 51.297-87.828 51.805v91.559z"/>
                <path d="m247.1 280c0.24219 27.398 11.316 53.586 30.801 72.848 19.484 19.258 45.801 30.027 73.199 29.953v-205.6c-27.398-0.074219-53.715 10.695-73.199 29.953-19.484 19.262-30.559 45.449-30.801 72.848z"/>
              </g>
              </svg>
          </button>
        </div>

        {/* mobile menu icon */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={!toggle ? menu : close} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer rounded bg-black dark:bg-transparent'
            onClick={() => setToggle(!toggle)}
          />
          
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li 
                  key={link.id} 
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium text-[16px] cursor-pointer`}
                  onClick={() => {
                    setActive(link.title)
                    setToggle(!toggle)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar