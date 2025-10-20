import { Link } from "react-router-dom"
import { ShoppingCart } from "lucide-react"
import { useCart } from "../Contexts/CartContext";



function Navbar(){
const { getTotalItems}=useCart()
const itemCount = getTotalItems();
return(
    <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
            <Link to='/' className="text-2xl font-bold text-grey-800 hover:text-indigo-600 transition-colors">
            TRENDMART
            </Link>
            <nav className="flex space-x-6 items-center">
                <Link to= '/' className="text-gray-600 hover:text-white hover:bg-indigo-600 p-0.5 ">
                Home
                </Link>
                
                <Link to= '/cart' className="text-gray-600 hover:text-inigo-600 " >
                <ShoppingCart size={32}/>
                {itemCount>0 && (<span className="relative -top-10 -right-5 bg-red-500 rounded-full w-5 h-5 text-xs text-white flex items-center justify-center font-medium">
                    {itemCount}
                </span>)}
                </Link>
            </nav>
        </div>
    </header>
)
}
export default Navbar