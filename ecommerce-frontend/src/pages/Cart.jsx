import { useEffect, useState } from "react";
import axios from "axios";

function Cart() {
  const [cart, setCart] = useState(null);

  const fetchCart = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:5000/api/cart", {
      headers: { Authorization: `Bearer ${token}` }
    });
    setCart(res.data);
  };

  const removeItem = async (productId) => {
    const token = localStorage.getItem("token");
    await axios.delete(`http://localhost:5000/api/cart/remove/${productId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchCart();
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (!cart) return <p>Loading cart...</p>;

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      {cart.items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul className="list-group">
          {cart.items.map((item) => (
            <li key={item.productId._id} className="list-group-item d-flex justify-content-between">
              <span>{item.productId.name} - {item.quantity}</span>
              <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.productId._id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
