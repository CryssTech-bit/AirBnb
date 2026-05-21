import heroImg from "./assets/hero.png";
import AirLogo from "./assets/Full-logo.svg";
import AirLogo1 from "./assets/Logo.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <section id="center">
      <div className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        <img src={AirLogo1} className="framework" alt="Airbnb logo" />
        <img src={AirLogo} className="vite" alt="Vite logo" />
      </div>
    </section>
  );
}

export default App;
