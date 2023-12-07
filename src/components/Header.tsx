import { Link, useNavigate } from "react-router-dom";
import ElanaHead from "../assets/Elana_head.png";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <Link className="h1-link" to={"/"}>
        <img className="header-img" src={ElanaHead} alt="Elana" />
        <h1>For the Love of Dirt</h1>
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
