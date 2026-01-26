import { useState } from "react";

function Movies() {
  const [moviesList, setMoviesList] = useState([
    { id: 1, title: "The Matrix", year: 1999 },
    { id: 2, title: "Inception", year: 2010 },
    { id: 3, title: "Interstellar", year: 2014 },
    { id: 4, title: "The Dark Knight", year: 2008 },
    { id: 5, title: "Fight Club", year: 1999 },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <>
      <h1>Home Page</h1>
    </>
  );
}

export default Movies;
