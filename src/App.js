import "./App.css";
import { useState, React, useEffect } from "react";
import mk from "./Assets/Images/circus-monkey-svgrepo-com.svg";
import { NavLink as Link, Routes, Route, useNavigate } from "react-router-dom";
import About from "./pages/About";
import Experience from "./pages/Experience";
import useLocalStorage from "use-local-storage";
function App() {
  const [active, setActive] = useState(1);
  const ThemePrefered = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    ThemePrefered ? "dark" : "light"
  );
  

  const swithTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const activeStatus = (x) => {
    setActive(x);
    console.log("click");
  };
  return (
    <div className="App" data-theme={theme}>
      <div className="Navigation">
        <div className="header-center">
          <div class="Logo">{/* <h6>R</h6> */}</div>
          <div class="Navigation-links">
            <Link
              className={`Active ${active === 1 ? " act" : ""}`}
              onClick={() => {
                activeStatus(1);
              }}
              to="/"
            >
              About
            </Link>
            <Link
              className={`Active ${active === 2 ? " act" : ""}`}
              onClick={() => {
                activeStatus(2);
              }}
              to="/experience"
            >
              Education&Experiece
            </Link>
            <Link
              className={`Active ${active === 3 ? " act" : ""}`}
              onClick={() => {
                activeStatus(3);
              }}
              to="/projects"
            >
              Projects
            </Link>
            <Link
              className={`Active ${active === 4 ? " act" : ""}`}
              onClick={() => {
                activeStatus(4);
              }}
              to="/contact"
            >
              Contat Me
            </Link>
          </div>
          <div className="darMode">
            {theme === "light" ? (
              <i
                className="fas fa-sun"
                onClick={swithTheme}
                data-toggle="tooltip"
                title="too much sun"
              ></i>
            ) : (
              <i
                className="fas fa-moon"
                data-toggle="tooltip"
                title="get vitamin D"
                onClick={swithTheme}
              ></i>
            )}
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<About animate={true} />} />
        <Route path="/experience" element={<Experience animate={true} />} />
        <Route path="experience" element={<h1></h1>} />
      </Routes>
    </div>
  );
}

export default App;
