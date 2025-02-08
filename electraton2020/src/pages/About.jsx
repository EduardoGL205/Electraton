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
            Somos un equipo multidisciplinario compuesto por estudiantes de diversas carreras y semestres, unidos por la
            pasión por el automovilismo, la tecnología y la innovación. La Escudería Borregos CCM reúne talentos de
            áreas como ingeniería mecánica, ingeniería electrónica, diseño industrial, mercadotecnia y administración,
            entre otras.
          </p>
          <p>
            Cada miembro del equipo aporta habilidades únicas que contribuyen al diseño, construcción y competición de
            nuestros vehículos eléctricos de alto rendimiento. Nuestra diversidad nos permite enfrentar los desafíos con
            creatividad, trabajo en equipo y un enfoque integral, fortaleciendo nuestro compromiso con la excelencia y
            la sostenibilidad.
          </p>
        </section>

        <section className="highlight-section">
          <h3>Mexico's Prime Electric-Car Championship</h3>
          <p>
            Desde 1995 inició una carrera al futuro, en el que la inventiva y creatividad convergieron en un proyecto
            que hoy sigue siendo el único serial de carreras de autos eléctricos en México. Donde los autos son
            diseñados, construidos y competidos por escuderías tanto universitarias como privadas.
          </p>
          <p>
            Nosotros, como Escudería Borregos CCM, tenemos el honor de participar activamente en este campeonato,
            demostrando nuestro compromiso, esfuerzo y habilidades en cada competencia. Nos preparamos para participar
            en 5 carreras al año, en las que competimos en circuitos de velocidad que van desde 400 hasta 800 metros, en
            ciudades como Monterrey, Toluca, Cuautla, León y CDMX.
          </p>
          <p>
            Cada carrera es una oportunidad para mostrar el talento de nuestro equipo y nuestra pasión por el desarrollo
            de tecnologías limpias y sostenibles. ¡Conócenos y apóyanos en esta emocionante aventura!
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
