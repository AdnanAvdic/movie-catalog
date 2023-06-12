import React from "react";

export default async function getSearchMovie(search_query: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${search_query}`
  );

  if (!res.ok) return undefined;

  return res.json();
}
