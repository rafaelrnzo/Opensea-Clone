import React from 'react';

export const BaseButton = ({ children, onClick }) => {
  return (
    <button className='rounded-lg p-2' onClick={onClick}>
      <p className='font-medium tracking-wider font-base'>
        {children}
      </p>
    </button>
  )
}

export const GlassButton = ({ children, onClick }) => {
  let buttonGlass = 'rounded-xl py-4 px-7 glass-effect'

  return (
    <button className={buttonGlass} onClick={onClick}>
      <p className="text-white font-semibold tracking-wider text-base ">
        {children}
      </p>
    </button>
  )
}

export const ButtonCate = ({ children, onClick }) => {
  let buttonCate = 'rounded-xl p-[0.55rem] px-[1.1rem] font-semibold focus:outline-none glassing';

  return (
    <button className={buttonCate} onClick={onClick}>
      <p className='text-white tracking-wide'>
        {children}
      </p>
    </button>
  );
};