import React, { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { products } from "./data";

function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const categories = ["All", "Electronics", "Fashion", "Accessories"];

  const filteredProducts = useMemo(() => {
    if (category === "All") return products;
    return products.filter((product) => product.category === category);
  }, [category]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === product.id);

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  };

  const changeQuantity = (id, amount) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const checkout = () => {
    alert("Order placed successfully!");
    setCart([]);
    setPage("home");
  };

  return (
    <div className="app">
      <header className="header">
        <div>
          <div className="logo">CartNest</div>
          <p>Your little online store</p>
        </div>
        <div className="header-cart">🛍️ {cartCount}</div>
      </header>

      <Navbar page={page} setPage={setPage} cartCount={cartCount} />

      <main>
        {page === "home" && (
          <section className="hero">
            <div>
              <span className="welcome-label">WELCOME TO CARTNEST</span>
              <h1>Everything you need,<br />in one simple cart.</h1>
              <p>Explore our products and build your cart in just a few clicks.</p>
              <button className="shop-btn" onClick={() => setPage("products")}>
                Explore Products →
              </button>
            </div>
            <div className="hero-art">🛒</div>
          </section>
        )}

        {page === "products" && (
          <section>
            <div className="page-heading">
              <div>
                <span className="welcome-label">OUR STORE</span>
                <h1>Popular Products</h1>
              </div>
              <div className="filters">
                {categories.map((item) => (
                  <button
                    key={item}
                    className={category === item ? "filter-active" : ""}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <ProductList products={filteredProducts} addToCart={addToCart} />
          </section>
        )}

        {page === "cart" && (
          <section>
            <div className="page-heading">
              <div>
                <span className="welcome-label">SHOPPING CART</span>
                <h1>Your Cart</h1>
              </div>
            </div>
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              changeQuantity={changeQuantity}
              total={total}
              checkout={checkout}
            />
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;