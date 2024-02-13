import SignInAndJoinIn from "./SignInAndJoinIn";
const Banner = () => {
  return (
    <div className="banner-main-container">
      <div
        className="d-flex justify-content-center"
        style={{ position: "relative" }}
      >
        <div
          className="col-10 w-100 d-flex flex-column justify-content-between flex-lg-row"
          style={{ zIndex: "999" }}
        >
          <div className="d-flex flex-column col-12 col-lg-8 text-wrap text-break">
            <h2 className="mb-5 fs-1 fst-italic">
              <span>Explore your </span>
              <span style={{ color: "var(--light-purple)" }}>hobby</span>
              <span> or </span>
              <span style={{ color: "var(--light-blue)" }}>passion</span>
            </h2>
            <div className="col-12 col-md-9 fs-6 lh-lg">
              <p className="mb-4">
                Sign-in to interact with a community of fellow hobbyists and an
                eco-system of experts, teachers, suppliers, classes, workshops,
                and places to practice, participate or perform. Your hobby may
                be about visual or performing arts, sports, games, gardening,
                model making, cooking, indoor or outdoor activities…
              </p>
              <p>
                If you are an expert or a seller, you can Add your Listing and
                promote yourself, your students, products, services or events.
                Hop on your hobbyhorse and enjoy the ride.
              </p>
            </div>
          </div>
          <SignInAndJoinIn />
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
                backgroundColor: "var(--bg-purple)",
              }}
            >
              <img src="/B1.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
