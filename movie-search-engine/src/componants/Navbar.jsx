import { Link } from "react-router-dom";

function NavBar({ search, setSearch }) {
  return (
    <>
      <nav>
        <div className="logo">
          <p>Movie Search Engine</p>
        </div>

        <input
          type="text"
          className="search-movies-input"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Search movies..."
        />

        <div className="links">
          <Link to="movies">Movies</Link>
          <Link to="favourites">Favourites</Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
