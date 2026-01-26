function MovieCard({ movie }) {
  return (
    <div className="movie-container">
      <img src="" alt="" className="movie-img" />
      <div className="movie-wrapper">
        <button className="addToFavourites-btn">♡</button>
      </div>
      <div className="movie-info">
        <p className="movie-title">{movie.title}</p>
        <p className="movie-year">{movie.year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
