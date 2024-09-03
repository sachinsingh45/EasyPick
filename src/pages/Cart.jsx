import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
    {
      cart.length > 0  ? 
      (<div className="p-6 bg-gray-50 rounded-lg shadow-md">
        {/* Cart Items */}
        <div className="mb-6">
          {cart.map((item, index) => (
            <CartItem key={item.id} item={item} itemIndex={index} />
          ))}
        </div>
      
        {/* Cart Summary */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="border-b pb-4 mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Your Cart</h2>
            <p className="text-gray-600">Summary</p>
            <p className="mt-2 text-gray-800">
              <span className="font-medium">Total Items:</span> {cart.length}
            </p>
          </div>
      
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold text-green-900 mb-4">
              Total Amount: ${totalAmount}
            </p>
            <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300">
              CheckOut Now
            </button>
          </div>
        </div>
      </div>
      ) : 
      (<div className="flex flex-col items-center justify-center p-8">
          <div className="flex flex-col items-center justify-center p-8 bg-gray-200 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Nothing is Here!!</h1>
          <img 
            src="/empty-cart.webp" 
            alt="Cart is empty" 
            className="w-1/3 h-auto mb-6 transform hover:scale-105 transition-transform duration-300 select-none"
          />
          <Link to="/" className="mt-4">
            <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 shadow-md">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      )
    }
    </div>
  );
};

export default Cart;
