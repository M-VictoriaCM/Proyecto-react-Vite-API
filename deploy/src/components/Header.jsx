import {Link} from "react-router-dom"
import {BotonPersonalizado} from "./BotonPersonalizado";

export const Header = () => {

  return (
    <div className="header">
      <nav class="navbar fixed-top navbar-expand-lg menu-custom">
        <div class="container-fluid">
          <Link class="navbar-brand navbar-custom" to={"/"}>
            <img src="/img/icons8-claqueta-de-cine-50.png" class="logo" alt="film"/>
            <h1 class="name_site">FlashFilm</h1>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Películas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">¿Quíenes Somos?</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  )
}
export default Header