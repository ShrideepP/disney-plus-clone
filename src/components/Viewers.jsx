import React from 'react';

function Viewers() {
  return (
    <section className='w-full p-2 md:p-4 lg:p-6 hidden lg:grid grid-cols-5 gap-4'>
        <div className='custom-shadow h-40 p-2 rounded-lg border-2 border-transparent hover:border-gray-400 bg-gray-900'>
            <img src="/images/viewers-disney.png" alt="viewers-disney" className='w-full h-full object-cover' /> 
        </div>
        <div className='custom-shadow h-40 p-2 rounded-lg border-2 border-transparent hover:border-gray-400 bg-gray-900'>
            <img src="/images/viewers-marvel.png" alt="viewers-marvel" className='w-full h-full object-cover' />
        </div> 
        <div className='custom-shadow h-40 p-2 rounded-lg border-2 border-transparent hover:border-gray-400 bg-gray-900'>
            <img src="/images/viewers-national.png" alt="viewers-national" className='w-full h-full object-cover' />
        </div>
        <div className='custom-shadow h-40 p-2 rounded-lg border-2 border-transparent hover:border-gray-400 bg-gray-900'>
            <img src="/images/viewers-pixar.png" alt="viewers-pixar" className='w-full h-full object-cover' />
        </div>
        <div className='custom-shadow h-40 p-2 rounded-lg border-2 border-transparent hover:border-gray-400 bg-gray-900'>
            <img src="/images/viewers-starwars.png" alt="viewers-starwars" className='w-full h-full object-cover' />
        </div>
    </section>
  );
};

export default Viewers;