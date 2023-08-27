import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const OrInput = () => {
  // const variant = tru ? "outlined" : "standard"

  return (
    <div className="relative">
      <TextField
        className="border-none search-input glass-effect rounded-[0.8rem] focus:outline-none w-full"
        placeholder="Search items, collections, and accounts"
        variant='outlined' 
        InputProps={{
          style: {
            fontFamily: 'inter',
            color:  'black'  ,
            height: '48px',
            padding: 10,
            borderRadius: '12px',
            paddingLeft: 40,
            borderColor: 'black'
          },

          startAdornment: (
            <span className={`absolute inset-y-0 left-2 flex  items-center pointer-events-none text-black`}>
              <SearchIcon />
            </span>
          ),
          endAdornment: (
            <div className={`absolute inset-y-0 right-2 flex items-center pointer-events-none px-2.5 my-2.5 mr-1  bg-opacity-20 rounded-lg bg-gray-500`}>
              <p> / </p>
            </div>
          ),
        }}
        InputLabelProps={{
          style: {
            letterSpacing: 1.6,
            lineHeight: 1.2,
            fontFamily: 'inter',
            color: 'black' , // Set the label color to white
          },
        }}
      />
    </div>
  );
};

export default OrInput;
