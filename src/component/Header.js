import React from "react";

export default function Header() {
  return (
    <div className="header container">
      <h2 className="brand_logo">Steld</h2>
      <div className="header_menu">
        <ul>
          <li className="link">New arrival</li>
          <li className="link">Shop</li>
          <li className="link">Blog</li>
          <li className="link">About us</li>
          <li className="link">FAQ</li>
          <li className="link action_btn">
            <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png" />
            <img
              src="https://i.pinimg.com/originals/15/bb/55/15bb559cdd28f56d7c17b00498b4a946.png"
              className="active"
            />
          </li>
        </ul>
        {/* <div class="menu-icon"></div>
        <ul class="menu">
          <li class="menu-item">Home</li>
          <li class="menu-item">About</li>
          <li class="menu-item">Contact</li>
          <li class="menu-item">Rock on GSAP</li>
        </ul> */}
      </div>
    </div>
  );
}
