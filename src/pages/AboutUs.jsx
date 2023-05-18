import CardComponent from "../components/CardComponent";

const AboutUs = () => {
  return (
    <div className="about-div">
      <h1>About Us</h1>
      <CardComponent
        title="Shopeee"
        description="xyz"
        imgUrl="https://openai-labs-public-images-prod.azureedge.net/user-22F4rDgUJx2yMY14KAMAMOF4/generations/generation-84l4RJDgNoHA21qJAQ90VqgP/image.png"
      />
    </div>
  );
};

export default AboutUs;
