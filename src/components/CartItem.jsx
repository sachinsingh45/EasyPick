
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div>
      <div className="grid grid-cols-8 gap-4 p-4 items-center border">
        <div className="col-span-3 h-40">
          <img src={item.image} alt="Product Image" className="object-contain w-full h-full" />
        </div>
        <div className="col-span-5">
          <h1 className="text-lg font-bold">{item.title}</h1>
          <h1 className="text-sm text-gray-600">{item.description}</h1>
          <div className="flex items-center justify-between mt-2 p-5">
            <p className="text-xl font-semibold text-green-500">{'$'+ item.price}</p>
            <div onClick={removeFromCart} className="cursor-pointer text-red-600">
              <FcDeleteDatabase className="text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
