import React from "react";

function Cart({ cart, removeFromCart, changeQuantity, total, checkout }) {
  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Add some products to start shopping.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-product">
              <span className="cart-icon">{item.icon}</span>
              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price.toLocaleString("en-IN")}</p>
              </div>
            </div>

            <div className="quantity">
              <button onClick={() => changeQuantity(item.id, -1)}>−</button>
              <span>{item.quantity}</span>
              <button onClick={() => changeQuantity(item.id, 1)}>+</button>
            </div>

            <strong>₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong>

            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Order Summary</h2>
        <div className="summary-line">
          <span>Items</span>
          <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
        </div>
        <div className="summary-total">
          <span>Total</span>
          <span>₹{total.toLocaleString("en-IN")}</span>
        </div>
        <button className="checkout-btn" onClick={checkout}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;