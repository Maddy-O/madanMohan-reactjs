import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // console.log(state);
  return (
    <div className="m-auto py-5 bg-slate-600 ">
      <div className="w-20 text-center border-2 p-2 border-white mx-5 cursor-pointer ">
        <button onClick={() => navigate("/")}>{"< "}Back</button>
      </div>
      <div className=" w-4/6 m-auto bg-slate-700 p-5">
        <p className=" text-center font-semibold my-5 text-xl ">
          Product Deatils
        </p>
        <p className=" text-right font-semibold my-5 text-sm ">
          Item Code : {state._id}
        </p>
        <img src={state.avatar} className=" w-1/2 m-auto " />
        <h2 className="w-1/2 m-auto my-5 text-center text-lg">{state.name}</h2>
        <div className="flex w-1/2 m-auto my-5 text-lg gap-5">
          <p className=" font-semibold ">Category: </p>
          <p>{state.category}</p>
        </div>
        <div className="flex w-1/2 m-auto my-5 text-lg gap-5">
          <p className=" font-semibold ">Description: </p>
          <p>{state.description}</p>
        </div>
        <div className="flex w-1/2 m-auto my-5 text-lg gap-5">
          <p className=" font-semibold ">Price: </p>
          <p>{state.price} KD</p>
        </div>
        <div className="flex w-1/2 m-auto my-5 text-lg gap-5">
          <p className=" font-semibold ">Developer Email: </p>
          <p>{state.developerEmail}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
