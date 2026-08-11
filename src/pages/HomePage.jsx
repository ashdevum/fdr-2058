import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signOut, onAuthStateChanged } from 'firebase/auth';

export const HomePage = () => {


  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col justify-between">
      

  

<div className='flex justify-center items-center flex-col h-screen'>
  <h1 className='text-black text-[100px] font-bold'>HOME PAGE </h1>

  <p className='text-black text-xl'>THE DEVELOPER IS ASRAFUL ISLAM TAMIM</p>
</div>

  

    </div>
  );
};

export default HomePage;
