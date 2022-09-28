import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { remoeFromFavourite } from "../features/favouriteSlice";
import { useNavigate } from "react-router-dom";

const Favourite = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favouriteItems = useSelector(
    (state: any) => state.favourite.favouriteItems
  );

  const handleRemoveFavourite = (data: any) => {
    dispatch(remoeFromFavourite(data));
  };

  return (
    <div className="p-5 bg-slate-600 ">
      <div>
        <h2 className=" text-center text-xl font-semibold">Favourite Items</h2>
        <div className="w-20 text-center border-2 p-2 border-white cursor-pointer ">
          <button onClick={() => navigate("/")}>{"< "}Back</button>
        </div>
      </div>
      {favouriteItems.length === 0 ? (
        <div className="flex">
          <div className="m-auto">
            <p className="m-auto my-96 font-mono text-rose-400">
              Your favourite list is empty!
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="p-5">
            <table className="m-auto">
              <thead>
                <tr className="border-b-2 my-3">
                  <td className="w-1/3 text-center uppercase">Items</td>
                  <td className="w-1/3 text-center uppercase">Price</td>
                  <td className="w-1/3 text-center uppercase">Remove</td>
                </tr>
              </thead>
              <tbody>
                {favouriteItems?.map((e: any) => (
                  <tr key={e._id} className=" border-b-2 table-row">
                    <td className="flex items-center gap-5 my-5">
                      <div className="bg-slate-700 p-2 w-64 h-64 overflow-hidden rounded-lg">
                        <img src={e.avatar} className="h-min rounded-lg" />
                      </div>
                      <h4>{e.name}</h4>
                    </td>
                    <td className=" text-center ">
                      {e.price} <i>KWD</i>
                    </td>
                    <td className=" text-center ">
                      <button
                        className="mx-3 bg-rose-500 px-5 rounded-lg py-1.5 text-white"
                        onClick={() => handleRemoveFavourite(e)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Favourite;
