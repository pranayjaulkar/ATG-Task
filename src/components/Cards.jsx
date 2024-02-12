const Cards = () => {
  return (
    <div
      className="container gap-4"
      style={{ display: "grid", margin: "100px auto" }}
    >
      <div className="row d-flex gap-4">
        <div
          className="col border"
          style={{ padding: "40px", borderRadius: "8px" }}
        >
          <div className="d-flex gap-4 align-items-center pb-4">
            <img src="/People.svg" height="40px" width="40px" />
            <span className="fs-4 fw-bolder">People</span>
          </div>
          <p className="pb-4">
            Find a teacher, coach, or expert for your hobby interest in your
            locality. Find a partner, teammate, accompanist or collaborator.
          </p>
          <button
            className="px-4 py-2 bg-white "
            style={{
              minWidth: "120px",
              border: "1px solid var(--light-purple)",
              borderRadius: "8px",
            }}
          >
            Connect
          </button>
        </div>
        <div
          className="col border"
          style={{ padding: "40px", borderRadius: "8px" }}
        >
          <div className="d-flex gap-4 align-items-center pb-4">
            <img src="/Location.svg" height="40px" width="40px" />
            <span className="fs-4 fw-bolder">Place</span>
          </div>
          <p className="pb-4">
            Find a class, school, playground, auditorium, studio, shop or an
            event venue. Book a slot at venues that allow booking through
            hobbycue.
          </p>
          <button
            className="px-4 py-2 bg-white "
            style={{
              minWidth: "120px",
              border: "1px solid var(--light-purple)",
              borderRadius: "8px",
            }}
          >
            Meet Up
          </button>
        </div>
      </div>

      <div className="row d-flex gap-4">
        <div
          className="col border"
          style={{ padding: "40px", borderRadius: "8px" }}
        >
          <div className="d-flex gap-4 align-items-center pb-4">
            <img src="/ShoppingBag.svg" height="40px" width="40px" />
            <span className="fs-4 fw-bolder">Product</span>
          </div>
          <p className="pb-4">
            Find equipment or supplies required for your hobby. Buy, rent or
            borrow from shops, online stores or from community members.
          </p>
          <button
            className="px-4 py-2 bg-white "
            style={{
              minWidth: "120px",
              border: "1px solid var(--light-purple)",
              borderRadius: "8px",
            }}
          >
            Get It
          </button>
        </div>
        <div
          className="col border"
          style={{ padding: "40px", borderRadius: "8px" }}
        >
          <div className="d-flex gap-4 align-items-center pb-4">
            <img src="/Calender.svg" height="40px" width="40px" />
            <span className="fs-4 fw-bolder">Program</span>
          </div>
          <p className="pb-4">
            Find events, meetups and workshops related to your hobby. Register
            or buy tickets online.
          </p>
          <button
            className="px-4 py-2 bg-white "
            style={{
              minWidth: "120px",
              border: "1px solid var(--light-purple)",
              borderRadius: "8px",
            }}
          >
            Attend
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
