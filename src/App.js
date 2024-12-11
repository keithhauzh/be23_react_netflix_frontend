// import react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Movies from "./pages/Movies";
import Shows from "./pages/Shows";

function App() {
  return (
    <div className="App">
      {/*
        setup the react routers
        - / is the movies page
        - shows is the tv shows page 
      */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/" element={<Movies />}></Route>
          <Route path="/shows" element={<Shows />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
