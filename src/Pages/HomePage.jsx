import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllCategories } from "../Redux/action";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([]);
  const products = useSelector((state) => state.products.products);
  const categories = useSelector((state) => state.categories.categories);

  const handleFilter = (cat) => {
    let fil = products.filter((e) => e.category == cat);
    setFilteredData(fil || []);
    console.log("filter", fil);
  };

  const handleNvaigate = (details) => {
    console.log("details", details._id);
    navigate(`${details._id}`, { state: details });
  };

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, [products?.length, categories?.length]);

  // console.log("Home_Products", products);
  // console.log("Home_Categories", categories);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <p>All Products</p>
        <p style={{ cursor: "pointer" }} onClick={() => navigate("/create")}>
          Add New Product
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {categories?.map((e) => (
          <h5
            key={e._id}
            style={{ cursor: "pointer" }}
            onClick={() => handleFilter(e.name)}
          >
            {e.name}
          </h5>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredData?.length ? (
          <>
            {filteredData?.map((e) => (
              <div key={e._id} style={{ width: "300px", border: "1px solid" }}>
                <div onClick={() => handleNvaigate(e)}>
                  <h4>{e.name}</h4>
                  <p>{e.price}</p>
                </div>
                <div>
                  <button>Delete</button>
                  <button>Add to Fav.</button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {products?.map((e) => (
              <div key={e._id} style={{ width: "300px", border: "1px solid" }}>
                <div onClick={() => handleNvaigate(e)}>
                  <h4>{e.name}</h4>
                  <p>{e.price}</p>
                </div>
                <div>
                  <button>Delete</button>
                  <button>Add to Fav.</button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
