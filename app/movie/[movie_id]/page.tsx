import { baseUrl } from "@/constants/movieImageBaseUrl";
import getMovie from "@/lib/getMovie";
import Image from "next/image";
import React from "react";

type Params = {
  params: {
    movie_id: string;
  };
};

export default async function Movie({ params: { movie_id } }: Params) {
  const movieData: SingleMovie = await getMovie(movie_id);

  const formattedMovieReleaseDate = new Date(movieData.release_date);

  return (
    <section className="mx-auto max-w-6xl p-3">
      <div className="flex flex-col space-y-3">
        <h1 className="text-white font-bold text-3xl">{movieData.title}</h1>
        <div className="text-slate-400 font-light space-x-3">
          <span>{formattedMovieReleaseDate.getFullYear()}</span>
          <span>{movieData.runtime} minutes</span>
          <span>{movieData.original_language.toUpperCase()}</span>
        </div>

        <div className="relative w-full h-72 lg:h-96">
          <Image
            src={`${baseUrl}${movieData?.backdrop_path}`}
            alt={movieData.title}
            fill
            className="object-cover rounded-md"
          />
        </div>

        <div>
          <div className="flex flex-row gap-3 ">
            {movieData.genres.map((item) => (
              <span
                className="text-slate-500 lg:text-xl border-[1px] rounded-full px-3 py-1 border-slate-500 hover:border-slate-300 hover:text-slate-300 transition-all hover:select-none"
                key={item.id}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-3 items-center text-slate-200 font-light text-xl lg:text-2xl">
          <div className="flex flex-row items-center gap-2">
            <span>{movieData.vote_average.toFixed(1)}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[24px] h-[24px] text-yellow-400"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <span className="">{movieData.vote_count} votes</span>
        </div>

        <div className="text-white space-y-1">
          <h2 className=" font-bold text-2xl">Short summarie</h2>

          <p className="font-light">{movieData.overview}</p>
        </div>
      </div>
    </section>
  );
}
