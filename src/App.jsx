import "./App.css";
import NavBar from "./components/Layout/NavBar/NavBar";

function App() {
  return (
    <section id="center">
      <div className="hero bg-white">
        {/* <Nav /> */}
        <NavBar />
        <div className="h-[150vh] bg-amber-800"></div>
      </div>
    </section>
  );
}

export default App;
