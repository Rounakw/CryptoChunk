import React, { useEffect, useState } from 'react'
import { Input, ToogleBtn, Logo, Button } from '../index'
import { useDispatch, useSelector } from 'react-redux'
import { toogleTheme } from '../../store/Slices/ThemeSlice'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import InfoIcon from '@mui/icons-material/Info';
import Page from './Page';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MobilePage from './MobilePage';
import LoginModal from '../login/LoginModal';
import RegisterModal from '../register/RegisterModal';


function Navbar() {

  let [show, setShow] = useState(false)
  let [isLoginModalOpen, setLoginModalOpen] = useState(false)
  let [isRegisterModalOpen, setRegisterModalOpen] = useState(false)

  let pages = [
    {
      name: "Home",
      icon: <HomeIcon />
    },
    {
      name: "Profile",
      icon: <PersonIcon />
    },
    {
      name: "Coins",
      icon: <CurrencyBitcoinIcon />
    },
    {
      name: "About me",
      icon: <InfoIcon />
    },
  ]

  let dispatch = useDispatch()
  const theme = useSelector((state) => {
    return state.theme
  })
  const handleOnClickThemeChange = () => {
    dispatch(toogleTheme(theme === 'light' ? 'dark' : 'light'));
  }
  useEffect(() => {
    theme === 'dark'
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark")
  }, [theme])

  function handleOnClickMenu(e) {
    setShow(e)
  }

  return (
    <div className='flex bg-slate-200 dark:bg-slate-900 items-center justify-between px-10 py-4 dark:border-b-[1px] dark:border-b-white'>
      <Logo />

      <div className="flex max-2xl:gap-6 max-lg:gap-[15px] dark:text-white max-md:hidden">
        {
          pages.map((info) => {
            return <Page key={info.name} name={info.name} icon={info.icon} />
          })
        }
      </div>

      {/* for laptop or desktop */}
      <div className='hidden md:flex md:items-center'>
        <ToogleBtn onClick={handleOnClickThemeChange} />
        <Button style={""} text={"Sign In"} />
      </div>

      {/* for mobile and tablet */}

      <div className='md:hidden sm:flex items-center gap-2'>
        <div className='hidden sm:flex '>
          <ToogleBtn onClick={handleOnClickThemeChange} />
          <Button style={""} text={"Sign In"} />
        </div>


        <MenuIcon fontSize='large' className='dark:text-white' onClick={() => { handleOnClickMenu(true) }} />


      </div>


      {/* hamburger slider */}
      <div className={`${show ? 'transition-transform z-50 translate-y-[0px] ease-linear duration-500' : 'transition-transform z-50  translate-y-[-100%] ease-linear duration-500'} md:hidden absolute flex-col bg-slate-200 w-full top-0 left-0 dark:bg-gray-700 dark:text-white`}>
        <div className='flex items-center justify-between px-10 py-4 border-b-[0.5px] bg-slate-300 dark:bg-slate-800 border-black dark:border-white'>
          <span className='sm:hidden'>
            <ToogleBtn onClick={handleOnClickThemeChange} />
          </span>
          <Logo />
          <CloseIcon fontSize='large' onClick={() => { handleOnClickMenu(false) }} />
        </div>

        {
          pages.map((info) => {
            return <MobilePage key={info.name} name={info.name} icon={info.icon} />
          })
        }
        <div className='flex items-center justify-center py-3 gap-3'>
          <Button style={""} text={"Log In"} onClick={()=>{setLoginModalOpen(true);setShow(false) }} />
          <Button style={""} text={"Register"} onClick={()=>{setRegisterModalOpen(true);setShow(false) }}/>
        </div>
      </div>
      {isLoginModalOpen && <LoginModal setLoginModalOpen={setLoginModalOpen}/>}
      {isRegisterModalOpen && <RegisterModal setRegisterModalOpen={setRegisterModalOpen}/>}
    </div>
  )
}

export default Navbar
