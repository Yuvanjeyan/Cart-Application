import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";
// import ProductCard from "./components/ProductCard";

import './App.css';

function App() {

  //store the products data
  const [products, setProducts] = useState([]);

  //store the cart items
  const [cart, setCart] = useState([]);

  //store the modal visibility state
  const [isCartOpen, setIsCartOpen] = useState(false);

  //fetch products data from the API

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  },[])

  //function to add products to the cart

  const addToCart = (products) => {
    const exist = cart.find(item => item.id === products.id);

    if (exist) {
      alert("Item already added to the cart");
    }
    else {
      setCart([
        ...cart,
        products
      ])
    }
  }

  //function to remove products from the cart

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  }

  return (
    <div>
      <Navbar cartCount={cart.length} openCart={() => setIsCartOpen(true)} />
      <ProductList products={products} addToCart={addToCart} />
      {isCartOpen && (
        <CartModal
          cart={cart}
          closeModal={() => setIsCartOpen(false)}
          removeFromCart={removeFromCart}
        />
      )}

    </div>
  )

}
export default App;