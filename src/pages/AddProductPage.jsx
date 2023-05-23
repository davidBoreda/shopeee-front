import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonPartial, { btnPartialOptions } from "../partials/ButtonPartial";
import { toast } from "react-toastify";
import { validateNewProductSchema } from "../validation/newProductValidation";
import AlertPartial from "../partials/AlertPartial";
import ROUTES from "../routes/routes";

const AddProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    stockQuant: "",
    picture: "",
  });
  const [errorState, setErrorState] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (ev) => {
    const newProductData = JSON.parse(JSON.stringify(productData));
    newProductData[ev.target.id] = ev.target.value;
    setProductData(newProductData);
  };

  const handleAddNewProduct = async (ev) => {
    ev.preventDefault();
    try {
      const errors = validateNewProductSchema(productData);
      if (errors) {
        console.log(errors);
        setErrorState(errors);
      } else {
        const response = await axios.post("/products/addnewproduct", {
          name: productData.name,
          brand: productData.brand,
          description: productData.description,
          price: productData.price,
          stockQuant: productData.stockQuant,
          picture: productData.picture,
        });
        let { msg } = response.data;

        toast.success(msg, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(ROUTES.PROFILE);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form>
      <h5 className="font-weight-bold">
        <i className="bi bi-pencil-square"></i>
        {"  "}New Product
      </h5>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Product Name:</label>
          <input
            type="text"
            id="name"
            className="form-control mb-3"
            onChange={handleInputChange}
            value={productData.name}
          />
          {errorState && errorState.name && (
            <AlertPartial>{errorState.name.join("<br>")}</AlertPartial>
          )}
        </div>
        <div className="form-group col-md-6">
          <label>Brand</label>
          <input
            type="text"
            className="form-control mb-3"
            id="brand"
            onChange={handleInputChange}
            value={productData.brand}
          />
          {errorState && errorState.brand && (
            <AlertPartial>{errorState.brand.join("<br>")}</AlertPartial>
          )}
        </div>

        <div className="form-group col-md-6">
          <label>Description:</label>
          <input
            type="text"
            className="form-control mb-3"
            id="description"
            onChange={handleInputChange}
            value={productData.description}
          />
          {errorState && errorState.description && (
            <AlertPartial>{errorState.description.join("<br>")}</AlertPartial>
          )}
        </div>

        <div className="form-group col-md-6">
          <label>Picture:</label>
          <input
            type="text"
            className="form-control mb-3"
            id="picture"
            onChange={handleInputChange}
            value={productData.picture}
          />
          {errorState && errorState.picture && (
            <AlertPartial>{errorState.picture.join("<br>")}</AlertPartial>
          )}
        </div>

        <div className="form-group col-md-6">
          <label>Stock Quant:</label>
          <input
            type="number"
            className="form-control mb-3"
            id="stockQuant"
            onChange={handleInputChange}
            value={productData.stockQuant}
          />
          {errorState && errorState.stockQuant && (
            <AlertPartial>{errorState.stockQuant.join("<br>")}</AlertPartial>
          )}
        </div>

        <div className="form-group col-md-6">
          <label>Price:</label>
          <input
            type="number"
            className="form-control mb-3"
            id="price"
            onChange={handleInputChange}
            value={productData.price}
          />
          {errorState && errorState.price && (
            <AlertPartial>{errorState.price.join("<br>")}</AlertPartial>
          )}
        </div>
      </div>
      <ButtonPartial
        btnOption={btnPartialOptions.success}
        onClick={handleAddNewProduct}
      >
        Add New Product
      </ButtonPartial>
    </form>
  );
};
export default AddProductPage;
