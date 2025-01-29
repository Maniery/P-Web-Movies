"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p className="text-white">Carregando...</p>;

  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-2xl font-bold">{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} className="mt-4 rounded-lg" />
      <p className="mt-2">{movie.Plot}</p>
    </div>
  );
}
