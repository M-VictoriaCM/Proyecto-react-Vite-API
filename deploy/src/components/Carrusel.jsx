import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { get } from "../Utils/httpClients.js"; // Reemplaza "tu-api-request-library" con la biblioteca que estás utilizando para hacer solicitudes HTTP.
import RenderStars from "./RenderStarts.jsx";


const Carrusel = () => {
  const [peliculas,
    setPeliculas] = useState([]);

  const imgBaseUrl = "https://image.tmdb.org/t/p/original";
  const ordenarPorFecha = (data) => {
    // Ordenar las películas por fecha de lanzamiento de forma descendente
    const peliculasOrdenadas = data
      .results
      .sort((a, b) => {
        const dateA = new Date(a.release_date);
        const dateB = new Date(b.release_date);
        return dateB - dateA;
      });
    return peliculasOrdenadas;
  };
 

  useEffect(() => {
    get("/trending/movie/week?language=es").then((data) => {
      const peliculasOrdenadas = ordenarPorFecha(data);
      setPeliculas(peliculasOrdenadas);
    });
  }, []);
  

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        {peliculas.map((pelicula, index) => (
          <div
            key={pelicula.id}
            className={`carousel-item ${index === 0
            ? "active"
            : ""}`}>
            <Link to={`/pelicula/${pelicula.id}`}>
              <div className="carrusel movie-container">
                <div className="overlay"></div>
                <img
                  src={`${imgBaseUrl}${pelicula.backdrop_path}`}
                  alt={pelicula.title}
                  className="d-block w-100 movie-image"/>
                <div className="movie-title">
                  <h1 className="title">{pelicula.title}</h1>
               <RenderStars vote_average={pelicula.vote_average} />
               <p>Fecha de Lanzamiento: {pelicula.release_date}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrusel;
