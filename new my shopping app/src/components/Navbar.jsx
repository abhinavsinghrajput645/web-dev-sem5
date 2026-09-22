function Navbar({ cartCount, onPageChange }) {
  return (
    <>
      <div className="top">
        <h1>MyShop</h1>
      </div>
      <div className="nav">
        <button onClick={() => onPageChange('home')}>Home</button>
        <button onClick={() => onPageChange('orders')}>My Orders</button>
        <button onClick={() => onPageChange('cart')}>My Cart ({cartCount})</button>
        <button onClick={() => onPageChange('profile')}>My Profile</button>
        <button onClick={() => onPageChange('settings')}>Settings</button>
        <button onClick={() => onPageChange('logout')}>Logout</button>
      </div>
    </>
  )
}

export default Navbar