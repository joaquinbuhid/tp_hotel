import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Hotel Sol</h1>
      <nav>
        <NavLink to="/about">Nosotros</NavLink>
        <NavLink to="/reservas">Reservas</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </header>
  );
}

export default Header;
