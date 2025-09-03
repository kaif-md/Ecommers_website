import axios from "axios";

function ProductList() {
  // 👇 Add to Cart function
  const addToCart = async (productId) => {
    try {
      const token = localStorage.getItem("token"); // get JWT token
      if (!token) {
        alert("Please login first!");
        return;
      }

      await axios.post(
        "http://localhost:5000/api/cart/add",
        { productId, quantity: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Item added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add item to cart.");
    }
  };

  // Example UI (hardcoded products for now)
  const products = [
    { _id: "1", name: "Laptop", price: 50000 },
    { _id: "2", name: "Phone", price: 20000 },
  ];

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - ₹{product.price}
            <button onClick={() => addToCart(product._id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
