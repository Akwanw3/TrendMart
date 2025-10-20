import { Link } from "react-router-dom";
import { useCart } from "../Contexts/CartContext";


function Productcard({product}){
    const {addItem}= useCart()
    const productLink = `/product/${product.id}`;
    return(
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
            <Link to={productLink} className="h-48 overflow-hidden flex items-center justify-center p-4">
            <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain"
            />
            </Link>
            <div className="p-4 flex flex-col flex-grow">
            <Link to={productLink} className="text-lg font-semibold text-gray-800 hover:text-indigo-600 line-clamp-2 flex-grow">
            {product.title}
            </Link>
            <div className="mt-4 flex justify-between items-center pt-2 border-t border-gray-100">
                <p className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
                <button
                onClick={()=>addItem(product)}
                className="bg-indigo-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-indigo-800 transition-colors duration-200"
                >
                    Add To Cart
                </button>
                </div>
            </div>
        </div>
    );
}
export default Productcard;