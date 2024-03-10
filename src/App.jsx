import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";
import img from "./assets/katie-zaferes.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      {/*<Hero/>*/}
      <Card
        img={img}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </>
  );
}

export default App;
