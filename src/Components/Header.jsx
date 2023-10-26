import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import BasicTextFields from './Search';
// import { Link } from 'react-router-dom';

const NavBar = ({ imgSrc, li1, li2, customClass1, customClass2, onClick2, linkTo1, imgClass }) => {

  let [open, setOpen] = useState(false);

  return (
    <div className='shadow-2xl h-16 w-full fixed top-0 left-0 z-[100] bg-white'>
      <div className={`md:flex items-center justify-between md:px-10 px-7`}>
        <div className='font-semibold text-2xl md:mt-1 mt-2 cursor-pointer flex items-center gap-1'>
          <h1 className='text-white text-2xl'> <img src="/src/logo.png" alt="logo" className='max-w-full' /></h1>
        </div>
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer lg:hidden w-7 h-7'>
          {
            open ? <XMarkIcon /> : <Bars3BottomRightIcon />
          }
        </div>
        <ul className={`lg:flex lg:items-center  absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>

          <li className='lg:ml-8 lg:my-0 my-7 font-semibold text-lg '>
            <a onClick={onClick2} className={`text-gray-500 hover:text-blue-400   duration-500 ${customClass2} `}>About</a>
          </li>
          <li className='lg:ml-8 lg:my-0 my-7 font-semibold text-lg '>
            <a onClick={onClick2} className={`text-gray-500 hover:text-blue-400   duration-500 ${customClass2} `}>Services</a>
          </li>
          <li className='lg:ml-8 lg:my-0 my-7 font-semibold text-lg '>
            <a onClick={onClick2} className={`text-gray-500 hover:text-blue-400   duration-500 ${customClass2} `}>Solutions</a>
          </li>
          <li className='lg:ml-8 lg:my-0 my-7 font-semibold text-lg '>
            <a onClick={onClick2} className={`text-gray-500 hover:text-blue-400   duration-500 ${customClass2} `}>Track</a>
          </li>
          <li className='lg:ml-8 lg:my-0 my-7 font-semibold text-lg '>
            <a onClick={onClick2} className={`text-gray-500 hover:text-blue-400   duration-500 ${customClass2} `}>Contact Us</a>
          </li>
          <li className='lg:ml-8 lg:my-0 my-7 font-semibold text-lg '>
            <a onClick={onClick2} className={`text-gray-500 hover:text-blue-400   duration-500 ${customClass2} `}>Associates</a>
          </li>
          <li className='lg:ml-8 lg:my-0 my-7 font-semibold text-lg '>
            <a onClick={onClick2} className={`text-gray-500 hover:text-blue-400   duration-500 ${customClass2} `}>Careers</a>
          </li>
          <li className='lg:ml-8 lg:my-0 my-7 font-semibold text-lg '>
            <BasicTextFields onClick={onClick2}  />
          </li>

        </ul>
      </div>
    </div>
  );
};

export default NavBar;