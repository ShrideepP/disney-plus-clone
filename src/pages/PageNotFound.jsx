import React from 'react'
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <section className='w-full min-h-[70vh] font-montserrat p-2 md:p-4 lg:p-6 grid place-items-center'>
            <div className='flex flex-col gap-2 justify-center text-center text-white'>
                <h2 className='text-5xl font-bold'>404</h2>
                <hr className='block mx-auto rounded bg-blue-500 w-32 h-[2px] border-0' />
                <p className='text-sm font-medium'>
                    The page you are looking for might have been removed <br className='hidden sm:block' />
                    had it's name changed or is temporarily unavailable.
                </p>
                <Link to='/home' style={{background: 'linear-gradient(to right, #1e40af, #3b82f6)'}} className="w-48 mt-2 px-6 py-3 text-white text-sm font-bold rounded-full mx-auto">Go To Home</Link>
            </div>
        </section>
    );
};

export default PageNotFound;