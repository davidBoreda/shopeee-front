import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
// import RegisterPage from "./pages/RegisterPage";
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
        {/* <RegisterPage /> */}
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
