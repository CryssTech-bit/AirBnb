import "./App.css";
import NavBar from "./components/Layout/NavBar/NavBar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <section>
      <div className="hero bg-white">
        {/* <Nav /> */}
        <NavBar />
        <div className="h-[150vh]">
          <Home />
        </div>
      </div>
    </section>
  );
}

export default App;
