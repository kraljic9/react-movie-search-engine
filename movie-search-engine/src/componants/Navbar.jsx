function NavBar() {
  return (
    <>
      <nav>
        <div className="logo">
          <p>Movie Search Engine</p>
        </div>

        <input type="text" className="search-movies-input" />

        <div className="links">
          <Link to="home">Home</Link>
          <Link to="favourites">Favourites</Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
