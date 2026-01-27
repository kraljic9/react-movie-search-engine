import { Link, NavLink } from "react-router-dom";

function NavBar({ search, setSearch }) {
  return (
    <>
      <nav className="nav-bar">
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
          <NavLink
            to="movies"
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
          >
            Movies
          </NavLink>
          <NavLink
            to="favourites"
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
          >
            Favourites
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
