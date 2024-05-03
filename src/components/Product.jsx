import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-hot-toast";
import { add, remove } from '../redux/slices/CartSlice';

const Product = ({ post }) => {

    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to Cart");
    }
    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item removed from Cart");
    }
    return (
        <div className=' group flex flex-col justify-center items-center 
          hover:scale-110 hover:shadow-2xl transition duration-300 ease-in gap-3 p-4 mt-10 ml-4 rounded-xl shadow-xl' >
            <div>
                <h1 className='w-40 overflow-hidden text-ellipsis whitespace-nowrap
                  text-gray-700 font-semibold text-lg text-left mt-1'>{post.title}</h1>
            </div>
            <div>
                <p className='w-40 text-gray-500 font-normal text-[10px] text-left'>
                    {post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
            </div>
            <div className='h-[180px]'>
                <img src={post.image} alt="item"
                    className='h-full w-full' />
            </div>
            <div className='flex justify-between gap-11 items-center w-full mt-5'>
                <div>
                    <p className='text-green-600 font-semibold'>${post.price}</p>
                </div>
                {
                    cart.some((p) => p.id == post.id) ?
                        (<button
                            className='text-gray-700 border border-gray-700 rounded-full
                                font-semibold text-[10px] p-1 px-3 uppercase
                                group-hover:bg-gray-700
                                group-hover:text-white'
                            onClick={removeFromCart}>
                            Remove Item
                        </button>) :
                        (<button
                            className='text-gray-700 border border-gray-700 rounded-full
                            font-bold text-[10px] p-1 px-3 uppercase
                            group-hover:bg-gray-700
                            group-hover:text-white'
                            onClick={addToCart}>
                            Add to cart
                        </button>)
                }
            </div>
        </div>
    );
};

export default Product