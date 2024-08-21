import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../apiService";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
    };
    getProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.company}</p>
      <p>{product.category}</p>
      <p>{product.price}</p>
      <p>{product.rating}</p>
      <p>{product.discount}</p>
      <p>{product.availability ? "Available" : "Out of Stock"}</p>
    </div>
  );
};

export default ProductDetail;
