import { useContext, useEffect } from "react";
import { FavouriteContext } from "../FavouriteContext";
import MovieCard from "../componants/MovieCard";

function Favourites() {
  const { favouritesList, setFavourites } = useContext(FavouriteContext);

  useEffect(() => {
    localStorage.setItem("favouriteMovies", JSON.stringify(favouritesList));
  }, [favouritesList]);

  return (
    <>
      {favouritesList.map((fav) => (
        <div key={fav.id}>
          <MovieCard movie={fav} />
        </div>
      ))}
    </>
  );
}

export default Favourites;
