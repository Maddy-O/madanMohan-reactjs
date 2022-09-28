import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postNewProduct } from "../features/productSlice";

const CreatePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    avatar: "",
    category: "",
    description: "",
    developerEmail: "",
    name: "",
    price: 0,
  });

  const handleAddProduct = () => {
    dispatch(postNewProduct(newProduct));
    alert("product added successfull");
    navigate("/");
  };

  return (
    <div className=" bg-slate-600 p-10">
      <div className="w-20 text-center border-2 p-2 border-white cursor-pointer ">
        <button onClick={() => navigate("/")}>{"< "}Back</button>
      </div>
      <div className="flex flex-col w-1/2 m-auto p-5 bg-slate-800 gap-5  ">
        <p>Add New Product details</p>
        <input
          type="text"
          required={true}
          placeholder="Name"
          value={newProduct.name}
          className="p-2"
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <input
          type="number"
          required={true}
          placeholder="Price"
          value={newProduct.price}
          className="p-2"
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: Number(e.target.value) })
          }
        />
        <input
          type="text"
          required={true}
          placeholder="Category"
          value={newProduct.category}
          className="p-2"
          onChange={(e) =>
            setNewProduct({ ...newProduct, category: e.target.value })
          }
        />
        <input
          type="text"
          required={true}
          placeholder="Description"
          value={newProduct.description}
          className="p-2"
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
        />
        <input
          type="text"
          required={true}
          placeholder="Paste Avatar Link"
          value={newProduct.avatar}
          className="p-2"
          onChange={(e) =>
            setNewProduct({ ...newProduct, avatar: e.target.value })
          }
        />
        <input
          type="email"
          required={true}
          placeholder="Enter Developer Email You Registered The App With"
          value={newProduct.developerEmail}
          className="p-2"
          onChange={(e) =>
            setNewProduct({ ...newProduct, developerEmail: e.target.value })
          }
        />
        <button
          className="w-5/6 m-auto bg-blue-500 px-5 rounded-lg py-2 text-white"
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default CreatePage;
