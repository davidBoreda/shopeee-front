import CardComponent from "../components/CardComponent";

const AboutUs = () => {
  return (
    <div className="about-div">
      <h1>About Us</h1>
      <CardComponent
        title="Shopeee"
        description="This website, which is the final project of the full-stack course, reflects the variety of technologies and tools I acquired during the months of the course.
The site simulates a virtual store, there are two types of user - customer and admin.
You can add products to a list of favorites as well as place an order for registered customers.
You can view the favorite lists.
A person with admin privileges can perform a crud operation on both products and clients.

The website is built in REACT and the server side in NODEJS, the database is mongoDB."
        imgUrl=""
      />
    </div>
  );
};

export default AboutUs;
