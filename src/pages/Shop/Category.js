// Category.js

import React from 'react';
import Input from '../../components/Input';
import './Category.css';

function Category({ handleChange, handleFilter }) {
  const handleCategoryChange = (event) => {
    handleChange(event);
    handleFilter(event.target.value);
  };

  return (
    <div className="category-container">
     {/* <h2 className="sidebar-title">COLOR</h2> */}

      <div className='color-options'>
        <label className="sidebar-label-container">
          <input onChange={handleCategoryChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleCategoryChange}
          value="gold"
          title="Gold"
          name="test"
        />
        <Input
          handleChange={handleCategoryChange}
          value="silver"
          title="Silver"
          name="test"
        />
        <Input
          handleChange={handleCategoryChange}
          value="rose"
          title="Rose"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
