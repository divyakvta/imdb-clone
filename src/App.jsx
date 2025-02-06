import "./App.css";
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
          <Route path="/" element={<Movies />} />
          <Route path="/watch-list" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
