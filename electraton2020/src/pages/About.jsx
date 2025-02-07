import "../styles/global.css";
const About = () => {
  return (
    <div className="about-page">
      <header className="header">
        <div className="logo">
          <h1>Escudería Borregos CCM</h1>
        </div>
        <nav className="navbar">
          <a href="/">Inicio</a>
          <a href="#about">Quiénes Somos</a>
          <a href="#gallery">Galería</a>
          <a href="#sponsors">Patrocinadores</a>
        </nav>
      </header>

      <main className="main-content">
        <section className="about-section">
          <h2>Quiénes Somos</h2>
          <p>
            La Escudería Borregos CCM es un equipo apasionado por el automovilismo y la innovación tecnológica. Nos
            dedicamos a diseñar, construir y competir con vehículos eléctricos de alto rendimiento, promoviendo el
            aprendizaje práctico y el trabajo en equipo.
          </p>
        </section>

        <section className="highlight-section">
          <h3>¿Qué es Formula Student?</h3>
          <p>
            Formula Student (FS) es la competencia educativa más destacada de automovilismo, diseñada para inspirar y
            desarrollar a jóvenes ingenieros innovadores. Universidades de todo el mundo participan para diseñar y
            construir autos de carreras eléctricos de un solo asiento y competir en eventos estáticos y dinámicos.
          </p>
          <div className="image-container">
            <img
              src="https://via.placeholder.com/800x400"
              alt="Equipo compitiendo"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
