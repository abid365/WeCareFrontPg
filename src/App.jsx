import "./App.css";
import Navbar from "./shared/Navbar";
import Hero from "./Components/Hero/Hero";
import Stats from "./Components/Stats/Stats";

function App() {
  return (
    <div className="content">
      <Navbar></Navbar>
      <Hero style={{ position: "relative" }}></Hero>
      <Stats></Stats>
    </div>
  );
}

export default App;
