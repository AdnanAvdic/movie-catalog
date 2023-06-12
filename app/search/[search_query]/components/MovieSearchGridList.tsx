import { baseUrl } from "@/constants/movieImageBaseUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  movie: Movie;
};

export default function MovieSearchGridItem({ movie }: Props) {
  return (
    <article className="text-slate-300  hover:scale-95 transition-all relative cursor-pointer">
      <Link href={`movie/${movie.id}`}>
        <div className="relative h-[340px] w-[100%]">
          <Image
            src={`${baseUrl}${movie?.poster_path}`}
            alt={movie.title}
            fill
            className="object-cover rounded-md"
          />
        </div>

        <div
          className="absolute top-1 left-1 px-2 py-1 text-[15px] font-bold 
        bg-white/60 text-black rounded-md flex flex-row gap-3 items-center"
        >
          <span>{movie.vote_average.toFixed(1)}</span>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[17px] h-[17px] text-black"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-md mt-2">{movie.title}</h2>
      </Link>
    </article>
  );
}
