import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../features/productSlice";
import { addToFavourite } from "../features/favouriteSlice";

const ProductCompo = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNvaigate = (details) => {
    navigate(`${details._id}`, { state: details });
  };

  const handleAddToFavour = (product) => {
    dispatch(addToFavourite(product));
  };

  const handleDelete = (item) => {
    dispatch(deleteProduct(item));
  };

  return (
    <div
      key={data._id}
      style={{
        width: "300px",
        border: "1px solid",
        margin: "auto",
        padding: "5px",
      }}
    >
      <div onClick={() => handleNvaigate(data)}>
        <div style={{ width: "280px", height: "300px", margin: "auto" }}>
          <img src={data.avatar} style={{ height: "300px", width: "100%" }} />
        </div>
        <h4>{data.name}</h4>
        <p>{data.price}</p>
      </div>
      <div>
        <button onClick={() => handleDelete(data)}>Delete</button>
        <button onClick={() => handleAddToFavour(data)}>Add to Fav.</button>
      </div>
    </div>
  );
};

export default ProductCompo;
