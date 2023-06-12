import getSearchMovie from "@/lib/getSearchMovie";
import MovieSearchGridItem from "./components/MovieSearchGridList";
import SearchForm from "@/components/SearchForm";

type Params = {
  params: {
    search_query: string;
  };
};

export default async function MovieLists({ params: { search_query } }: Params) {
  const searchResults: Promise<MovieResponse> = getSearchMovie(search_query);
  const searchResult = await searchResults;

  return (
    <main className="mx-auto relative max-w-6xl py-6 px-3">
      <SearchForm />

      <h1 className="font-bold text-slate-400 text-2xl lg:text-4xl ">
        Search results for: {search_query}
      </h1>
      <h2 className="text-slate-500 mb-3">
        Found {searchResult.results.length} results...
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {searchResult.results.map((movie) => (
          <MovieSearchGridItem key={movie.id} movie={movie} />
        ))}
      </div>

      <button className="text-slate-300 ">Load more</button>
    </main>
  );
}
