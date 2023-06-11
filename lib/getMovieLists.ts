import React from "react";

export default async function getMovieLists(movie_list: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${movie_list}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  if (!res.ok) return undefined;

  const data = res.json();

  return data;
}
