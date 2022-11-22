import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="col-md-6">
      <div className=" bg-dark rounded border border-dark card shadow-lg">
        <div className="row card-body">
          <img
            src={require("./ghibliPhoto.jpg")}
            className=""
            style={{ aspectRatio: 2 / 1 }}
            alt="Studio Ghibli Mural"
          />
        </div>

        <p className=" m-5 card-text fst-italic text-light text-center ">
          "Once you've met someone, you never really forget them"
        </p>
        <div className="d-flex justify-content-between mx-2"></div>
      </div>
      <div className="d-flex justify-content-center">
        <Link to="./people">
          <button className="btn btn-secondary btn-outline-dark m-3">People</button>
        </Link>

        <Link to="./films">
          <button className="btn btn-secondary btn-outline-dark m-3">Films</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
