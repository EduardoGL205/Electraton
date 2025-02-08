import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";

const Admins = () => {
  const navigate = useNavigate();


  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");


  const adminUser = "BorregosCCM2019";
  const adminPassword = "ElectratonBorregos";


  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username === adminUser && credentials.password === adminPassword) {
      navigate("/admin-dashboard"); 
    } else {
      setError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div className="login-page">
      <header className="header">
        <div className="logo">
          <h1>Escudería Borregos CCM</h1>
        </div>
      </header>

      <main className="login-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Usuario"
            value={credentials.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Ingresar</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </main>
    </div>
  );
};

export default Admins;
