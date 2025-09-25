import { Link } from "react-router-dom";
import React from "react";

const MainMenu = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/" style={{ color: "#fff" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about-us" style={{ color: "#fff" }}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/services" style={{ color: "#fff" }}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/technologies" style={{ color: "#fff" }}>
            Technologies
          </Link>
        </li>
        <li>
          <Link to="/history" style={{ color: "#fff" }}>
            Industries
          </Link>
        </li>
        <li>
          <Link to="/team" style={{ color: "#fff" }}>
            Team{" "}
          </Link>
        </li>
        <li>
          <Link to="/contact-us" style={{ color: "#fff" }}>
            Contact Us
          </Link>
        </li>
        {/* ...rest of your commented code */}
      </ul>
    </>
  );
};

export default MainMenu;
