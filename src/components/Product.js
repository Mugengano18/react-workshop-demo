import React, { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id}>
          <div className="image">
            <img src={product.image} alt="img" />
          </div>
          <div className="title">
            <h3>{product.title}</h3>
          </div>
          <div className="description">
            <p>{product.description}</p>
          </div>
          <div className="descbutton">
            <a href="#">Delete</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
