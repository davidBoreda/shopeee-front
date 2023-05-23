import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ROUTES from "./routes";

const AdminProtectedRoute = ({ element }) => {
  const clientInfo = useSelector((state) => state.authStore.clientInfo);
  if (clientInfo.isAdmin) {
    return element;
  } else {
    return <Navigate to={ROUTES.HOME} replace />;
  }
};
export default AdminProtectedRoute;
