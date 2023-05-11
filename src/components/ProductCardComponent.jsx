import PropTypes from "prop-types";

const ProductCardComponent = ({ name, brand, description, price }) => {
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
        </ul>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

ProductCardComponent.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCardComponent;
