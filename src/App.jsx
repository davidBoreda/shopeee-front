import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import RegisterPage from "./pages/RegisterPage";
import LifeCycleHooksPage from "./pages/LifeCycleHooksPage";
import UseMemoPage from "./pages/UseMemoPage";
import UseCallbackPage from "./pages/UseCallbackPage";
import Page404 from "./pages/Page404";
import AboutUs from "./pages/AboutUs";
import ContactUsPage from "./pages/ContactUsPage";
import LoginPage from "./pages/LoginPage";
// import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <div className="container">
      <header>
        <Navbar isDark={true} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registerpage" element={<RegisterPage />} />
          <Route path="loginpage" element={<LoginPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactuspage" element={<ContactUsPage />} />
          <Route path="/lifecyclehookspage" element={<LifeCycleHooksPage />} />
          <Route path="/usecallbacpkage" element={<UseCallbackPage />} />
          <Route path="/usememopage" element={<UseMemoPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
