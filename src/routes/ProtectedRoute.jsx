import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ROUTES from "./routes";

const ProtectedRoute = ({ element }) => {
  const isLoggedIn = useSelector((state) => state.authStore.isLoggedIn);

  if (isLoggedIn) {
    return element;
  } else {
    return <Navigate to={ROUTES.HOME} replace />;
  }
};
export default ProtectedRoute;
