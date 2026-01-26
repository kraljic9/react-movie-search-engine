import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();

  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovieData(url) {
      try {
        const response = await fetch(url);

        if (!response.ok) throw new Error("Failed to fetch movie data");

        const data = await response.json();

        const results = data.results;

        setMovieData(results);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieData(
      `https://api.themoviedb.org/3/movie/popular?api_key=6982f06948c4946d1b29bd29e9fcab06`,
    );

    return () => console.log("Stopped fetching movie data");
  }, []);

  return (
    <>
      <h1>Movie</h1>
      <p>Movie page</p>
    </>
  );
}

export default Movie;
