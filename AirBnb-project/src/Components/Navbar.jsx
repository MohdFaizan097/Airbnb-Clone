import React from "react";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      <nav>
        <img src={Logo} className="Logo" />
      </nav>
    </>
  );
}

export default Navbar;
