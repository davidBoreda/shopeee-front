import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

let initialArray = [
  {
    id: 1,
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1669888245224-8fe296e1bc60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: "Astronaut 1",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 2,
    imgUrl:
      "https://images.pexels.com/photos/15918331/pexels-photo-15918331.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    title: "coffee 1",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 3,
    imgUrl:
      "https://images.pexels.com/photos/13536123/pexels-photo-13536123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "coffee 2",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 4,
    imgUrl:
      "https://images.pexels.com/photos/9149635/pexels-photo-9149635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "coffee 3",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

const ItemPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { id } = useParams();
  //   useEffect(() => {
  //     setTimeout(() => {
  //       const item = initialArray.find((item) => item.id == id);
  //       setSelectedItem(item);
  //     }, 2000);
  //   }, [id]);
  useEffect(() => {
    const item = initialArray.find((item) => item.id == id);
    setSelectedItem(item);
  }, [id]);

  if (selectedItem) {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={selectedItem.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{selectedItem.title}</h5>
          <p className="card-text">{selectedItem.description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
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
export default ItemPage;
