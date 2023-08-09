import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const InputWithIcon = ({ tru }) => {
  const variant = tru ? "outlined" : "standard"

  return (
    <div className="relative">
      <TextField
        className="border-none search-input glass-effect rounded-[0.8rem] focus:outline-none w-full"
        placeholder="Search items, collections, and accounts"
        variant={variant} 
        InputProps={{
          style: {
            fontFamily: 'inter',
            color:  tru ? 'black' : 'white' ,
            height: '48px',
            padding: 10,
            borderRadius: '12px',
            paddingLeft: 40,
            borderColor: `${tru? 'black' : 'transparent'}`
          },

          startAdornment: (
            <span className={`absolute inset-y-0 left-2 flex  items-center pointer-events-none ${tru ? 'text-black' : 'text-white'}`}>
              <SearchIcon />
            </span>
          ),
          endAdornment: (
            <div className={`absolute inset-y-0 right-2 flex items-center pointer-events-none px-2.5 my-2.5 mr-1  bg-opacity-20 rounded-lg ${tru ? 'bg-gray-500' : 'bg-gray-200'}`}>
              <p> / </p>
            </div>
          ),
        }}
        InputLabelProps={{
          style: {
            letterSpacing: 1.6,
            lineHeight: 1.2,
            fontFamily: 'inter',
            color: tru ? 'black' : 'white', // Set the label color to white
          },
        }}
      />
    </div>
  );
};

export default InputWithIcon;
