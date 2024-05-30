import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';



function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  

  useEffect(() => {
    // Fetch products from the backend when the component mounts
    fetchProducts();
}, []); // Empty dependency array ensures this effect runs only once on component mount


const fetchProducts = async () => {
    try {
        const response = await fetch('http://localhost:5000/products/allProducts');
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        console.log("Fetched Product:", data);
        setProducts(data); 
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};


const adjustQuantity = (productId, change) => {
     setCart(cart.map(item =>
        item._id === productId ? { ...item, quantity: item.quantity + change } : item
    ).filter(item => item.quantity > 0));

    setProducts(products.map(p => 
        p._id === productId ? { ...p, quantity: p.quantity - change } : p
    ));
};



const addToCart = (product) => {
  const cartItem = cart.find(item => item._id === product._id);
        if (cartItem) {
            adjustQuantity(product._id, 1);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
            setProducts(products.map(p => p._id === product._id ? { ...p, quantity: p.quantity - 1 } : p));
        }
};



  
    const removeFromCart = (productToRemove) => {
      const updatedCart = cart.filter((product) => product !== productToRemove);
      setCart(updatedCart);
  };


  return (
        <Router>
          <div>
            <Navbar />
            <div className="container mt-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/addproduct" element={<AddProduct />} />
                        <Route path="/allproducts" element={<ProductList addToCart={addToCart} cart={cart} adjustQuantity={adjustQuantity}/>} />
                        <Route path="/shoppingcart" element={<ShoppingCart cart={cart} products={products} removeFromCart={removeFromCart} adjustQuantity={adjustQuantity} />} />
                    </Routes>
            </div>
          </div>
        </Router>
      );
}

export default App;
