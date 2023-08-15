import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <Link className="h1-link" to={"/"}>
        <h1 className="header">For the Love of Dirt</h1>
      </Link>
      <nav>
        <button className="header-button" onClick={() => navigate(`/about`)}>
          About the Author
        </button>
        <button className="header-button" onClick={() => navigate(`/shop`)}>
          Buy a Copy
        </button>
        <button className="header-button">
          <a href="https://www.facebook.com/FortheLoveofDirtBook/events">
            Find a Book Signing
          </a>
        </button>
      </nav>
    </div>
  );
};

export default Header;
