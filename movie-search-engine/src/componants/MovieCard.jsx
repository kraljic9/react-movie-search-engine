function MovieCard({ movie }) {
  return (
    <div className="movie-container">
      <img src="" alt="" className="movie-img" />
      <div className="movie-wrapper">
        <button className="addToFavourites-btn">♡</button>
      </div>
      <div className="movie-info">
        <p className="movie-title">Movie Title</p>
        <p className="movie-year">Movie Year</p>
      </div>
    </div>
  );
}
