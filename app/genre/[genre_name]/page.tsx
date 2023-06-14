import getPopularMovies from "@/lib/getPopularMovies";
import GenreMovieGridItem from "./components/GenreMovieGridItem";

type Params = {
  params: {
    genre_name: string;
  };
};

export default async function MovieLists({ params: { genre_name } }: Params) {
  const genreLists: Promise<MovieResponse> = getPopularMovies();
  const genreList = await genreLists;

  function getGenre(genreNames: string): number {
    switch (genreNames) {
      case "action":
        return 28;
      case "adventure":
        return 12;
      case "animation":
        return 16;
      case "comedy":
        return 35;
      case "crime":
        return 80;
      case "documentary":
        return 99;
      case "drama":
        return 18;
      case "family":
        return 10751;
      case "fantasy":
        return 14;
      case "history":
        return 36;
      case "horror":
        return 27;
      case "music":
        return 10402;
      case "mystery":
        return 9648;
      case "science-fiction":
        return 878;
      case "tv-movie":
        return 10770;
      case "thriller":
        return 53;
      case "war":
        return 10752;
      case "western":
        return 37;
      default:
        return 28;
    }
  }

  let genreName = getGenre(genre_name);

  const filterGenreList = genreList.results.filter((item) =>
    item.genre_ids.includes(genreName)
  );

  return (
    <main className="mx-auto relative max-w-6xl py-6 px-3">
      <h1 className="font-bold text-slate-400 text-2xl lg:text-4xl mb-6">
        Movies in searched genre
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {filterGenreList.map((movie) => (
          <GenreMovieGridItem key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
