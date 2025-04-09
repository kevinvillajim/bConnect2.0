import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Nosotros from "./views/Nosotros";
import Contacto from "./views/Contacto";
import Trabajo from "./views/Trabajo";
import Pantallas from "./views/Pantallas";
import Ciberseguridad from "./views/Ciberseguridad";
import Seguridad from "./views/Seguridad";
import Tecnologia from "./views/Tecnologia";
import "./App.css";

function App() {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <Router>
        <Routes>
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/nosotros"
            element={<Nosotros />}
          />
          <Route
            path="/contacto"
            element={<Contacto />}
          />
          <Route
            path="/trabajo"
            element={<Trabajo />}
          />
          <Route
            path="/pantallas"
            element={<Pantallas />}
          />
          <Route
            path="/ciberseguridad"
            element={<Ciberseguridad />}
          />
          <Route
            path="/seguridad-electronica"
            element={<Seguridad />}
          />
          <Route
            path="/tecnologia"
            element={<Tecnologia />}
          />
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </Router>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
