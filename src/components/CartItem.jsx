
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from 'react-hot-toast';
import { remove } from '../redux/slices/CartSlice';

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("item Removed from Cart");
  }
  return (
    <div className="w-[750px] p-10 ml-[100px]
     rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in">
      <div className="flex" >
        <div className="w-[30%]">
          <img src={item.image} 
          className=" object-cover" alt="item" />
        </div>
        <div className="ml-20 w-[100%]">
          <h1 className="font-bold text-2xl text-gray-700">{item.title}</h1>
          <h1 className="my-5 text-md text-gray-600 font-semibold">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
          <div className="flex justify-between">
            <p className="text-green-600 font-bold text-lg">${item.price}</p>
            <div className="w-10 h-10 bg-red-200 hover:text-white hover:bg-red-400 rounded-full flex items-center justify-center"
            onClick={removeFromCart}>
              <MdDeleteForever />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem