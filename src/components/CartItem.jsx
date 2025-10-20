import { Link } from 'react-router-dom';
import { useCart } from '../Contexts/CartContext';
import { Trash2 } from 'lucide-react';

function CartItem({ item }) {
  const { removeItem, updateQuantity } = useCart();
  const productLink = `/product/${item.id}`;

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    updateQuantity(item.id, newQuantity);
  };
  
  const handleQuantityAdjustment = (delta) => {
    const newQuantity = item.quantity + delta;
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="flex items-center justify-between border-b py-4">
      
      {/* Product Info */}
      <div className="flex items-center space-x-4 w-1/2">
        <Link to={productLink} className="w-16 h-16 flex-shrink-0">
          <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
        </Link>
        <div>
          <Link to={productLink} className="font-semibold hover:text-indigo-600 line-clamp-2">
            {item.title}
          </Link>
          <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-2 w-1/4 justify-center">
        <button 
          onClick={() => handleQuantityAdjustment(-1)} 
          disabled={item.quantity <= 1}
          className="p-1 border rounded-full text-gray-600 hover:bg-gray-100 disabled:opacity-50"
        >
          -
        </button>
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-12 text-center border rounded-md"
        />
        <button 
          onClick={() => handleQuantityAdjustment(1)} 
          className="p-1 border rounded-full text-gray-600 hover:bg-gray-100"
        >
          +
        </button>
      </div>

      {/* Subtotal and Remove */}
      <div className="flex items-center space-x-4 w-1/4 justify-end">
        <p className="font-bold text-lg w-20 text-right">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button 
          onClick={() => removeItem(item.id)}
          className="text-red-500 hover:text-red-700 transition-colors"
          aria-label={`Remove ${item.title} from cart`}
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;