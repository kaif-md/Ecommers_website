import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">🛒 E-Shop</Link>
        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/cart">Cart</Link>
          <Link className="nav-link" to="/login">Login</Link>
          <Link className="nav-link" to="/signup">Signup</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
