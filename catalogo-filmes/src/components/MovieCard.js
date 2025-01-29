"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-white">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-72 object-cover rounded-md" />
      <h3 className="text-lg font-bold mt-2">{movie.Title}</h3>
      <div className="flex justify-between mt-3">
        <button onClick={() => router.push(`/movie/${movie.imdbID}`)} className="bg-blue-500 px-4 py-2 rounded">
          Detalhes
        </button>
        <button onClick={toggleFavorite} className={`${isFavorite ? "bg-red-500" : "bg-gray-500"} px-4 py-2 rounded`}>
          {isFavorite ? "★ Favorito" : "☆ Favoritar"}
        </button>
      </div>
    </div>
  );
}
