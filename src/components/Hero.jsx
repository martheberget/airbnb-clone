import img from "../assets/photo-grid.png";

export function Hero() {
  return (
    <>
      <section className="hero">
        <img className="hero__img" src={img} alt="photo grid" />
        <h1 className="hero__title">Online Experiences</h1>
        <p className="hero__description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </section>
    </>
  );
}
