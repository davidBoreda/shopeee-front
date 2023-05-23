import { useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar/Navbar";

import useLogin from "./hooks/useLogin";
import Router from "./routes/router";
import { useSelector } from "react-redux";

const App = () => {
  const theme = useSelector((state) => state.themeStore.isDark);
  const loginFunc = useLogin();
  useEffect(() => {
    loginFunc();
  }, []);
  return (
    <div className="container">
      <ToastContainer />
      <header>
        <Navbar isDark={theme} />
      </header>
      <main className="mt-2">
        <Router />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
