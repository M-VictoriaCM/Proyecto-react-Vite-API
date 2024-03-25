import { get } from "../Utils/httpClients.js";
import { PeliculasCard } from "./PeliculasCard.jsx";
import { useState, useEffect } from "react";
import { Spinner } from "./Spinner.jsx";
import { useLocation } from "react-router-dom";//10. importar useLocation


export const PeliculasGrid = () => {
  //11. utiliZamos este hoock para tomar lo que vine por params
  const useQuery =()=>{
    return new URLSearchParams(useLocation().search);
  }
  //12. guardamos en una variable lo que se busca en el input
  const query= useQuery();
  const search = query.get("search");

  const [peliculas, setPeliculas] = useState([]);
  const [cargando, setCargando] =useState(true);



  useEffect(() => {
    //15. realizamos un ternario, si hay busqueda visita un enpoint, sino otro
    const searchURL = search ? "/search/movie?query="+search : "/discover/movie"
    
    setCargando(true)
    get(searchURL).then((data) => {
      setPeliculas(data.results);
      setCargando(false);
    });
  }, [search])//14. agrego search para que se actualice

  if(cargando){
    return <Spinner/>
  }
  ;

  return (
    <ul className="moviesGrid">
      {peliculas.map((pelicula) => (
        <PeliculasCard key={pelicula.id} pelicula={pelicula} />
      ))}
    </ul>
  );
};
