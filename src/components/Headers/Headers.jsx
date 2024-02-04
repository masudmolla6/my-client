import React from 'react';
import { Link } from 'react-router-dom';

const Headers = () => {
    return (
      <div className="navbar bg-neutral text-neutral-content flex justify-evenly items-center sticky top-0 z-30">
        <Link className='text-white text-xl hover:text-orange-500' to="/">Home</Link>
        <Link className='text-white text-xl hover:text-orange-500' to="/courses">Courses</Link>
        <Link className='text-white text-xl hover:text-orange-500' to="/about">About</Link>
      </div>
    );
};

export default Headers;