import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Films from "./pages/Films";
import People from "./pages/People";
import Home from "./pages/Home";
import PeopleDetails from "./pages/PeopleDetails";
import FilmDetails from "./pages/FilmDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container mt-5">
        <section className="row justify-content-center">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/people" element={<People />}></Route>
            <Route path="/films" element={<Films />}></Route>
            <Route
              path="/people/:personid"
              element={
                <h1>
                  <PeopleDetails />
                </h1>
              }
            ></Route>
            <Route
              path="/films/:filmid"
              element={
                <h1>
                  <FilmDetails />
                </h1>
              }
            ></Route>
            <Route path="*" element={<h1>404 Not Found</h1>}></Route>
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
