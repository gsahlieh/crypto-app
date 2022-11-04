import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext'
import Nav3d from "./three/Nav3d"

function Navbar() {

  const {user, logOut} = UserAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    try{
      await logOut()
      handleMenu()
      navigate('/')
    } catch(err) {
      console.log(err.message)
    }
  }

  const [menu, setMenu] = useState(false)
  const handleMenu = () => {
    setMenu(!menu);
  }

  return (
    <div className='rounded-div select-none flex items-center justify-between h-20 font-bold'>
      <Link to='/'>
        <div className='flex flex-row'>
          <div className='w-52'>
            <Nav3d />
          </div>
          <div className='m-auto'>
            <h1 className='text-2xl'>GS Crypto</h1>
          </div>
        </div>
      </Link>

      {/* Theme Toggle */}
      <div className='hidden md:block'>
        <ThemeToggle />
      </div>

      {/* Sign In & Sign Up */}
      {user?.email ? (
        <div className='hidden md:block'>
          <Link to='/account' className='p-4 hover:text-accent'>Account</Link>
          <button onClick={handleSignOut} className='bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl'>Sign out</button>
        </div>
      ) : (
        <div className='hidden md:block'>
          <Link to='/signin' className='p-4 hover:text-accent'>
            Sign In</Link>
          <Link to='/signup' className='bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl'>
            Sign Up</Link>
        </div>
      )}

      {/* Menu Icon */}
      <div onClick={handleMenu} className='block md:hidden cursor-pointer z-10'>
        {menu ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
      </div>


      {/* Mobile Menu */}
      <div className={
        menu
          ? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10'
          : 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'
        }
      >
        <ul className='w-full p-4'>
          <li className='border-b py-6'>
            <Link to='/' onClick={handleMenu}>Home</Link>
          </li>
          <li className='border-b py-6'>
            <Link to='/account' onClick={handleMenu}>Account</Link>
          </li>
          <li className='border-b py-6'>
            <ThemeToggle />
          </li>
        </ul>
        <div className='flex flex-col w-full p-4'>

        {user?.email ? (
        <div>
          <Link to='/account'>
            <button onClick={handleMenu} className='w-full my-2 p-4 bg-primary border border-secondary rounded-2xl shadow-xl'>
              Account
            </button>
          </Link>
          <button onClick={handleSignOut} className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>Sign out</button>
        </div>
        ) : (
          <div>
            <Link to='/signin'>
              <button onClick={handleMenu}
                className='w-full my-2 p-4 bg-primary border border-secondary rounded-2xl shadow-xl'
              >Sign In
              </button>
            </Link>
            <Link to='/signup'>
              <button onClick={handleMenu}
                className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'
                >Sign Up
              </button>
            </Link>
          </div>
        )}
        </div>
      </div>

    </div>
  )
}

export default Navbar