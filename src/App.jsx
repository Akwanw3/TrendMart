import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./Pages/HomePage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import CartPage from "./Pages/CartPage";
import { CartProvider } from "./Contexts/CartContext";

function App(){
  return(
    <>
    <Router>
      <CartProvider>
      <Navbar/>
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/product/:id" element={<ProductDetailPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>
      </main>
      </CartProvider>
    </Router>
    </>
  )
}
export default App;