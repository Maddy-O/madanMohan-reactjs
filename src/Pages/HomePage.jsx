import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProductCompo from "../Components/ProductCompo";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllCategories,
  deleteProductRedux,
} from "../Redux/action";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([]);
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  const handleFilter = (cat) => {
    let fil = products.filter((e) => e.category === cat);
    setFilteredData(fil || []);
    // console.log("filter", fil);
  };

  const handleAllProductClick = () => {
    setFilteredData([]);
  };

  const handleDelete = (id) => {
    dispatch(deleteProductRedux(id));
  };

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, []);

  // console.log(products);

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
              <ProductCompo key={e._id} data={e} handleDelete={handleDelete} />
            ))}
          </>
        ) : (
          <>
            {products?.map((e) => (
              <ProductCompo key={e._id} data={e} handleDelete={handleDelete} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
