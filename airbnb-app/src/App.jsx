import heroImg from "./assets/hero.png";
import AirLogo from "./assets//icons/Full-logo.svg";
import AirLogo1 from "./assets/icons/Logo.svg";
import Nav from "./components/Layout/NavBar/NavBar";
import Hotels from "./components/Others/Hotels";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <section id="center">
      <div className="hero bg-white">
        <Nav />
        <Hotels />
        <div className="h-[150vh] bg-amber-800"></div>
      </div>
    </section>
  );
}

export default App;
