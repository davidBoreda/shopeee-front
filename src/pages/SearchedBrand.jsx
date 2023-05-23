import { useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import ProductCardComponent from "../components/ProductCardComponent";

import ROUTES from "../routes/routes";
import { validateSearchSchema } from "../validation/searchValidation";

const SearchedBrand = () => {
  const navigate = useNavigate();
  const searchQuery = useSelector((state) => state.searchStore.navSearch);
  const isAdmin = useSelector((state) => state.authStore.clientInfo.isAdmin);
  const [productArr, setProductArr] = useState(null);

  useEffect(() => {
    const errors = validateSearchSchema(searchQuery);
    if (errors) {
      console.log(errors);
    }
    axios
      .get(`products/1/10/findbyname?brand=${searchQuery}`)
      .then(({ data }) => {
        setProductArr(data);
      })
      .catch((err) => {
        navigate(ROUTES.HOME);
      });
  }, [searchQuery]);

  const handleAddToWishListClick = async (id) => {
    try {
      const res = await axios.post("/favorite/newfavorite", {
        favoritesId: id,
      });
      toast.success(res.data.msg, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      let errorFromServer = err.response.data.err.details.join(", ");

      toast.error(errorFromServer, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleEditClick = (id) => {
    navigate(`/editproduct/${id}`);
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await axios.delete(`/products/deleteproduct/${id}`);
      let { deleted } = response.data;
      setProductArr((state) => {
        if (!state) {
          return state;
        }
        return state.filter((item) => item._id !== id);
      });

      toast.success(`item ${deleted.name} was deleted from Data Base`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      console.log(err.response.data);
    }
  };
  if (productArr) {
    return (
      <div className="row row-clos-1 row-cols-md-3 g-4">
        {productArr.map((item) => (
          <div className="col" key={item._id + Date.now()}>
            <ProductCardComponent
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              brand={item.brand}
              onAddToWishList={handleAddToWishListClick}
              onDelete={handleDeleteClick}
              isAdmin={isAdmin}
              onEdit={handleEditClick}
              imgUrl={item.picture}
            />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <Fragment>
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <NavLink to={"/"}>Back to Home Page</NavLink>
      </Fragment>
    );
  }
};
export default SearchedBrand;
