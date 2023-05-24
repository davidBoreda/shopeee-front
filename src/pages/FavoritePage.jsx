import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import ProductCardComponent from "../components/ProductCardComponent";

const FavoritePage = () => {
  const clientInfo = useSelector((state) => state.authStore.clientInfo);
  const [favoriteArr, setFavoriteArr] = useState(null);

  useEffect(() => {
    if (!clientInfo) {
      return;
    }
    axios
      .get("/favorite/showfavorite2")
      .then(({ data }) => {
        setFavoriteArr(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(favoriteArr);
  if (favoriteArr) {
    return (
      <div className="row row-clos-1 row-cols-md-3 g-4">
        {favoriteArr.map((item) => (
          <div className="col" key={item._id + Date.now()}>
            <ProductCardComponent
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              brand={item.brand}
              imgUrl={item.picture}
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
export default FavoritePage;
