import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PeopleDetails = () => {
  const { personid } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people/${personid}`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((e) => alert(e.message));
  }, [personid]);

  return (
    <div className="d-flex container rounded justify-content-center bg-dark border-dark shadow p-5">
      <div className="row col-12 justify-content-around p-2">
        <div key={`person-card-${details?.id}`} className="d-block col-12 col-md-6 col-sm-12 mt-4">
          <div className="mb-2 card shadow-lg bg-secondary">
            <h3 className="card-title mt-3 text-center">{details?.name}</h3>
            <div className="d-flex justify-content-around mx-2 p-3">
              <h5 className=" card-text fst-italic">Gender: {details?.gender}</h5>
              <h5 className="   card-text fst-italic mx-2">Age: {details?.age}</h5>
            </div>
            <div className="row card-body">
              <div className="d-flex justify-content-around">
                <h5 className=" m-2 card-text  ">Eye Color: {details?.eye_color}</h5>
                <h5 className=" m-2 card-text ">Hair Color: {details?.hair_color}</h5>
              </div>
            </div>
            <div className="btn d-flex justify-content-start ">
              <Link to="/people" className=" shadow-lg border-radius-pill btn btn-sm btn-dark btn-outline-secondary">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
{
}

export default PeopleDetails;
