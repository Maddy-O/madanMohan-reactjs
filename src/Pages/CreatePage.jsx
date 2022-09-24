import React, { useState } from "react";
import { postNewProduct } from "../Redux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
    // console.log(newProduct);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        gap: "10px",
        margin: "auto",
      }}
    >
      <p>Add New Product details</p>
      <input
        type="text"
        required={true}
        placeholder="name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        type="number"
        required={true}
        placeholder="price"
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct({ ...newProduct, price: e.target.value })
        }
      />
      <input
        type="text"
        required={true}
        placeholder="category"
        value={newProduct.category}
        onChange={(e) =>
          setNewProduct({ ...newProduct, category: e.target.value })
        }
      />
      <input
        type="text"
        required={true}
        placeholder="description"
        value={newProduct.description}
        onChange={(e) =>
          setNewProduct({ ...newProduct, description: e.target.value })
        }
      />
      <input
        type="text"
        required={true}
        placeholder="avatar"
        value={newProduct.avatar}
        onChange={(e) =>
          setNewProduct({ ...newProduct, avatar: e.target.value })
        }
      />
      <input
        type="email"
        required={true}
        placeholder="developer email"
        value={newProduct.developerEmail}
        onChange={(e) =>
          setNewProduct({ ...newProduct, developerEmail: e.target.value })
        }
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default CreatePage;
