import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [watchList, setWatchList] = useState([]);

  const addToWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    localStorage.setItem('imdb_clone', JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    console.log(newWatchList)
  }

  const removeFromWatchList =(movieObj) => {
    let filteredWatchList = watchList.filter(movie => {
      return movie.id !== movieObj.id
    })
    setWatchList(filteredWatchList)
    console.log(filteredWatchList )
  }

  useEffect(() => {
    const moviesFromLocalStorage = localStorage.getItem('imdb_clone');
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
              <>
                <Banner /> <Movies watchList={watchList} addToWatchList={addToWatchList} removeFromWatchList={removeFromWatchList} />
              </>
            }
          />
          <Route path="/watch-list" element={<WatchList watchList={watchList} />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
