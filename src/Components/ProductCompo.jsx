import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteProductRedux } from "../Redux/action";
import { useDispatch } from "react-redux";

const ProductCompo = ({ data, handleDelete }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNvaigate = (details) => {
    // console.log("details", details._id);
    navigate(`${details._id}`, { state: details });
  };

//   const handleDelete = (id) => {
//     dispatch(deleteProductRedux(id));
//   };

  const addToFavorite = () => {};

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
        <button onClick={() => handleDelete(data._id)}>Delete</button>
        <button>Add to Fav.</button>
      </div>
    </div>
  );
};

export default ProductCompo;
