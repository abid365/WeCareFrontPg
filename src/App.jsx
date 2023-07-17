import "./App.css";
import Navbar from "./shared/Navbar";
import Hero from "./Components/Hero/Hero";
import Stats from "./Components/Stats/Stats";

function App() {
  return (
    <div className="content">
      <Navbar></Navbar>
      <div className="hero">
        <Hero></Hero>
      </div>
      <div className="stats">
        <Stats></Stats>
      </div>
    </div>
  );
}

export default App;
