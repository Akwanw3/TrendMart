import { useState, useEffect } from "react";

const useFetchProducts = ()=>{
    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(true);
    const [ error, seterror] = useState(null);
    useEffect(()=>{
        const fetchProducts = async()=>{
            try{
                const response = await fetch('https://fakestoreapi.com/products');
                if(!response.ok){
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setproducts(data);
            }catch(err){
                seterror(err.message);
            }finally{
                setloading(false)
            }
        }
        fetchProducts()
    },[]);
    return{ products, loading, error}
};
export default useFetchProducts;