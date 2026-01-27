import { useState } from "react";
import { FavouriteContext } from "./FavouriteContext";

function ContextProvider({ children }) {
  const [favouritesList, setFavourites] = useState([]);

  function toggleFavourites(movie) {
    setFavourites((prev) =>
      prev.some((fav) => fav.id === movie.id)
        ? prev.filter((p) => p.id !== movie.id)
        : [...prev, movie],
    );
  }

  return (
    <>
      <FavouriteContext.Provider value={{ favouritesList, toggleFavourites }}>
        {children}
      </FavouriteContext.Provider>
    </>
  );
}

export default ContextProvider;
