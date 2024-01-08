import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import Navbar from './components/Navbar';
import CartDetail from './pages/CartDetail/CartDetail';
//import Footer from './footer/Footer';
import { PRODUCTS } from './products'; 
import ShopContextProvider from './context/ShopContextProvider';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
   // console.log('Selected Category:', event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, title }) =>
          category === selected || title === selected
      );
    }

    /*if (query) {
      filteredProducts = filteredProducts.filter(
        ({ title }) => title.toLowerCase().includes(query.toLowerCase())
      );
    } */

    return filteredProducts.map(({ id, productImage, productName, title, price }) => (
      <div key={id}>
        <img src={productImage} alt={productName} />
        <h2>{title}</h2>
       <p>{price}</p>
      </div>
    ));
  }

  const result = filteredData(PRODUCTS, selectedCategory, query);

  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
  <Route path='/' element={<Shop handleChange={handleChange} />} />
  <Route path='/cart' element={<Cart />} />
  <Route path='/cart/detail/:cartId' element={<CartDetail />} />
</Routes>

        {/*<Footer /> */}
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
