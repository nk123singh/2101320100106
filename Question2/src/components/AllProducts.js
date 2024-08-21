import React, { useState, useEffect } from "react";
import { fetchProducts } from "../apiService";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    company: "",
    rating: 0,
    priceRange: [0, 1000],
    availability: true,
  });

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      {
        <div>
          <h3>Filter by Category</h3>
          <select onChange={(e) => onFilterChange(e.target.value)}>
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      }
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.company}</p>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.rating}</p>
            <p>{product.discount}</p>
            <p>{product.availability ? "Available" : "Out of Stock"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
