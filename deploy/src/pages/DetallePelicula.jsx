import { get } from "../Utils/httpClients";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner }  from "../components/Spinner"
import "./DetallePelicula.css";

export const DetallePelicula=()=>{
    const [pelicula, setPelicula] = useState(null);
    const [cargando, setCargando] = useState(true);

    const {peliculaId} =useParams()

    useEffect(()=>{
        setCargando(true);
        get(`/movie/${peliculaId}?language=es`).then((data)=>{
            setPelicula(data);
            setCargando(false);
        })
    }, [peliculaId])
    if(cargando){
        return < Spinner />
    }

    if(!pelicula){
        return null;
    }
    const URL_IMG = `https://image.tmdb.org/t/p/original${pelicula.poster_path}`
   
    return(
        <div className="contenedorDetalle">
            <img src={URL_IMG} alt={pelicula.title} className="col" />
            
            <div className="peliculaDetalle col">
                <p className="item">
                    <strong>titulo:</strong>
                    {pelicula.title}
                </p>
                <p>
            <strong>Generos:</strong>
                {pelicula.genres.map((genre)=>genre.name).join(", ")}
            </p>
                <p><strong>Descripcion:</strong>
                    {pelicula.overview}
                </p>
                
            </div>
        </div>
    )

}