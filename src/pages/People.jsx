import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import React from "react";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((data) => setPeople(data))
      .catch((e) => alert(e.message));
  }, []);

  return (
    <div className="d-flex container rounded justify-content-center bg-dark border-dark shadow p-5">
      <div className="col-md-6">
        <ul className="list-group">
          {people.map((person) => (
            <li key={`person-${person.id}`} className="list-group-item  align-items-center bg-secondary">
              <h3 className="d-flex justify-content-center">{person.name}</h3>
              <div className="d-flex justify-content-center p-3">
                <Link to={`/people/${person.id}`} className="btn btn-dark btn-outline-secondary">
                  About {person.name.substring(0, 20)}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default People;
