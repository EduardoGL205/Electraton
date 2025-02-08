import { Link } from "react-router-dom";
import "../styles/global.css";

const Gallery = () => {
  // Lista de imágenes referenciadas desde la carpeta public/assets/gallery
  const images = [
    "/assets/gallery/1.jpg",
    "/assets/gallery/2.jpeg",
    "/assets/gallery/3.jpeg",
  ];

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
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Foto ${index + 1}`} />
              </div>
            ))
          ) : (
            <p>No hay imágenes disponibles en la galería.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Gallery;
