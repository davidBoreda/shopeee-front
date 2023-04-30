import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import RegisterPage from "./pages/RegisterPage";
import LifeCycleHooksPage from "./pages/LifeCycleHooksPage";
import UseMemoPage from "./pages/UseMemoPage";
import UseCallbackPage from "./pages/UseCallbackPage";
// import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <div className="container">
      <header>
        <Navbar isDark={true} />
      </header>
      <main>
        {/* <HomePage /> */}
        {/* <AboutUs /> */}
        {/* <RegisterPage /> */}
        {/* <LifeCycleHooksPage /> */}
        {/* <UseMemoPage /> */}
        <UseCallbackPage />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
