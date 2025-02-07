import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/global.css";


const Form = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    semestre: "",
    matricula: "",
    carrera: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/postulacion", formData);
      navigate("/about");
    } catch (error) {
      console.error("Error al enviar la postulación", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Formulario de Postulación</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre completo" value={formData.nombre} onChange={handleChange} required />
        <input type="text" name="semestre" placeholder="Semestre" value={formData.semestre} onChange={handleChange} required />
        <input type="text" name="matricula" placeholder="Matrícula" value={formData.matricula} onChange={handleChange} required />
        <input type="text" name="carrera" placeholder="Carrera" value={formData.carrera} onChange={handleChange} required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
