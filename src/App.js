import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home/Home";
import TVShow from "./Page/TVShow/TVShow";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path={"/" || "/Home"} element={<Home />} />
        <Route path="/TV%20Show" element={<TVShow />} />
      </Routes>
    </div>
  );
}

export default App;
