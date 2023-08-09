import React from 'react';

const ButtonCate = ({ children, onClick }) => {
  let buttonClasses = 'rounded-xl p-[0.55rem] px-[1.1rem] font-semibold focus:outline-none glassing';

  return (
    <button className={buttonClasses} onClick={onClick}>
      <p className='text-white tracking-wide'>
        {children}
      </p>
    </button>
  );
};

export default ButtonCate;
