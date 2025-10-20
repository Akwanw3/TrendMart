import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../Contexts/CartContext';

function ProductDetailPage() {
  const { id } = useParams(); // Get the dynamic 'id' from the URL
  const { addItem } = useCart();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]); // Rerun fetch if ID changes

  if (loading) {
    return <div className="text-center py-20 text-xl font-medium">Loading Product Details...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-600 text-xl">Error: {error}</div>;
  }

  if (!product) {
    return <div className="text-center py-20 text-xl">Product not found.</div>;
  }
  
  // Render the product details
  return (
    <div className="bg-white p-6 shadow-xl rounded-lg mt-8">
      <div className="md:flex gap-8">
        
        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center items-center p-8 bg-gray-50 rounded-lg">
          <img 
            src={product.image} 
            alt={product.title} 
            className="max-h-96 w-auto object-contain"
          />
        </div>
        
        {/* Details Section */}
        <div className="md:w-2/3 mt-6 md:mt-0">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{product.title}</h1>
          
          <p className="text-2xl font-semibold text-indigo-600 mb-4">${product.price.toFixed(2)}</p>

          <p className="text-sm text-gray-500 mb-6">
            Category: <span className="capitalize font-medium">{product.category}</span>
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">{product.description}</p>
          
          <button
            onClick={() => addItem(product)}
            className="w-full sm:w-auto bg-indigo-600 text-white text-lg font-bold py-3 px-8 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;