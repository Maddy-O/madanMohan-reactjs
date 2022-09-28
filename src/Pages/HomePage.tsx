import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProductCompo from "../Components/ProductCompo";
import { useDispatch, useSelector } from "react-redux";
import { categoriesFetch, productsFetch } from "../features/productSlice";
import { Product } from "../model";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const products = useSelector((state: any) => state.products.products);
  const categories = useSelector((state: any) => state.products.categories);

  const handleFilter = (cat: string) => {
    let fil = products.filter((e: any) => e.category === cat);
    setFilteredData(fil || []);
  };

  const handleAllProductClick = () => {
    setFilteredData([]);
  };

  useEffect(() => {
    dispatch(categoriesFetch());
    dispatch(productsFetch());
  }, []);

  console.log(categories);

  return (
    <div className="bg-slate-600">
      <div className=" flex flex-wrap gap-5 p-5 justify-around bg-slate-800  ">
        <p
          className=" cursor-pointer bg-slate-300 px-5 py-1 rounded-md font-semibold text-slate-800"
          onClick={handleAllProductClick}
        >
          All Products
        </p>
        <p
          className=" cursor-pointer bg-slate-300 px-5 py-1 rounded-md font-semibold text-slate-800"
          onClick={() => navigate("/create")}
        >
          Add New Product
        </p>
      </div>
      <div className=" flex flex-wrap gap-5 p-5 justify-around bg-slate-700 ">
        {categories?.map((e: any) => (
          <p
            key={e._id}
            className="cursor-pointer border-b-2 border-white px-1 py-1 text-slate-200 font-semibold"
            onClick={() => handleFilter(e.name)}
          >
            {e.name}
          </p>
        ))}
      </div>
      <div className="flex flex-wrap gap-5 my-5">
        {filteredData?.length ? (
          <>
            {filteredData?.map((e: any) => (
              <ProductCompo key={e._id} data={e} />
            ))}
          </>
        ) : (
          <>
            {products?.map((e: any) => (
              <ProductCompo key={e._id} data={e} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
