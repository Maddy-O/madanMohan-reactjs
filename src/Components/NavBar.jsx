import React from "react";

const NavBar = () => {
  return (
    <div
      style={{
        padding: "0px 50px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <p>All Products</p>
      <p>Favorite Products</p>
    </div>
  );
};

export default NavBar;
