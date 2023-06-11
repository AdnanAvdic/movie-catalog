import React from "react";

export default async function getPopularMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  if (!res.ok) return undefined;
  return res.json();
}
