import { useState } from "react";
import { FavouriteContext } from "./FavouriteContext";

function ContextProvider({ children }) {
  const [favouritesList, setFavourites] = useState([]);

  return (
    <>
      <FavouriteContext.Provider value={{ favouritesList, setFavourites }}>
        {children}
      </FavouriteContext.Provider>
    </>
  );
}

export default ContextProvider;
