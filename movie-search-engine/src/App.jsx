import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Movies from "./pages/Movies";
import Favourites from "./pages/Favourites";
import NotFound from "./NotFound";
import Movie from "./pages/Movie";
import ContextProvider from "./ContextProvider";
import MovieCard from "./componants/MovieCard";

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <p className="default-main-content">
                    Welcome and enjoy our moives!
                  </p>
                }
              />
              <Route path="movies" element={<Movies />} />
              <Route path="movies/:id" element={<Movie />} />
              <Route path="favourites" element={<Favourites />} />
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
