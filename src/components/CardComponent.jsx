import ButtonPartial, { btnPartialOptions } from "../partials/ButtonPartial";
import PropTypes from "prop-types";
const CardComponent = ({ imgUrl, title, description }) => {
  return (
    <div className="card">
      <img src={imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <ButtonPartial
          btnOption={btnPartialOptions.danger}
          icon="bi-chat-left-heart-fill"
        >
          Add
        </ButtonPartial>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: (props, propName, componentName) => {
    if (
      !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(
        props[propName]
      )
    ) {
      return new Error(
        "Invalid prop `" +
          propName +
          "` supplied to" +
          " `" +
          componentName +
          "`. Validation failed."
      );
    }
  },
};

export default CardComponent;
