
import React from 'react';
import './Category.css';

const Category = ({ title, products }) => {
  return (
    <div className="category">
      <h2 className="category-title">{title}</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <p className="product-name">{product.name}</p>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;