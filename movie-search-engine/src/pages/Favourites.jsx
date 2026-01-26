import { useContext } from "react";
import { FavouriteContext } from "../FavouriteContext";

function Favourites() {
  const { favouritesList, setFavourites } = useContext(FavouriteContext);

  console.log(favouritesList);

  return (
    <>
      <h1>Favourites page</h1>

      <p>No favourites yet...</p>
    </>
  );
}

export default Favourites;
