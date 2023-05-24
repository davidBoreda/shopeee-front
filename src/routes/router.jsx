import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";

import RegisterPage from "../pages/RegisterPage";

import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import AboutUs from "../pages/AboutUs";
import ContactUsPage from "../pages/ContactUsPage";

import Page404 from "../pages/Page404";
import EditCardPage from "../pages/EditCardPage";
import ProtectedRoute from "./ProtectedRoute";
import SearchedBrand from "../pages/SearchedBrand";
import AddProductPage from "../pages/AddProductPage";
import AdminProtectedRoute from "./AdminProtectedRoute";
import ROUTES from "./routes";
import AddNewClient from "../pages/AddNewClient";
import FavoritePage from "../pages/FavoritePage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />

      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route
        path={ROUTES.PROFILE}
        element={<ProtectedRoute element={<ProfilePage />} />}
      />
      <Route
        path={ROUTES.FAVORITES}
        element={<ProtectedRoute element={<FavoritePage />} />}
      />
      <Route path={ROUTES.SEARCHBRAND} element={<SearchedBrand />} />
      <Route path={ROUTES.EDITPRODUCT} element={<EditCardPage />} />
      <Route path={ROUTES.ABOUTUS} element={<AboutUs />} />
      <Route path={ROUTES.CONTACT} element={<ContactUsPage />} />
      <Route
        path={ROUTES.ADDPRODUCT}
        element={<AdminProtectedRoute element={<AddProductPage />} />}
      />
      <Route
        path={ROUTES.ADDCLIENT}
        element={<AdminProtectedRoute element={<AddNewClient />} />}
      />
      <Route path={ROUTES.PAGE404} element={<Page404 />} />
    </Routes>
  );
};

export default Router;
