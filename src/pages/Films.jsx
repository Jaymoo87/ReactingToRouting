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
    <div className="d-flex container rounded justify-content-center bg-dark border-dark shadow-lg p-5">
      <div className="col-md-6 ">
        <ul className="list-group ">
          {films.map((film) => (
            <li key={`user-${film.id}`} className=" py-5 list-group-item align-items-center bg-secondary shadow-lg">
              <h4 className="mb-5 fw-bolder">{film.title}</h4>
              <h5 className="px-5 fst-italic">
                <small>{film?.description.substring(0, 200)}...</small>
              </h5>
              <div className="d-flex justify-content-end">
                <Link to={`/films/${film.id}`} className="btn btn-sm d-flex shadow btn-dark btn-outline-secondary">
                  Read More...
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Films;
