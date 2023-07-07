import axios from "axios";

import { useEffect, useState } from "react";

import { ProductContextProvider } from "../back-end/context/productContext";
import Product from "../comps/main/product";
import AddProduct from "../comps/main/add_product";
import { useProductContext } from "../back-end/hooks/useProductContext";

import s from "../styles/main/products.module.scss";

const url = "http://localhost:4000/products";

const Products = () => {
  const { products, dispatch } = useProductContext();

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "SET_PRODUCTS", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section>
      <section className={s.products}>
        <p> PRODUCTS</p>
        {products &&
          products.map((product) => {
            return <Product key={product._id} product={product} />;
          })}
      </section>
      <section>
        <AddProduct />
      </section>
    </section>
  );
};

export default Products;
