import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const useLogin = () => {
  const dispatch = useDispatch();
  return () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    axios
      .get("/client/getclientinfo")
      .then(({ data }) => {
        dispatch(authActions.login(data));
      })
      .catch((err) => {
        console.log("err", err.response.data);
      });
  };
};
export default useLogin;
