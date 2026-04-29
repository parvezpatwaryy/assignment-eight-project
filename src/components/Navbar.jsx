import React from 'react';

const Navbar = () => {
  return (
    <div className="max-lg:collapse bg-white shadow-sm w-full rounded-md">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
      <div className="collapse-title navbar">
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <p className="text-xl text-green-600 pl-10 font-bold">Tiles Gallery </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="text-gray-600 menu menu-horizontal px-1 font-semibold">
            <li><button>Home</button></li>
            <li><button>All Tiles</button></li>
            <li><button>My Profile</button></li>
          </ul>
        </div>
        <div className="navbar-end pr-10 font-bold  gap-5">
        <button className='btn text-red-500'>Logout</button>  
        <button className='btn text-red-500'>Login</button>  
        </div>
      </div>

      <div className="collapse-content lg:hidden z-1">
        <ul className="menu">
          <li><button>Home</button></li>
              <li><button>All Tiles</button></li>
          <li><button>My Profile</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;