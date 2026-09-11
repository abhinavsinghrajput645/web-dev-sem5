import React from "react";

function Navbar({ page, setPage, cartCount }) {
  return (
    <nav className="navbar">
      <button className={page === "home" ? "nav-active" : ""} onClick={() => setPage("home")}>
        Home
      </button>
      <button className={page === "products" ? "nav-active" : ""} onClick={() => setPage("products")}>
        Products
      </button>
      <button className={page === "cart" ? "nav-active" : ""} onClick={() => setPage("cart")}>
        🛒 Cart <span className="badge">{cartCount}</span>
      </button>
      <button onClick={() => alert("Orders page coming soon!")}>My Orders</button>
      <button onClick={() => alert("Profile page coming soon!")}>Profile</button>
    </nav>
  );
}

export default Navbar;