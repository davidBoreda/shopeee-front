import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>
        <HomePage />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
