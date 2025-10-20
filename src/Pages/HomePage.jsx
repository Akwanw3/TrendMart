import useFetchProducts from "../Hooks/UseFetchProducts";
import Productcard from "../components/ProductCard";
import { ShoppingBag } from "lucide-react";

export default function Homepage(){
const {products, loading, error} = useFetchProducts();

if(loading){
    return(
        <div className="text-center py-20">
            <p className="text-lg font-medium text-indigo-600">Loading TrendMart Products.... <ShoppingBag size={24}/></p>
            {/* */}
        </div>
    );
}
if(error){
    return(
        <div className="text-center py-20 text-red-600">
            <h1 className="text-xl font-bold">Error Fetching Data</h1>
            <p>Could not load product. Please check your network connection and try again</p>
            <p className="text-sm italic mt-2">{error}</p>
        </div>
    );
}
return(
    <div className="py-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-2">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((prod)=>(
                <Productcard key={prod.id} product={prod}/>
            ))}
        </div>
    </div>
);
}
