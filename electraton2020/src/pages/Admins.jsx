import { Link } from "react-router-dom";
import "../styles/global.css";

const Admins = () => {
  return (
    <div className="admins-page">
      <header className="header">
        <div className="logo">
          <h1>Escudería Borregos CCM</h1>
        </div>
        <nav className="navbar">
          <Link to="/">Inicio</Link>
          <Link to="/about">Quiénes Somos</Link>
          <Link to="/gallery">Galería</Link>
          <Link to="/sponsors">Patrocinadores</Link>
          <Link to="/admins">Admins</Link>
        </nav>
      </header>

      <main className="main-content">
        <h2>Administradores</h2>
        <p>Aquí se pueden gestionar las configuraciones y funciones administrativas del sistema.</p>
      </main>
    </div>
  );
};

export default Admins;
