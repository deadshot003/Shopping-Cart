import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart } = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart])
    return (
        <div>
            {
                cart.length > 0 ?
                    (<div className='flex'>
                        <div>
                            {
                                cart.map((item, index) => {
                                    return <CartItem key={item.id} item={item} itemIndex={index} />
                                })
                            }
                        </div>
                        <div className='m-10'>
                            <div className='m-5'>
                                <div className='font-bold text-green-800 uppercase text-lg'>Your Cart</div>
                                <div className='font-bold uppercase text-green-700 text-5xl'>Summary</div>
                                <div className='mt-5'>
                                    <span className='font-semibold text-xl text-gray-700'>Total Items:{cart.length}</span>
                                </div>
                            </div>
                            <div className='ml-5'>
                                <div className='font-bold text-xl text-gray-700'>
                                    Total Amount : <span className=' text-green-700'>${totalAmount.toFixed(2)}</span></div>
                                <button className='mt-5 px-20 py-3 bg-green-700 text-white font-bold text-lg rounded-lg border
                                hover:border-green-600 hover:text-green-600 hover:bg-white transition duration-500 ease-in-out '>CheckOut Now</button>
                            </div>
                        </div>
                    </div>) :
                    (<div className='flex flex-col items-center mt-40'>
                        <h1 className='font-bold text-xl text-gray-700'
                        >Your cart is empty!</h1>
                        <Link to={"/"}>
                            <button className='mt-5 px-10 py-3 bg-green-700 text-white font-bold text-lg rounded-lg border
                                hover:border-green-600 hover:text-green-600 hover:bg-white transition duration-500 ease-in-out '>Shop Now</button>
                        </Link>
                    </div>)
            }
        </div>
    )
}

export default Cart