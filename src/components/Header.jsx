import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex flex-row justify-between items-center max-w-7xl mx-auto p-2">
        <Link to="/">
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap cursor-pointer">
                <span className="text-slate-500">House</span>
                <span className="text-slate-700">Loan</span>
            </h1>
          </Link>
          <form className='bg-slate-100 p-2 rounded-lg flex flex-row items-center justify-center'>
              <input className='bg-transparent focus:outline-none w-24 sm:w-64' type="text" placeholder="Search..." />
              <FaSearch className='text-slate-600 mr-2' />
          </form>
          
          <ul className='flex flex-row gap-4 '>
            <Link to="/"><li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>Home</li></Link>
            <Link to="/about"><li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>About</li></Link>
            <Link to="/sign-in"><li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>Sign in</li></Link>
          </ul>
      </div>
    </header>
  )
}
