import { useContext, useState } from "react";
import { FavouriteContext } from "../FavouriteContext";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const { favouritesList, setFavourites } = useContext(FavouriteContext);

  return (
    <div className="movie-container">
      <Link to={`/movies/${movie.id}`} className="Movie-link">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
          className="movie-img"
        />

        <div className="movie-info">
          <p className="movie-title">{movie.title}</p>
          <p className="movie-year">{movie.release_date}</p>
        </div>
      </Link>

      <div className="movie-wrapper">
        <button className="addToFavourites-btn">♡</button>
      </div>
    </div>
  );
}

export default MovieCard;
