import logo from "../assets/airbnb-logo.png";

export function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img className="navbar__logo" src={logo} alt="airbnb logo" />
      </nav>
    </>
  );
}
