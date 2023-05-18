import PropTypes from "prop-types";
import ButtonPartial, { btnPartialOptions } from "../partials/ButtonPartial";
import { Fragment } from "react";

const ProductCardComponent = ({
  id,
  name,
  brand,
  description,
  price,
  isAdmin,
  onAddToWishList,
  onDelete,
  onEdit,
  msg,
}) => {
  const handleAddToWishListClick = () => {
    onAddToWishList(id);
  };
  const handleDeleteClick = () => {
    onDelete(id);
  };
  const handleEditClick = () => {
    onEdit(id);
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
        {isAdmin && (
          <Fragment>
            <ButtonPartial
              icon="bi-pen"
              onClick={handleEditClick}
              btnOption={btnPartialOptions.warning}
            >
              Edit
            </ButtonPartial>
            <ButtonPartial
              icon="bi-trash"
              onClick={handleDeleteClick}
              btnOption={btnPartialOptions.danger}
            >
              Delete
            </ButtonPartial>
          </Fragment>
        )}
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
  isAdmin: PropTypes.bool,
  onAddToWishList: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  msg: PropTypes.string,
};

ProductCardComponent.defaultProps = {
  isAdmin: false,
};

export default ProductCardComponent;
