const Footer = () => {
  return (
    <div>
      <div
        className="d-flex align-items-start justify-content-around"
        style={{ margin: "100px 60px" }}
      >
        <div className="d-flex flex-column gap-1" style={{ fontSize: "14px" }}>
          <h4 className="fw-bolder" style={{ fontSize: "16px" }}>
            Hobbycue
          </h4>
          <div className="d-flex flex-column gap-1">
            <a>About Us</a>
            <a>Our Services</a>
            <a>Work With Us</a>
            <a>FAQ</a>
            <a>Contact Us</a>
          </div>
        </div>
        <div className="d-flex flex-column gap-1" style={{ fontSize: "14px" }}>
          <h4 className="fw-bolder" style={{ fontSize: "16px" }}>
            How Do I
          </h4>
          <div className="d-flex flex-column gap-1">
            <a>Sign Up</a>
            <a>Add A Listing</a>
            <a>Claim Listring</a>
            <a>Post A Query</a>
            <a>Add A Blog Post</a>
            <a>Other Queries</a>
          </div>
        </div>
        <div className="d-flex flex-column gap-1" style={{ fontSize: "14px" }}>
          <h4 className="fw-bolder" style={{ fontSize: "16px" }}>
            Quick Links
          </h4>
          <div className="d-flex flex-column gap-1">
            <a>Listings</a>
            <a>Blog Posts</a>
            <a>Shop/Store</a>
            <a>FAQ</a>
            <a>Community</a>
          </div>
        </div>
        <div className="d-flex flex-column align-items-start">
          <div className="mb-5">
            <h4 className="mb-4 fw-bolder" style={{ fontSize: "16px" }}>
              Social Media
            </h4>
            <div className="d-flex align-items-center gap-4 ">
              <img src="/Facebook-link.svg" height="24" width="24" />
              <img src="/Twitter.svg" height="24" width="24" />
              <img src="/Instagram.svg" height="24" width="24" />
              <img src="/Pinterest.svg" height="24" width="24" />
              <img src="/Google+.svg" height="24" width="24" />
              <img src="/Youtube.svg" height="24" width="24" />
              <img src="/Twitter.svg" height="24" width="24" />
              <img src="/Email.svg" height="24" width="24" />
            </div>
          </div>
          <div className="d-flex flex-column align-items-start">
            <h4 className="mb-4  fw-bolder" style={{ fontSize: "16px" }}>
              Invite Friends
            </h4>
            <div>
              <div className="d-none d-lg-flex">
                <input
                  type="text"
                  style={{ borderRadius: "10px 0 0 10px ", fontSize: "12px" }}
                  className="border px-2"
                  placeholder="Email ID"
                />
                <div
                  className="d-flex align-items-center px-2"
                  style={{
                    background: "var(--light-purple)",
                    borderRadius: "0 10px  10px 0",
                  }}
                >
                  <span className="text-light p-1" style={{ fontSize: "12px" }}>
                    Invite
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>© Purple Cues Private Limited</p>
    </div>
  );
};

export default Footer;
