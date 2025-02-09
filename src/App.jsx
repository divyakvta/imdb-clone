import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [watchList, setWatchList] = useState([]);

  //Add movies to the watchlist
  const addToWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    localStorage.setItem("imdb_clone", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  //Remove movies from watchlist
  const removeFromWatchList = (movieObj) => {
    let filteredWatchList = watchList.filter((movie) => {
      return movie.id !== movieObj.id;
    });

    setWatchList(filteredWatchList);
    localStorage.setItem("imdb_clone", JSON.stringify(filteredWatchList));
  };

  //Retrieve movie data from local storage 
  useEffect(() => {
    const moviesFromLocalStorage = localStorage.getItem("imdb_clone");
    if (moviesFromLocalStorage) {
      setWatchList(JSON.parse(moviesFromLocalStorage));
    }
  }, []);

  return (
    <main className="mb-20">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={  
                <Movies
                  watchList={watchList}
                  addToWatchList={addToWatchList}
                  removeFromWatchList={removeFromWatchList}
                />
            }
          />
          <Route
            path="/watch-list"
            element={
              <WatchList
                watchList={watchList}
                setWatchList={setWatchList}
                removeFromWatchList={removeFromWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
