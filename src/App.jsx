import { useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar/Navbar";

import useLogin from "./hooks/useLogin";
import Router from "./routes/router";

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
        <Router />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
