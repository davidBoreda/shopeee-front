import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonPartial, { btnPartialOptions } from "../partials/ButtonPartial";
import { toast } from "react-toastify";
import {
  validateIdSchema,
  validateEditCardSchema,
} from "../validation/editCardValidation";
import ROUTES from "../routes/routes";
import AlertPartial from "../partials/AlertPartial";

const EditCardPage = () => {
  const [productData, setProductData] = useState(null);
  const [errorState, setErrorState] = useState(null);
  let { productId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (validateIdSchema({ id: productId })) {
      navigate(ROUTES.HOME);
      return;
    }

    axios
      .get(`/products/getproduct/${productId}`)
      .then(({ data }) => {
        setProductData(data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [productId]);

  const handleInputChange = (ev) => {
    const newProductData = JSON.parse(JSON.stringify(productData));
    newProductData[ev.target.id] = ev.target.value;
    setProductData(newProductData);
  };

  const handleDiscard = (e) => {
    e.preventDefault();

    axios
      .get(`/products/getproduct/${productId}`)
      .then(({ data }) => {
        setProductData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    try {
      const errors = validateEditCardSchema({
        name: productData.name,
        brand: productData.brand,
        description: productData.description,
        stockQuant: productData.stockQuant,
        price: productData.price,
        picture: productData.picture,
      });
      if (errors) {
        setErrorState(errors);
        return;
      }

      const response = await axios.put("/products/editproduct", productData);
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

      navigate(ROUTES.HOME);
    } catch (err) {
      console.log(err.response.data);
    }
  };
  if (productData) {
    return (
      <form>
        <h5 className="font-weight-bold">
          <i className="bi bi-pencil-square"></i>
          {"  "}Updating Product: {productData.name}
        </h5>

        <p className="font-italic">ID: {productData._id}</p>
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
              value={productData.brand}
              onChange={handleInputChange}
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
              value={productData.description}
              onChange={handleInputChange}
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
              value={productData.picture}
              onChange={handleInputChange}
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
              value={productData.stockQuant}
              onChange={handleInputChange}
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
              value={productData.price}
              onChange={handleInputChange}
            />
            {errorState && errorState.price && (
              <AlertPartial>{errorState.price.join("<br>")}</AlertPartial>
            )}
          </div>
        </div>
        <ButtonPartial
          btnOption={btnPartialOptions.warning}
          onClick={handleSaveChanges}
        >
          Save changes
        </ButtonPartial>
        <ButtonPartial
          btnOption={btnPartialOptions.danger}
          onClick={handleDiscard}
        >
          Discard
        </ButtonPartial>
      </form>
    );
  } else {
    return (
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
};
export default EditCardPage;
