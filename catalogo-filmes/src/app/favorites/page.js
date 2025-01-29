"use client";

import { useState, useEffect } from "react";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Meus Favoritos</h1>
      {favorites.length === 0 ? (
        <p>Você ainda não favoritou nenhum filme.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {favorites.map((movie) => (
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
      )}
    </div>
  );
}
