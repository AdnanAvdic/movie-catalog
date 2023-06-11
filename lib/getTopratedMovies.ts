import React from "react";

export default async function getTopratedMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = res.json();

  if (!res.ok) return undefined;

  return data;
}
