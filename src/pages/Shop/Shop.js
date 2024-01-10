import React, { useState } from 'react';
import { Confetti } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import Product from './Product';
import Category from './Category';
import './Shop.css';
import Footer from '../../footer/Footer';

function Shop({ handleChange }) {
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  const handleFilter = (selectedCategory) => {
    if (selectedCategory) {
      const newFilteredProducts = PRODUCTS.filter(
       (product) => product.name === selectedCategory 
      
       
      );
      setFilteredProducts(newFilteredProducts);
    } else {
      setFilteredProducts(PRODUCTS);
    }
  };

  return (
    <div>
      <div className='shopTitle'>JENNY MADE IT! <Confetti size={34} /></div>
      <Category handleChange={handleChange} handleFilter={handleFilter} />
      <div className='products'>
        {filteredProducts.map((product) => (
          <div key={product.id}>
          
          <Product key={product.id} data={product} />
          <Link to={`/cart/detail/${product.id}`}>
    <button className='view'>View Details</button>
    </Link> 
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
