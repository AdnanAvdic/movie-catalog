import React from "react";

export default async function getMovie(movie_id: string) {
  const res = await fetch(
    `
    https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const data = res.json();

  if (!res.ok) return undefined;

  return data;
}
