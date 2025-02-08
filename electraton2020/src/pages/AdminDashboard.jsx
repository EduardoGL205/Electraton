import { Link } from "react-router-dom";
import "../styles/global.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <header className="header">
        <div className="logo">
          <h1>Panel de Administración</h1>
        </div>
        <nav className="navbar">
          <Link to="/">Inicio</Link>
          <Link to="/about">Quiénes Somos</Link>
          <Link to="/gallery">Galería</Link>
          <Link to="#sponsors">Patrocinadores</Link>
          <Link to="/admins">Admins</Link>
        </nav>
      </header>

      <main className="main-content">
        <h2>Bienvenido al Panel de Administración</h2>
        <p>Aquí puedes gestionar la configuración y el contenido del sitio.</p>
      </main>
    </div>
  );
};

export default AdminDashboard;
