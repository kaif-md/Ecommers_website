import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">🛒 Food Delivary</Link>
        <div className="navbar-nav ms-auto">
          {isAuthenticated && (
            <>
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/cart">Cart</Link>
              <Link className="nav-link" to="/about">about</Link>
              <Link className="nav-link" to="/items">items</Link>
            </>
          )}
          {!isAuthenticated ? (
            <>
              <Link className="nav-link" to="/login">Login</Link>
              <Link className="nav-link" to="/signup">Signup</Link>
            </>
          ) : (
            <button className="btn btn-sm btn-outline-light ms-2" onClick={logout}>Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
