import React from 'react';
import { UserContext } from '../components/context/UserContext';
import { Navigate } from 'react-router-dom';

function Login() {

  const { displayName, photoURL } = UserContext();

  if(displayName && photoURL) {
    return <Navigate to="/home" />
  };

  return (
    <section style={{backgroundImage: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("/images/login-background.jpg")'}} className='w-full h-[90vh] p-2 md:p-4 lg:p-6 font-montserrat grid place-items-center bg-cover bg-center'>
      <div className="flex flex-col gap-4 justify-center text-white text-center">
        <img className='w-96' src="/images/cta-logo-one.svg" alt="cta-one" />
        <button onClick={() => displayName ? navigate("/home") : ""} className='py-4 rounded-md font-bold text-sm bg-blue-700 hover:bg-blue-600 uppercase'>
          Get All Here
        </button>
        <p className='text-sm font-medium'>Subscribe to watch all content on Disney+ Hotstar</p>
        <img className='w-96' src="/images/cta-logo-two.png" alt="cta-two" />
      </div>
    </section>
  );
  
};

export default Login;