import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { remoeFromFavourite } from "../features/favouriteSlice";

const Favourite = () => {
  const dispatch = useDispatch();
  const favouriteItems = useSelector((state) => state.favourite.favouriteItems);

  const handleRemoveFavourite = (data) => {
    dispatch(remoeFromFavourite(data));
  };

  return (
    <div>
      <h2>Favourite Items</h2>
      {favouriteItems.length === 0 ? (
        <div style={{ display: "flex" }}>
          <Link
            to="/"
            style={{ width: "10%", textDecoration: "none", padding: "10px" }}
          >
            <p style={{ border: "1px solid" }}>{"<"} Back</p>
          </Link>
          <p style={{ width: "90%", padding: "10px" }}>
            Your favourite list is empty
          </p>
        </div>
      ) : (
        <>
          <div style={{ padding: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <p>Item</p>
              <p></p>
              <p>Price</p>
              <p></p>
            </div>
            {favouriteItems?.map((e) => (
              <div key={e._id}>
                <hr />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "120px",
                        height: "150px",
                        margin: "auto",
                      }}
                    >
                      <img
                        src={e.avatar}
                        style={{ height: "150px", width: "100%" }}
                      />
                    </div>
                    <h4>{e.name}</h4>
                  </div>
                  <p>
                    {e.price} <i>KWD</i>
                  </p>
                  <button onClick={() => handleRemoveFavourite(e)}>
                    Remove
                  </button>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Favourite;
