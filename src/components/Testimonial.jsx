const Testimonial = () => {
  return (
    <div className="testimonials-main-container">
      <div
        className="container mx-auto"
        style={{
          padding: "40px",
          borderRadius: "8px",
          background: "var(--lighter-purple)",
        }}
      >
        <div className="d-flex gap-4 align-items-center pb-4">
          <img src="/Qoute.svg" height="40px" width="40px" />
          <span className="fs-4 fw-bolder">Testimonials</span>
        </div>
        <p className="pb-4">
          In a fast growing and ever changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </p>
        {/* Audio Player  */}
        <div className="d-flex flex-column-reverse flex-lg-row gap-3 justify-content-between align-item-center">
          <div
            className="d-flex flex-grow-1  align-items-center px-4 py-2"
            style={{
              minHeight: "100px",
              minWidth: "300px",
              background: "var(--muted-purple)",
              borderRadius: "8px",
            }}
          >
            <img src="/Play.svg" alt="" width={40} height={40} />
            <div className="d-flex flex-grow-1 align-items-center ps-3">
              <span
                className="rounded-circle"
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "var(--light-purple)",
                }}
              />
              <span
                className="flex-grow-1"
                style={{
                  borderBottom: " 4px solid white",
                  borderRadius: "0 9999px 9999px 0",
                }}
              />
              <span className="ps-2">0:00</span>
            </div>
            <img src="/AvatarWithMic.svg" alt="" />
          </div>
          <div className="d-flex gap-4 align-items-center">
            <img src="/Avatar.png" alt="" />
            <div className="d-flex flex-column gap-2">
              <span
                className="fs-5 fw-bolder"
                style={{ color: "var(--light-purple)" }}
              >
                Shubha Nagarajan
              </span>
              <span style={{ fontSize: "16px", color: "#0096C8" }}>
                Classical Dancer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
