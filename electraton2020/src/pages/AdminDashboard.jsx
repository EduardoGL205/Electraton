import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

const AdminDashboard = () => {
  const raceDays = ["10 Febrero 2019", "15 Marzo 2019", "20 Abril 2019", "5 Mayo 2019"];

  const [selectedDay, setSelectedDay] = useState(raceDays[0]);

  const raceData = {
    "10 Febrero 2019": {
      realTimeData: "Velocidad actual: 120 km/h",
      maxSpeed: "130 km/h",
      minSpeed: "80 km/h",
      avgSpeed: "105 km/h",
      battery: "85%",
      laps: "23 vueltas",
      weather: "Soleado, 25°C",
      city: "Monterrey",
      car: "Borregos EV-2019",
      track: "Autódromo Monterrey",
      trackImage: "/assets/tracks/monterrey.jpg",
    },
    "15 Marzo 2019": {
      realTimeData: "Velocidad actual: 110 km/h",
      maxSpeed: "125 km/h",
      minSpeed: "75 km/h",
      avgSpeed: "100 km/h",
      battery: "78%",
      laps: "19 vueltas",
      weather: "Nublado, 20°C",
      city: "CDMX",
      car: "Borregos EV-2019",
      track: "Hermanos Rodríguez",
      trackImage: "/assets/tracks/cdmx.jpg",
    },
    "20 Abril 2019": {
      realTimeData: "Velocidad actual: 130 km/h",
      maxSpeed: "140 km/h",
      minSpeed: "85 km/h",
      avgSpeed: "115 km/h",
      battery: "90%",
      laps: "30 vueltas",
      weather: "Despejado, 27°C",
      city: "León",
      car: "Borregos EV-2019",
      track: "Autódromo León",
      trackImage: "/assets/tracks/leon.jpg",
    },
    "5 Mayo 2019": {
      realTimeData: "Velocidad actual: 100 km/h",
      maxSpeed: "120 km/h",
      minSpeed: "70 km/h",
      avgSpeed: "95 km/h",
      battery: "65%",
      laps: "15 vueltas",
      weather: "Lluvioso, 18°C",
      city: "Toluca",
      car: "Borregos EV-2019",
      track: "Autódromo Toluca",
      trackImage: "/assets/tracks/toluca.jpg",
    },
  };

  const data = raceData[selectedDay] || {
    realTimeData: "Datos no disponibles",
    maxSpeed: "N/A",
    minSpeed: "N/A",
    avgSpeed: "N/A",
    battery: "N/A",
    laps: "N/A",
    weather: "N/A",
    city: "N/A",
    car: "N/A",
    track: "N/A",
    trackImage: "/assets/tracks/default.jpg",
  };

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

      <main className="dashboard-content">
        <h2>Datos de la Carrera</h2>
        
        <div className="dropdown-container">
          <label>Selecciona el día de la carrera:</label>
          <select onChange={(e) => setSelectedDay(e.target.value)} value={selectedDay}>
            {raceDays.map((day) => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
        </div>

        <div className="data-container">
          <div className="data-card">
            <h3>Datos en Tiempo Real</h3>
            <p>{data.realTimeData}</p>
          </div>
          <div className="data-card">
            <h3>Velocidad</h3>
            <p>Máxima: {data.maxSpeed}</p>
            <p>Mínima: {data.minSpeed}</p>
            <p>Media: {data.avgSpeed}</p>
          </div>
          <div className="data-card">
            <h3>Batería</h3>
            <p>Carga: {data.battery}</p>
          </div>
          <div className="data-card">
            <h3>Vueltas</h3>
            <p>{data.laps}</p>
          </div>
          <div className="data-card">
            <h3>Ubicación y Clima</h3>
            <p>Ciudad: {data.city}</p>
            <p>Clima: {data.weather}</p>
          </div>
          <div className="data-card">
            <h3>Auto y Pista</h3>
            <p>Auto: {data.car}</p>
            <p>Pista: {data.track}</p>
          </div>
        </div>

        <div className="track-image-container">
          <h3>Imagen de la Pista</h3>
          <img src={data.trackImage} alt={`Imagen de ${data.track}`} className="track-image" />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
