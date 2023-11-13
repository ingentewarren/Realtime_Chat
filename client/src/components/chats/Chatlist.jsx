import React, { useState } from 'react';

const Chatlist = () => {

  return (
    <div className='w-full h-[500px] pt-10'>
      <div className='w-full bg-dark-color h-16 py-2 flex px-2 justify-between'>
        <div className='w-10 h-10 rounded-full bg-button-color'>
          <img src="" alt="" />
        </div>
        <div className='w-40 flex flex-col justify-between py-1'>
          <h2 className='font-poppins text-sm text-white font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis'>
            Warren Ingente
          </h2>
          <p className='font-poppins text-[14px] overflow-hidden whitespace-nowrap overflow-ellipsis'>
            Hello why namawda
          </p>
        </div>
        <span className='w-8 text-[14px] text-white font-poppins overflow-hidden whitespace-nowrap overflow-ellipsis'>
          2m
        </span>
      </div>
    </div>
  );
};

export default Chatlist;
