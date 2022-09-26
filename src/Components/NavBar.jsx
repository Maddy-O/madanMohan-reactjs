import React from "react";
import logo from "../Assets/logo.jfif";
import images from "../Assets/favourite.webp";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between bg-slate-900 text-slate-200 px-10 py-3">
      <div
        className="flex bg-slate-900 text-slate-200 align-middle cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={logo} className=" w-10 h-10 " />
        <b className=" py-2 ">paymets</b>
      </div>
      <div
        className="flex bg-slate-900 text-slate-200 align-middle cursor-pointer"
        onClick={() => navigate("/favourite")}
      >
        <img src={images} className=" w-10 h-10 bg-slate-900" />
        <b className=" py-2 ">Favourite</b>
      </div>
    </div>
  );
};

export default NavBar;
