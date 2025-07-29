import { useContext } from "react";

import { ThemeContext } from "../Context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "0.5rem 1rem",
        margin: "1rem",
        cursor: "pointer",
        backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        border: "none",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      Cambiar a {theme === "light" ? "dark" : "ligth"}
    </button>
  );
}
