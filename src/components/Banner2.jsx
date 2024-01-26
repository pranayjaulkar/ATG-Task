const Banner2 = () => {
  return (
    <div
      className="banner2 container"
      style={{ marginTop: "100px", marginBottom: "100px" }}
    >
      <div
        style={{ padding: "100px", background: "#F7FDFF" }}
        className="d-flex flex-column"
      >
        <h2
          className="banner-title mb-5 fs-1 fst-italic"
          style={{ marginBottom: "30px" }}
        >
          <span>Your </span>
          <span style={{ color: "#8064A2" }}>hobby</span> <span>, Your </span>
          <span style={{ color: "#0096C8" }}>Community...</span>
        </h2>
        <button className="banner2-button">Get Started</button>
        <img src="/B2.png" alt="" />
      </div>
    </div>
  );
};

export default Banner2;
