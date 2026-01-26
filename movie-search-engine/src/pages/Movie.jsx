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

        const results = data;

        console.log(results);

        setMovieData(results);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieData(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6982f06948c4946d1b29bd29e9fcab06`,
    );

    return () => {
      console.log("Stopped fetching movie data");
      console.log("Componant umounted");
    };
  }, [id]);
  function renderGenres() {
    return movieData?.genres?.map((genre) => (
      <span key={genre.id}>{genre.name}</span>
    ));
  }

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error accured {error}</h1>;

  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`}
        alt={movieData?.title}
      />

      <h1>{movieData?.title}</h1>
      <p>{movieData?.overview}</p>
      <p>{movieData?.release_date}</p>
      <p>{movieData?.popularity} views</p>

      <div>{renderGenres()}</div>
    </>
  );
}

export default Movie;
