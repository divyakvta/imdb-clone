import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movies />
              </>
            }
          />
          <Route path="/watch-list" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
