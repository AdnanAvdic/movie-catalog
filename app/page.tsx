import MovieLists from "@/components/MovieLists";
import SearchForm from "@/components/SearchForm";
import getPopularMovies from "@/lib/getPopularMovies";
import getTopratedMovies from "@/lib/getTopratedMovies";
import getTrendingMovies from "@/lib/getTrendingMovies";
import getUpcomingMovies from "@/lib/getUpcomingMovies";
import Link from "next/link";

export default async function Home() {
  const trendingMovies: Promise<MovieResponse> = getTrendingMovies();
  const popularMovies: Promise<MovieResponse> = getPopularMovies();
  const upcomingMovies: Promise<MovieResponse> = getUpcomingMovies();
  const topratedMovies: Promise<MovieResponse> = getTopratedMovies();

  const [
    trendingMoviesRes,
    popularMoviesRes,
    upcomingMoviesRes,
    topratedMoviesRes,
  ] = await Promise.all([
    trendingMovies,
    popularMovies,
    upcomingMovies,
    topratedMovies,
  ]);

  return (
    <main className="p-3 relative mx-auto max-w-6xl">
      <SearchForm />

      <div className="flex flex-row justify-between items-center">
        <h4 className="text-slate-400 font-bold text-3xl">Trending movies</h4>

        <Link href="/lists/trending" className="cursor-pointer">
          <span className="text-slate-500 font-light text-xl hover:text-white transition-all">
            See all
          </span>
        </Link>
      </div>

      <div className="flex flex-row overflow-auto gap-4 items-center mt-6 pb-3">
        {trendingMoviesRes.results.map((movie, index) => (
          <MovieLists movie={movie} key={index} />
        ))}
      </div>

      <div className="flex flex-row justify-between items-center mt-6">
        <h4 className="text-slate-400 font-bold text-3xl">Popular movies</h4>
        <Link href="/lists/popular" className="cursor-pointer">
          <span className="text-slate-500 font-light text-xl hover:text-white transition-all">
            See all
          </span>
        </Link>
      </div>
      <div className="flex flex-row overflow-auto gap-4 items-center mt-6 pb-3">
        {popularMoviesRes.results.map((movie, index) => (
          <MovieLists movie={movie} key={index} />
        ))}
      </div>

      <div className="flex flex-row justify-between items-center mt-6">
        <h4 className="text-slate-400 font-bold text-3xl">Upcoming movies</h4>
        <Link href="lists/upcoming" className="cursor-pointer">
          <span className="text-slate-500 font-light text-xl hover:text-white transition-all">
            See all
          </span>
        </Link>
      </div>
      <div className="flex flex-row overflow-auto gap-4 items-center mt-6 pb-3">
        {upcomingMoviesRes.results.map((movie, index) => (
          <MovieLists movie={movie} key={index} />
        ))}
      </div>

      <div className="flex flex-row justify-between items-center mt-6">
        <h4 className="text-slate-400 font-bold text-3xl">Toprated movies</h4>
        <Link href="lists/toprated" className="cursor-pointer">
          <span className="text-slate-500 font-light text-xl hover:text-white transition-all">
            See all
          </span>
        </Link>
      </div>
      <div className="flex flex-row overflow-auto gap-4 items-center mt-6 pb-3">
        {topratedMoviesRes.results.map((movie, index) => (
          <MovieLists movie={movie} key={index} />
        ))}
      </div>
    </main>
  );
}
