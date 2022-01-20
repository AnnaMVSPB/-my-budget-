/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useSelector } from 'react-redux';

function Logo() {
  const user= useSelector((state) => state.user);
  return (
    <>
    {!user &&   <div className='logo'>
     <img id='logo'src='/logo.png'/>
    </div>}
    </>
  );
}

export default Logo;
