"use client";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className="p-2 bg-gray-500 text-white rounded"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "🌞 Claro" : "🌙 Escuro"}
    </button>
  );
}
