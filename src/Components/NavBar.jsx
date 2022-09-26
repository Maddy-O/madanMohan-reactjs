import React from "react";
import logo from "../Assets/logo.jfif";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        padding: "0px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0px",
          alignItems: "center",
          backgroundColor: "black",
          height: "30px",
          padding: "5px 10px 5px 0px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        <img src={logo} style={{ width: "30px", height: "30px" }} />
        <b>paymets</b>
      </div>
      <p style={{ cursor: "pointer" }} onClick={() => navigate("/favourite")}>
        Favourite Products
      </p>
    </div>
  );
};

export default NavBar;
