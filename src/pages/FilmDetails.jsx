import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Films from "./Films";

const FilmCard = () => {
  const { filmid } = useParams();
  const [film, setFilms] = useState(null);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
      .then((res) => res.json())
      .then((data) => setFilms(data))
      .catch((e) => alert(e.message));
  }, [filmid]);

  return (
    <div className="d-flex container justify-content-center bg-dark border-dark shadow p-5">
      <div key={`film-card-${film?.id}`} className=" d-block col-12 col-md-6 col-sm-12 mt-4">
        <div className="mb-2 card shadow-lg bg-secondary">
          <img className="border border-dark rounded-circle" style={{ aspectRatio: 2 / 1 }} src={film?.movie_banner} />

          <h3 className="card-title text-center mx-3 ">{film?.title}</h3>

          <h5 className=" m-5 card-text ">{film?.description}</h5>
          <div className="d-flex justify-content-between mx-2">
            <h6 className="  d-flex card-text fst-italic">Year Released: {film?.release_date}</h6>
            <h6 className="  d-flex card-text fst-italic">Rotten Tomatoes: {film?.rt_score}</h6>
          </div>
          <div className="badge d-flex justify-content-start  ">
            <Link to="/films" className=" shadow-lg border-radius btn btn-sm btn-dark btn-outline-secondary">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
