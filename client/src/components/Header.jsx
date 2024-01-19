import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector(state => state.user);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex flex-row justify-between items-center max-w-7xl mx-auto p-2">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap cursor-pointer">
            <span className="text-slate-500">House</span>
            <span className="text-slate-700">Loan</span>
          </h1>
        </Link>
        <form className='bg-slate-100 p-2 rounded-lg flex flex-row items-center justify-center border hover:border-slate-300'>
            <input className='bg-transparent focus:outline-none w-24 sm:w-64' type="text" placeholder="Search..." />
            <FaSearch className='text-slate-600 mr-2' />
        </form>
        
        <ul className='flex flex-row items-center gap-4 '>
          <Link to="/"><li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>Home</li></Link>
          <Link to="/about"><li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>About</li></Link>
          <Link to="/profile">
            {currentUser ? (
              <img src={currentUser.avatar} alt="profile" className="rounded-full w-8 h-8 object-cover" />
            ): (<li className='text-slate-700 hover:underline cursor-pointer'>Sign in</li>)}
          </Link>    
        </ul>
      </div>
    </header>
  )
}
