import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import StaticHomePage from "./pages/StaticHomePage";
import Navbar from "./components/Navbar/Navbar";
import RegisterPageExplanation from "./pages/RegisterPageExplanation";
import LifeCycleHooksPage from "./pages/LifeCycleHooksPage";
import UseMemoPage from "./pages/UseMemoPage";
import UseCallbackPage from "./pages/UseCallbackPage";
import Page404 from "./pages/Page404";
import AboutUs from "./pages/AboutUs";
import ContactUsPage from "./pages/ContactUsPage";
import LoginPage from "./pages/LoginPage";
import ItemPage from "./pages/ItemPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import ReduxPage2 from "./pages/ReduxPage2";
import ReduxPage from "./pages/ReduxPage";
import ReduxPage3 from "./pages/ReduxPage3";
import useLogin from "./hooks/useLogin";

const App = () => {
  const loginFunc = useLogin();
  useEffect(() => {
    loginFunc();
  }, []);
  return (
    <div className="container">
      <ToastContainer />
      <header>
        <Navbar isDark={true} />
      </header>
      <main className="mt-2">
        <Routes>
          <Route path="/redux" element={<ReduxPage />} />
          <Route path="/redux2" element={<ReduxPage2 />} />
          <Route path="/redux3" element={<ReduxPage3 />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/statichomepage" element={<StaticHomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/registerpageexplanation"
            element={<RegisterPageExplanation />}
          />
          <Route path="loginpage" element={<LoginPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactuspage" element={<ContactUsPage />} />
          <Route path="/lifecyclehookspage" element={<LifeCycleHooksPage />} />
          <Route path="/usecallbacpkage" element={<UseCallbackPage />} />
          <Route path="/usememopage" element={<UseMemoPage />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
