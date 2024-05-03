import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const {cart} = useSelector( (state) => state); 
    return (
        <div>
            <nav className='flex justify-between m-auto items-center h-[60px] max-w-5xl'>
                <NavLink to="/">
                    <div className='flex items-center'>
                        <img src="../logo.png" className='w-[60px]' alt="Logo" />
                        <span className='text-white font-bold text-xl '>SuperMarket</span>
                    </div>
                </NavLink>
                <div className='flex items-center font-medium text-slate-100 space-x-6'>
                    <NavLink to='/'>
                        <div >
                            <p className='font-semibold text-lg uppercase' >Home</p>
                        </div>
                    </NavLink>
                    <NavLink to='/cart'>
                        <div className='relative'>
                            <FaCartShopping  className='text-2xl'/>
                            {
                                cart.length > 0 &&
                                <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5
                                 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
                            }
                        </div>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar