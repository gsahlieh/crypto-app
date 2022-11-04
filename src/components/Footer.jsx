import React from 'react';
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import ThemeToggle from './ThemeToggle';

function Footer() {
  return (
    <div className='rounded-div mt-8 pt-8 text-primary'>
      <div className='flex flex-col md:w-[70%] m-auto'>
        <div className='flex flex-row justify-between items-center'>
          <div className='w-[50%]'>
            <div>
              <p className='text-center'>Gabriel Sahlieh</p>
            </div>
            <div className='flex py-4 justify-between text-accent w-40 m-auto'>
              <FaGithub
                onClick={() => (
                  window.open("https://github.com/gsahlieh", '_blank', 'noopener,noreferrer')
                )}
                size={30} className='cursor-pointer hover:scale-105 duration-200'
              />
              <FaLinkedin
                onClick={() => (
                  window.open("https://www.linkedin.com/in/gabriel-sahlieh-46534621b/", '_blank', 'noopener,noreferrer')
                )}
                size={30} className='cursor-pointer hover:scale-105 duration-200'
              />
              <MdEmail
                onClick={() => (
                  window.open("mailto:collyerfj@gmail.com", '_blank', 'noopener,noreferrer')
                )}
                size={30} className='cursor-pointer hover:scale-105 duration-200'
              />
            </div>
          </div>
          <div className='m-auto mb-8'>
            <ThemeToggle />
          </div>
        </div>
        <div className='border-t w-[80%] m-auto'>
          <a href='https://www.coingecko.com/en/api/documentation' target='_blank' rel='noreferrer'>
            <p className='text-center py-4 cursor-pointer'>Powered by Coin Gecko</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer