import { Link } from "react-router-dom";
import "../styles/global.css";

const Gallery = () => {

    const importAllImages = (r) => {
    return r.keys().map(r);
  };

  const images = importAllImages(
    require.context("/public/assets/gallery", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="gallery-page">
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

      <main className="main-content">
        <h2>Nuestra Galería</h2>
        <p>Explora algunos de los mejores momentos de la Escudería Borregos CCM.</p>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Foto ${index + 1}`} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Gallery;
