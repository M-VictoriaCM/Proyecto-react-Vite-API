import {FaSearch} from "react-icons/fa";
import {useState} from "react"; //3. importo el useState
import {useNavigate} from "react-router-dom"; //7. importo useNavigate
import { BotonPersonalizado } from "./BotonPersonalizado";


export const Buscador = () => {
  //4. manejamos el estado del input
  const [searchText,
    setSearchText] = useState("");
  //realizar la funcion que se ejecuta con el submit
  const navigate = useNavigate(); //8. utilizo la variable navigate

  const handleSubmit = (e) => {
    e.preventDefault() //nostramos que no se hace el submit
    navigate(`/?search=${searchText}`); //9. cuando se ejecuta el evento enviamos a la url que estamos buscando
  };

  return (
    <form className="d-flex" role="search" onSubmit={handleSubmit}>
      {" "}
      {/*agrego la funcion al form*/}
      <div className="input-group mb-3">
        <span className="input-group-text input" id="basic-addon1"><FaSearch className="lupa"/></span>

        <input value={searchText} //5. pasamos el valor
          onChange={(e) => setSearchText(e.target.value)} //6.actualizamos el valor
          type="search" placeholder="Search" aria-label="Search" className="form-control me-2"/>
      </div>

      <BotonPersonalizado
      texto="Buscar"/>
    </form>
  );
};
