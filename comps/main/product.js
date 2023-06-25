const Product = ({ product }) => {
  return (
    <section>
      <h4>{product.name}</h4>
      <p>
        <strong>Price: </strong>
        {product.price}
      </p>
    </section>
  );
};

export default Product;
