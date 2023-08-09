import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import InputWithIcon from './iconInput';
import WalletRoundedIcon from '@mui/icons-material/WalletRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY >= 100);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="nav-navbar" className={`bg-black w-screen p-3 px-12 flex-row flex justify-between items-center text-white ${isSticky ? ' text-black fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white' : ''}`}>
      <div className='flex-row flex items-center w-1/12 scale-125' >
        <img src={`${isSticky ?  "https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(dark).svg" : "https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(light).svg"}`}  className="h-10 mr-2" alt="" />
      </div>
      <div className='flex justify-center align-middle items-center'>
        <div className={`w-[1px] h-[2rem]  opacity-30 ml-4 ${isSticky ? 'bg-black ' : 'bg-white' }`}></div>
      </div>
      <div className='flex-row flex items-center justify-between pr-1 w-1/12'>
        <a><p className={`font-semibold  ${isSticky ? ' text-black ' : ''}`}>Drops</p></a>
        <a><p className={`font-semibold  ${isSticky ? ' text-black ' : ''}`}>Stats</p></a>
      </div>
      <div className="search-container w-9/12 flex flex-row gap-3">
        <div className='w-11/12'>
          <InputWithIcon tru={isSticky}/>
        </div>
        <div className='w-4/12 flex-row flex justify-between gap-3'>
          <div className={`w-10/12  rounded-[0.8rem] glass-effect flex-row flex px-2 ${isSticky ? 'border border-slate-300' : ''}`}>
            <button className={`w-5/6 flex items-center border-r border-gray-200 ${isSticky ? 'border-slate-300' : ''}`}>
              <div className='flex gap-3 flex-row items-center mx-2'>
                <WalletRoundedIcon className={` scale-110 ${isSticky ? 'text-black' : 'text-white'}`} />
                <p className={`text-base font-base tracking-normal ${isSticky ? 'text-black' : 'text-white'}`}>Connect wallet</p>
              </div>
            </button>
            <button className='w-1/6 ml-2'>
              <AccountCircleOutlinedIcon className={` scale-125 ${isSticky ? 'text-black' : 'text-white'} `} />
            </button>
          </div>
          <button className={`w-2/12 bg-slate-100 rounded-[0.8rem] glass-effect ${isSticky ? 'border border-slate-300' : ''} `}>
            <div className='flex justify-center items-center '>
              <ShoppingCartOutlinedIcon className={`scale-110 ${isSticky ? 'text-black' : 'text-white'} `} />
            </div>
          </button>
        </div>
      </div>
    </div>

  )
}

export default Navbar