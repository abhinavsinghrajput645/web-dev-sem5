function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <p>Title: {product.title}</p>
      <p>Price: ₹{product.price}.00/-</p>

      <button className="cart-button" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard