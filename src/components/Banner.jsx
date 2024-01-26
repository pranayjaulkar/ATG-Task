import JoinIn from "./JoinIn";
import SignIn from "./SignIn";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
const Banner = () => {
  return (
    <div className="container banner-main">
      <div style={{ backgroundColor: "#F7F5F9" }}>
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "3rem", position: "relative" }}
          id="banner1"
        >
          <div
            className="col-10 w-100 d-flex flex-column justify-content-between flex-lg-row"
            style={{ zIndex: "999" }}
          >
            <div className="d-flex flex-column col-12 col-lg-8 text-wrap text-break">
              <h2 className="banner-title mb-5 fs-1 fst-italic">
                <span>Explore your </span>
                <span style={{ color: "#0096C8" }}>hobby</span>{" "}
                <span> or </span>
                <span style={{ color: "#8064A2" }}>passion</span>
              </h2>
              <div className="banner-text col-12 col-md-9 fs-6 lh-lg">
                <p className="mb-4">
                  Sign-in to interact with a community of fellow hobbyists and
                  an eco-system of experts, teachers, suppliers, classes,
                  workshops, and places to practice, participate or perform.
                  Your hobby may be about visual or performing arts, sports,
                  games, gardening, model making, cooking, indoor or outdoor
                  activities…
                </p>
                <p>
                  If you are an expert or a seller, you can Add your Listing and
                  promote yourself, your students, products, services or events.
                  Hop on your hobbyhorse and enjoy the ride.
                </p>
              </div>
            </div>
            <Router>
              <Routes>
                <Route element={<SignIn />} path="/" />
                <Route element={<JoinIn />} path="/join" />
              </Routes>
            </Router>
            
          </div>
          <div
            style={{
              height: "35%",
              width: "100%",
              position: "absolute",
              bottom: "0",
            }}
            className="d-flex align-items-end"
          >
            <div className=" d-flex justify-content-end">
              <div
                className="col-12 col-md-11"
                style={{
                  backgroundColor: "#F7F5F9",
                }}
              >
                <img src="/B1.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
