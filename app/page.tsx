import { baseUrl } from "@/constants/movieImageBaseUrl";
import getTrendingMovies from "@/lib/getTrendingMovies";
import Image from "next/image";

export default async function Home() {
  const trendingMovies: Promise<MovieResponse> = getTrendingMovies();
  const trendingMoviesResults: Movie[] = (await trendingMovies).results;

  return (
    <main className="p-3 w-full relative mx-auto max-w-6xl">
      <form className="mt-3 mb-6 ">
        <input
          type="text"
          className="w-full rounded-full h-12 bg-slate-900 px-6 text-white placeholder:text-slate-500"
          placeholder="Search your movie..."
        />
      </form>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
        {trendingMoviesResults?.map((movie) => (
          <article
            className="text-white flex flex-col justify-center bg-slate-900 
          rounded-md cursor-pointer "
          >
            <div>
              <Image
                src={`${baseUrl}${movie?.poster_path || movie?.backdrop_path}`}
                alt="Image not available"
                width={1000}
                height={1000}
                className="object-cover rounded-t-md"
              />
            </div>

            <h4 className="text-left truncate pt-3 pb-1 px-3 font-semibold text-md  lg:text-lg">
              {movie.title}
            </h4>

            <div className="p-3 font-normal text-sm md:text-[16px] space-y-1">
              <h5 className="flex flex-row justify-between items-center">
                <span>Release date:</span>
                <span>{movie.release_date}</span>
              </h5>
              <h5 className="flex flex-row justify-between items-center">
                <span>Popularity:</span>
                <span>{movie.popularity}</span>
              </h5>
            </div>

            <button
              className="text-white bg-slate-800 rounded-md mx-3 my-3 py-2 md:py-3 
            text-sm md:text-[17px] font-medium hover:scale-95 transition-all"
            >
              See Details
            </button>
          </article>
        ))}
      </div>
    </main>
  );
}
