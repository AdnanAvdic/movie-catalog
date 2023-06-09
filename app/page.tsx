import TrendingMovies from "@/components/TrendingMovies";
import getTrendingMovies from "@/lib/getTrendingMovies";

export default async function Home() {
  const trendingMovies: Promise<MovieResponse> = getTrendingMovies();
  const trendingMoviesResults: Movie[] = (await trendingMovies).results;

  return (
    <main className="p-3 relative mx-auto max-w-6xl">
      <form className="mt-3 mb-6 ">
        <input
          type="text"
          className="w-full rounded-full h-12 bg-slate-900 px-6 text-white placeholder:text-slate-500"
          placeholder="Search your movie..."
        />
      </form>

      <h4 className="text-white font-bold text-3xl">Trending movies</h4>
      <div className="flex flex-row overflow-auto gap-4 items-center mt-6 pb-3">
        {trendingMoviesResults.map((movie, index) => (
          <TrendingMovies movie={movie} key={index} />
        ))}
      </div>
    </main>
  );
}
