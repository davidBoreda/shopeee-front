import PropTypes from "prop-types";
import ButtonPartial from "../partials/ButtonPartial";

const ProductCardComponent = ({
  id,
  name,
  brand,
  description,
  price,
  onAddToWishList,
  msg,
}) => {
  const handleAddToWishListClick = () => {
    onAddToWishList(id);
  };
  return (
    <div className="card">
      <div className="card-header">{brand}</div>
      <div className="card-body">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Price:
            <span className="badge bg-dark pill">{price}</span>
          </li>
          <span>{msg}</span>
        </ul>
        <ButtonPartial
          icon="bi-clipboard2-heart-fill"
          onClick={handleAddToWishListClick}
        >
          Add
        </ButtonPartial>
      </div>
    </div>
  );
};

ProductCardComponent.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  brand: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  onAddToWishList: PropTypes.func,
  msg: PropTypes.string,
};

export default ProductCardComponent;
