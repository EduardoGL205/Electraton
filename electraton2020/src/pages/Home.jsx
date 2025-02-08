import { Link } from "react-router-dom";
import Form from "../components/Form";

const Home = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <h1>Escudería Borregos CCM</h1>
        </div>
        <nav className="navbar">
          <Link to="/">Inicio</Link>
          <Link to="/about">Quiénes Somos</Link>
          <Link to="/gallery">Galería</Link>
          <Link to="#sponsors">Patrocinadores</Link>
        </nav>
      </header>
      <h1>🚗 ¡Somos la Escudería Borregos CCM!</h1>
      <p>¿Quieres unirte al equipo? Rellena el formulario y nos contactaremos contigo vía correo institucional.</p>
      <Form />
    </div>
  );
};

export default Home;
