import { Fragment } from "react";
import CardComponent from "../components/CardComponent";

const HomePage = () => {
  return (
    <Fragment>
      <h1>welcome to SHOPEEE</h1>
      <CardComponent
        imgUrl="https://images.freeimages.com/images/large-previews/a3e/wild-horse-1334844.jpg"
        title="Horse"
        description="Some quick example text to build on the card title and make up the bulk of the card's content."
      />
    </Fragment>
  );
};

export default HomePage;
