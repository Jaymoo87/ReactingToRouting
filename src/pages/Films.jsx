import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => setFilms(data))
      .catch((e) => alert(e.message));
  }, []);

  return (
    <div className="col-md-6">
      <ul className="list-group">
        {films.map((film) => (
          <li key={`user-${film.id}`} className="list-group-item d-flex justify-content-between alighn-items-center">
            {film.title}
            <Link to={`/films/${film.id}`} className="btn btn-dark">
              Full Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Films;
