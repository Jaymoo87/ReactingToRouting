import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="col-md-6">
      <h1 className="text-center">Home Page</h1>
      <div className="d-flex justify-content-center">
        <Link to="./people">
          <button className="btn btn-primary m-3">People</button>
        </Link>

        <Link to="./films">
          <button className="btn btn-primary m-3">Films</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
