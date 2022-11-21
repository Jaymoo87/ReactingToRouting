import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Films from "./pages/Films";
import People from "./pages/People";
import Home from "./pages/Home";

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
            {/* <Route
              path="/users/:userid"
              element={
                <h1>
                  <UserDetails />
                </h1>
              }
            ></Route> */}
            <Route path="*" element={<h1>404 Not Found</h1>}></Route>
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
