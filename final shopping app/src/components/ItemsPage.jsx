function ItemsPage({ products, addToCart }) {
  return (
    <main className="products">
      {products.map(product => (
        <div className="card" key={product.id}>
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>
          <p>Title: {product.title}</p>
          <p>Price: ₹{product.price}.00/-</p>
          <button className="cart-button" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </main>
  )
}

export default ItemsPage