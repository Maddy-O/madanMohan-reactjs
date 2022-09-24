import React from "react";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const { state } = useLocation();

  console.log(state);
  return (
    <div>
      <img src={state.avatar} style={{ width: "300px" }} />
      <h2>{state.name}</h2>
      <p style={{ width: "400px", textAlign: "center", margin: "auto" }}>
        {state.description}
      </p>
      <p>
        Price: <b>{state.price} KWD</b>
      </p>
    </div>
  );
};

export default DetailPage;
