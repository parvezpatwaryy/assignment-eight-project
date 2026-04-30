import Link from 'next/link'; // অবশ্যই এটি ইমপোর্ট করতে হবে

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
          <Link href="/" className="text-xl text-green-600 pl-10 font-bold cursor-pointer">Tiles Gallery</Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="text-gray-600 menu menu-horizontal px-1 font-semibold">
            <li><Link href="/">Home</Link></li>
            {/* button এর বদলে Link ব্যবহার করা হয়েছে */}
            <li><Link href="/all-tiles">All Tiles</Link></li>
            <li><Link href="/profile">My Profile</Link></li>
          </ul>
        </div>

        <div className="navbar-end pr-10 font-bold gap-5">
           <button className='btn text-red-500'>Logout</button>  
           <button className='btn text-red-500'>Login</button>  
        </div>
      </div>

      {/* মোবাইল মেনু */}
      <div className="collapse-content lg:hidden z-1">
        <ul className="menu">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/all-tiles">All Tiles</Link></li>
          <li><Link href="/profile">My Profile</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;