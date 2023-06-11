"use client";

import { useEffect, useState } from "react";
import MovieListGridItem from "./components/MovieListGridItem";
import InfiniteScroll from "react-infinite-scroll-component";
import getMovieLists from "@/lib/getMovieLists";

type Params = {
  params: {
    movie_list: string;
  };
};

export default async function MovieLists({ params: { movie_list } }: Params) {
  const formatMovieList = (): string => {
    if (movie_list === "trending") {
      return "trending/movie/week";
    } else if (movie_list === "popular") {
      return "movie/popular";
    } else if (movie_list === "toprated") {
      return "movie/top_rated";
    } else if (movie_list === "upcoming") {
      return "movie/upcoming";
    }
    return "/";
  };

  const movieLists: Promise<MovieResponse> = getMovieLists(formatMovieList());
  const movieList = await movieLists;

  return (
    <main className="mx-auto relative max-w-6xl py-6 px-3">
      <h1 className="font-bold text-slate-400 text-2xl lg:text-4xl mb-6">
        {movie_list.toUpperCase()} movies
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {movieList.results.map((movie) => (
          <MovieListGridItem key={movie.id} movie={movie} />
        ))}
      </div>

      <button className="text-slate-300 ">Load more</button>
    </main>
  );
}
