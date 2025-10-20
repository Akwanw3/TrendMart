import { useCart } from '../Contexts/CartContext';
import CartItem from '../components/CartItem';
import { ShoppingCart } from 'lucide-react';

function CartPage() {
  const { cartItems, getCartTotal } = useCart();
  const total = getCartTotal();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20 flex flex-col items-center">
        <ShoppingCart size={48} className="text-gray-400 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Your Cart is Empty</h1>
        <p className="text-gray-600">Start browsing our products to find something you like!</p>
      </div>
    );
  }

  return (
    <div className="py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Cart Items List (2/3 width on large screens) */}
      <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-3">Your Shopping Cart</h1>
        
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Cart Summary (1/3 width on large screens) */}
      <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-lg h-fit sticky top-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Order Summary</h2>
        
        <div className="space-y-4">
          <div className="flex justify-between text-lg">
            <span>Subtotal:</span>
            <span>${total}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Shipping:</span>
            <span className="text-green-600 font-semibold">FREE</span>
          </div>
          <div className="flex justify-between text-2xl font-bold border-t pt-4 mt-4">
            <span>Order Total:</span>
            <span className="text-indigo-600">${total}</span>
          </div>
        </div>

        <button 
          className="mt-6 w-full bg-indigo-600 text-white text-lg font-bold py-3 rounded-xl hover:bg-indigo-700 transition-colors"
          onClick={() => alert(`Proceeding to checkout for $${total}. (No real payment gateway implemented.)`)}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;