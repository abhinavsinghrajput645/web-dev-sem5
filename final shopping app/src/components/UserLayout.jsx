import { Link, Outlet } from 'react-router-dom'

function UserLayout({ cartCount }) {
  return (
    <>
      <div className="top">
        <h1>MyShop</h1>
      </div>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/orders">My Orders</Link>
        <Link to="/cart">My Cart ({cartCount})</Link>
        <Link to="/profile">My Profile</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/logout">Logout</Link>
      </div>
      <Outlet />
    </>
  )
}

export default UserLayout