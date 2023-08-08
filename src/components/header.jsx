import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Services
          </Link>
          <ul className="subnav-list">
            <li className="subnav-item">
              <Link to="/subitem1" className="subnav-link">
                Service 1
              </Link>
            </li>
            <li className="subnav-item">
              <Link to="/subitem2" className="subnav-link">
                Service 2
              </Link>
            </li>
            <li className="subnav-item">
              <Link to="/subitem3" className="subnav-link">
                Service 3
              </Link>
            </li>
            <li className="subnav-item">
              <Link to="/subitem4" className="subnav-link">
                Service 4
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Contact
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Latest
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Login
          </Link>
          <ul className="subnav-list">
            <li className="subnav-item">
              <Link to="/subitem1" className="subnav-link">
                Register
              </Link>
            </li>
            <li className="subnav-item">
              <Link to="/subitem2" className="subnav-link">
                Subitem2
              </Link>
            </li>
            <li className="subnav-item">
              <Link to="/subitem3" className="subnav-link">
                Subitem3
              </Link>
            </li>
            <li className="subnav-item">
              <Link to="/subitem4" className="subnav-link">
                Subitem4
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
