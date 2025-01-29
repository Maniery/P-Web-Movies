"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log("Pesquisar por:", e.target.value);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        🎬 P-Web Movies
      </Link>

      {/* Campo de pesquisa */}
      <input
        type="text"
        placeholder="Pesquisar filmes..."
        value={search}
        onChange={handleSearch}
        className="bg-gray-800 text-white p-2 rounded-md outline-none"
      />

      <ThemeToggle />
    </nav>
  );
}
