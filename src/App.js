import "./App.css";
import { useState, React } from "react";
import mk from "./Assets/Images/circus-monkey-svgrepo-com.svg";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import About from "./pages/About";
import Experience from "./pages/Experience";
import useLocalStorage from "use-local-storage";

function App() {
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
  return (
    <div className="App" data-theme={theme}>
      <div className="Navigation">
        <div className="header-center">
          <div class="Logo">
            <img src={mk} alt="mylogo" className="mk"></img>
          </div>
          <div class="Navigation-links">
            <Link to="/">About</Link>
            <Link to="/experience">Education&Experiece</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contat Me</Link>
            <button onClick={swithTheme}>
              Switch to{theme === "light" ? "dark" : "light"}
            </button>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<About animate={true} />} />
        <Route path="/experience" element={<Experience animate={true} />} />
      </Routes>
    </div>
  );
}

export default App;
