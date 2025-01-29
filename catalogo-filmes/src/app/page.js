"use client";

import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("star");

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search || []));
  }, [searchTerm]); // Atualiza quando o usuário digitar algo novo

  return (
    <main className="container mx-auto p-4">
      {/* Campo de busca */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Buscar filmes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 rounded border border-gray-300 text-black"
        />
      </div>

      {/* Lista de filmes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </main>
  );
}
