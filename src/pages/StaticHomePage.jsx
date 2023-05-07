import { Fragment, useState } from "react";
import CardComponent from "../components/CardComponent";

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

const StaticHomePage = () => {
  const [arrayToDisplay, setArrayToDisplay] = useState(initialArray);
  const deleteItemFromArray = (id) => {
    console.log("delete from father");
    setArrayToDisplay((copyOfArrayToDisplay) =>
      copyOfArrayToDisplay.filter((item) => item.id != id)
    );
    //   initialArray = initialArray.filter((item) => item.id != id);
    //   console.log("initialArray", initialArray);
  };
  return (
    <Fragment>
      <h1>welcome to SHOPEEE</h1>
      <div className="row row-cols-2 row-cols-md-3 g-4">
        {arrayToDisplay.map((item) => (
          <div className="col" key={item.id + Date.now()}>
            <CardComponent
              id={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              description={item.description}
              onDelete={deleteItemFromArray}
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default StaticHomePage;
