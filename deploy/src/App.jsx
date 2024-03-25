/*import { LandingPage } from "./pages/LandingPage"*/
import { Home } from "./pages/Home"
import Header from "./components/Header";
import { DetallePelicula } from "./pages/DetallePelicula";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Link to="/">
          <h1 className="title">Pelicúlas</h1>
        </Link>
      </Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pelicula/:peliculaId" element={<DetallePelicula/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
