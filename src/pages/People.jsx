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
    <div className="col-md-6">
      <ul className="list-group">
        {people.map((person) => (
          <li key={`user-${person.id}`} className="list-group-item d-flex justify-content-between alighn-items-center">
            {person.username}
            <Link to={`/people/${person.id}`} className="btn btn-primary">
              Full Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default People;
