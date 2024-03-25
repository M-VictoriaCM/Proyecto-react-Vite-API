import { Link } from "react-router-dom";
import RenderStars from "./RenderStarts";

export const PeliculasCard = ({ pelicula }) => {
  const imgURL = `https://image.tmdb.org/t/p/original${pelicula.poster_path}`;
  return (
    <div className="card">
      <Link
        to={{ pathname: `/pelicula/${pelicula.id}`, search: "?language=es" }}
      >
        <div className="container_card">
          <div className="overlay_peliculas"></div>
          <img className="card-img-top" src={imgURL} alt={pelicula.title} />
          <div className="card__title">
            <div className="card_vote">
              <div className="vote">
                <h6 className="card-title">{pelicula.original_title}</h6>
                <RenderStars vote_average={pelicula.vote_average} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
