import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signOut, onAuthStateChanged } from 'firebase/auth';

export const HomePage = () => {


  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col justify-between">
      
  
<div className='flex flex-col justify-center items-center h-screen'>
   
   <h1 className='text-[100px] text-black font-bold '>HOME PAGE</h1>
   <p className='text-black text-xl font-medium'>THE DEVELOPER IS ASHRAFUL TAMIM</p>
</div>
     
    

    </div>
  );
};

export default HomePage;
