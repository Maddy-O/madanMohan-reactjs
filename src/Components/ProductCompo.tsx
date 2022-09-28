import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../features/productSlice";
import { addToFavourite } from "../features/favouriteSlice";

const ProductCompo = ({ data }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNvaigate = (details: any) => {
    navigate(`${details._id}`, { state: details });
  };

  const handleAddToFavour = (product: any) => {
    dispatch(addToFavourite(product));
  };

  const handleDelete = (item: any) => {
    dispatch(deleteProduct(item));
  };

  return (
    <div
      key={data._id}
      className="w-300 py-5 px-3 m-auto h-96 bg-slate-900 rounded-xl"
    >
      <div onClick={() => handleNvaigate(data)}>
        <div className="bg-slate-700 p-2 m-auto max-w-fit h-64 overflow-hidden rounded-lg">
          <img src={data.avatar} className="h-min rounded-lg" />
        </div>
        <h4 className="text-left px-3 my-1 text-white">{data.name}</h4>
        <p className="text-right px-3 my-1 text-white">{data.price} KD</p>
      </div>
      <div>
        <button
          className="mx-3 bg-blue-500 px-5 rounded-lg py-1.5 text-white "
          onClick={() => handleAddToFavour(data)}
        >
          Add to Fav.
        </button>
        <button
          className="mx-3 bg-rose-500 px-5 rounded-lg py-1.5 text-white"
          onClick={() => handleDelete(data)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCompo;
