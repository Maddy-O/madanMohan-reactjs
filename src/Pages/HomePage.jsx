import React, { useEffect, useState } from "react";
import { getAllProducts, getAllCategories } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([]);
  const products = useSelector((state) => state.products.products);
  const categories = useSelector((state) => state.categories.categories);

  const handleFilter = (cat) => {
    let fil = products.filter((e) => e.category == cat);
    setFilteredData(fil || []);
    console.log("filter", fil);
  };

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, [products?.length, categories?.length]);

  console.log("Home_Products", products);
  console.log("Home_Categories", categories);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {categories?.map((e) => (
          <h5
            key={e.id}
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
              <div key={e.id} style={{ width: "300px" }}>
                <h4>{e.name}</h4>
                <p>{e.price}</p>
              </div>
            ))}
          </>
        ) : (
          <>
            {products?.map((e) => (
              <div key={e.id} style={{ width: "300px" }}>
                <h4>{e.name}</h4>
                <p>{e.price}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
