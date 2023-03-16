import ButtonPartial, { btnPartialOptions } from "../partials/ButtonPartial";

const CardComponent = ({ imgUrl, title, description }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <ButtonPartial
          btnOption={btnPartialOptions.primary}
          icon="bi-chat-left-heart-fill"
        >
          Add
        </ButtonPartial>
      </div>
    </div>
  );
};

export default CardComponent;
