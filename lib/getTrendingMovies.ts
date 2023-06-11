import React from "react";

export default async function getTrendingMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const data = res.json();

  if (!res.ok) return undefined;

  return data;
}
