import { useState } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import { products } from './data'

function App() {
  const [page, setPage] = useState('home')
  const [cart, setCart] = useState([])
  const [orders, setOrders] = useState([])

  const addToCart = product => {
    setCart(prev => {
      const item = prev.find(x => x.id === product.id)

      if (item) {
        return prev.map(x =>
          x.id === product.id
            ? { ...x, quantity: x.quantity + 1 }
            : x
        )
      }

      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = id => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const placeOrder = () => {
    if (!cart.length) return
    setOrders(prev => [...prev, ...cart])
    setCart([])
    alert('Order placed successfully')
    setPage('orders')
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <Navbar cartCount={cartCount} onPageChange={setPage} />

      {page === 'home' && (
        <main className="products">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </main>
      )}

      {page === 'cart' && (
        <main className="page">
          <h2>My Cart</h2>

          {!cart.length && <p>Your cart is empty.</p>}

          {cart.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div>
                <p><b>{item.title}</b></p>
                <p>Price: ₹{item.price}.00/-</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}

          {cart.length > 0 && (
            <button className="order-button" onClick={placeOrder}>
              Place Order
            </button>
          )}
        </main>
      )}

      {page === 'orders' && (
        <main className="page">
          <h2>My Orders</h2>
          {!orders.length && <p>No orders yet.</p>}
          {orders.map((item, index) => (
            <p key={index}>{item.title} — ₹{item.price}.00/-</p>
          ))}
        </main>
      )}

      {page === 'profile' && (
        <main className="page">
          <h2>My Profile</h2>
          <p>Name: User</p>
          <p>Email: user@example.com</p>
        </main>
      )}

      {page === 'settings' && (
        <main className="page">
          <h2>Settings</h2>
          <p>Account Settings</p>
          <p>Notifications</p>
          <p>Privacy Settings</p>
        </main>
      )}

      {page === 'logout' && (
        <main className="page">
          <h2>Logout</h2>
          <p>You have been logged out.</p>
        </main>
      )}
    </>
  )
}

export default App