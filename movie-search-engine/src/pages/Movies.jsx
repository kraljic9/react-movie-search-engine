import { useEffect, useState } from "react";
import MovieCard from "../componants/MovieCard";
import { Link } from "react-router-dom";

function Movies() {
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies(url) {
      try {
        const response = await fetch(url);

        if (!response.ok) throw new Error("Error accured while fetching data");

        const data = await response.json();

        setMoviesList(data.results);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies(
      "https://api.themoviedb.org/3/movie/popular?api_key=6982f06948c4946d1b29bd29e9fcab06",
    );

    return () => console.log("Stopped fetching data");
  }, []);

  return (
    <>
      <div className="movies-container">
        {moviesList.map((movie) => {
          return (
            <Link
              key={movie.id}
              className="movie-path"
              to={`/movies/${movie.id}`}
            >
              <MovieCard movie={movie} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Movies;
