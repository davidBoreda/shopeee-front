import { useState, useEffect } from "react";
import ProductCardComponent from "../components/ProductCardComponent";
import axios from "axios";

const HomePage = () => {
  const [productArr, setProductArr] = useState(null);
  // const [msg, setMsg] = useState(null);
  useEffect(() => {
    axios
      .get("/products/1/10")
      .then(({ data }) => {
        setProductArr(data);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAddToWishListClick = async (id) => {
    // console.log(id);
    try {
      const res = await axios.post("/favorite/newfavorite", {
        favoritesId: id,
      });
      // setMsg(res.data.msg);
    } catch (err) {
      console.log(err);
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
              // msg={msg}
            />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
};

export default HomePage;
