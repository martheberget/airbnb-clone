import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const cards = data.map((card) => {
    return (
      <Card
        key={card.id}
        card={card}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards__list">{cards}</section>
    </>
  );
}

export default App;
