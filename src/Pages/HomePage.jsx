import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProductCompo from "../Components/ProductCompo";
import { useDispatch, useSelector } from "react-redux";
import { categoriesFetch, productsFetch } from "../features/productSlice";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([]);
  const products = useSelector((state) => state.products.products.products);
  const categories = useSelector(
    (state) => state.products.categories.categories
  );

  const handleFilter = (cat) => {
    let fil = products.filter((e) => e.category === cat);
    setFilteredData(fil || []);
  };

  const handleAllProductClick = () => {
    setFilteredData([]);
  };

  useEffect(() => {
    dispatch(categoriesFetch());
    dispatch(productsFetch());
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <p style={{ cursor: "pointer" }} onClick={handleAllProductClick}>
          All Products
        </p>
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
              <ProductCompo key={e._id} data={e} />
            ))}
          </>
        ) : (
          <>
            {products?.map((e) => (
              <ProductCompo key={e._id} data={e} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
