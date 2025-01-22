"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("star");

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(
        `http://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
      );
      const data = await res.json();
      setMovies(data.Search || []);
    }
    fetchMovies();
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    const term = e.target.elements.search.value.trim();
    if (term) {
      setSearchTerm(term);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Catálogo de Filmes</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          name="search"
          placeholder="Digite o nome do filme"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Buscar
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="border p-2">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-64 object-cover"
            />
            <h2 className="text-lg font-bold">{movie.Title}</h2>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
