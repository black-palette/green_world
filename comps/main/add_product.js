import axios from "axios";

import { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = { name, price };

    try {
      const response = await axios.post(
        "http://localhost:4000/products",
        product,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setName("");
      setPrice("");
      console.log("product added", response.data);
    } catch (error) {
      setError(error.response.data.error);
      console.log(error);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          id="name"
          type="text"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="price"></label>
        <input
          id="price"
          type="text"
          required
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <button type="submit">Add product</button>
        {error && <div>{error}</div>}
      </form>
    </section>
  );
};

export default AddProduct;
