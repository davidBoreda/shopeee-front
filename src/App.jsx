import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
// import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <div className="container">
      <header>
        <Navbar isDark={true} />
      </header>
      <main>
        <HomePage />
        {/* <AboutUs /> */}
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
