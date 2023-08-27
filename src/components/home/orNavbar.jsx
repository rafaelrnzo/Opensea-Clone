import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import InputWithIcon from './iconInput';
import WalletRoundedIcon from '@mui/icons-material/WalletRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React, { useState, useEffect } from 'react';
import OrInput from './input';
import { Link } from 'react-router-dom';

const OrNavbar = () => {
  // const [isSticky, setIsSticky] = useState(false);

  // const handleScroll = () => {
  //   setIsSticky(window.scrollY >= 100);
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div id="nav-navbar" className={` w-screen p-3 px-12 flex-row flex justify-between items-center text-black fixed top-0 left-0  z-50  transition-all duration-300 bg-white border border-b-1 border-gray-300 `}>
      <Link to="/" className='flex-row flex items-center w-1/12 scale-125' >
        <img src="https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(dark).svg"   className="h-10 mr-2" alt="" />
      </Link>
      <div className='flex justify-center align-middle items-center'>
        <div className={`w-[1px] h-[2rem]  opacity-30 ml-4 bg-black `}></div>
      </div>
      <div className='flex-row flex items-center justify-between pr-1 w-1/12'>
        <a><p className={`font-semibold text-black `}>Drops</p></a>
        <a><p className={`font-semibold text-black `}>Stats</p></a>
      </div>
      <div className="search-container w-9/12 flex flex-row gap-3">
        <div className='w-11/12'>
          <OrInput />
        </div>
        <div className='w-4/12 flex-row flex justify-between gap-3'>
          <div className={`w-10/12  rounded-[0.8rem] glass-effect flex-row flex px-2 border border-slate-300`}>
            <button className={`w-5/6 flex items-center border-r border-slate-300`}>
              <div className='flex gap-3 flex-row items-center mx-2'>
                <WalletRoundedIcon className={` scale-110 text-black `} />
                <p className={`text-base font-base tracking-normal text-black`}>Connect wallet</p>
              </div>
            </button>
            <button className='w-1/6 ml-2'>
              <AccountCircleOutlinedIcon className={` scale-125 text-black`} />
            </button>
          </div>
          <button className={`w-2/12 bg-slate-100 rounded-[0.8rem] glass-effect border border-slate-300`}>
            <div className='flex justify-center items-center '>
              <ShoppingCartOutlinedIcon className={`scale-110 text-black`} />
            </div>
          </button>
        </div>
      </div>
    </div>

  )
}

export default OrNavbar