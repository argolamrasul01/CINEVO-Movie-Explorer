import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Clapperboard } from "lucide-react";
export default function MovieListingPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const searchingMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-infinity loading-xl w-16"></span>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <div className="flex justify-between items-center mx-6 my-5 ">
          <div>
            <h1 className="text-2xl font-bold text-base-content">Movies</h1>
          </div>
          <div>
            <label className="input w-82.5">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                required
                placeholder="Search movies & shows..."
              />
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {searchingMovies.length > 0 ? (
            searchingMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <div className="col-span-full flex flex-col gap-3.5 justify-center items-center py-20 shadow-2xl min-h-100 mx-9 my-9">
              <h2 className="text-2xl font-bold text-gray-500 flex gap-2 items-center">
                <Clapperboard /> Oops! No movies found
              </h2>
              <p className="text-yellow-200">
                We couldn't find anything matching your search.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
