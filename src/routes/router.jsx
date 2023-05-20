import { Route, Routes } from "react-router-dom";
import ReduxPage from "../pages/ReduxPage";
import ReduxPage2 from "../pages/ReduxPage2";
import ReduxPage3 from "../pages/ReduxPage3";
import HomePage from "../pages/HomePage";
import StaticHomePage from "../pages/StaticHomePage";
import RegisterPage from "../pages/RegisterPage";
import RegisterPageExplanation from "../pages/RegisterPageExplanation";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import AboutUs from "../pages/AboutUs";
import ContactUsPage from "../pages/ContactUsPage";
import LifeCycleHooksPage from "../pages/LifeCycleHooksPage";
import UseCallbackPage from "../pages/UseCallbackPage";
import UseMemoPage from "../pages/UseMemoPage";
import ItemPage from "../pages/ItemPage";
import Page404 from "../pages/Page404";
import ProtectedRoute from "./ProtectedRoute";
import ROUTES from "./routes";

const Router = () => {
  return (
    <Routes>
      <Route path="/redux" element={<ReduxPage />} />
      <Route path="/redux2" element={<ReduxPage2 />} />
      <Route path="/redux3" element={<ReduxPage3 />} />
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path="/statichomepage" element={<StaticHomePage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route
        path="/registerpageexplanation"
        element={<RegisterPageExplanation />}
      />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route
        path={ROUTES.PROFILE}
        element={<ProtectedRoute element={<ProfilePage />} />}
      />
      <Route path={ROUTES.ABOUTUS} element={<AboutUs />} />
      <Route path={ROUTES.CONTACT} element={<ContactUsPage />} />
      <Route path="/lifecyclehookspage" element={<LifeCycleHooksPage />} />
      <Route path="/usecallbacpkage" element={<UseCallbackPage />} />
      <Route path="/usememopage" element={<UseMemoPage />} />
      <Route path={ROUTES.ITEMPAGE} element={<ItemPage />} />
      <Route path={ROUTES.PAGE404} element={<Page404 />} />
    </Routes>
  );
};

export default Router;
