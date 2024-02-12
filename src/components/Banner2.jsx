const Banner2 = () => {
  return (
    <div style={{ marginTop: "100px", marginBottom: "100px" }}>
      <div
        style={{ padding: "100px", background: "#F7FDFF" }}
        className="d-flex flex-column gap-5"
      >
        <div>
          <h2 className="mb-5 fs-1 fst-italic" style={{ marginBottom: "30px" }}>
            <span>Your </span>
            <span style={{ color: "var(--light-purple)" }}>hobby</span>{" "}
            <span>, Your </span>
            <span style={{ color: "var(--light-blue)" }}>Community...</span>
          </h2>
          <button
            className="px-4 py-2 fw-bolder text-white fs-5"
            style={{
              maxWidth: "170px",
              border: "none",
              borderRadius: "8px",
              background: "var(--light-purple)",
            }}
          >
            Get Started
          </button>
        </div>
        <img src="/B2.png" alt="" />
      </div>
    </div>
  );
};

export default Banner2;
