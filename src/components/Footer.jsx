import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Footer = () => {
  const [hobbyCue, setHobbyCue] = useState(false);
  const [howDoI, setHowDoI] = useState(false);
  const [quickLinks, setQuickLinks] = useState(false);
  const linkSections = [
    {
      title: "HobbyCue",
      openState: hobbyCue,
      setOpenState: setHobbyCue,
      links: [
        { title: "About Us", url: "" },
        { title: "Our Services", url: "" },
        { title: "Work with us", url: "" },
        { title: "FAQ", url: "" },
        { title: "Contact Us", url: "" },
      ],
    },
    {
      title: "How Do I",
      openState: howDoI,
      setOpenState: setHowDoI,
      links: [
        { title: "Sign Up", url: "" },
        { title: "Add a listing", url: "" },
        { title: "Claim Listing", url: "" },
        { title: "Post a Query", url: "" },
        { title: "Add a Blog Post", url: "" },
      ],
    },
    {
      title: "Quick Links",
      openState: quickLinks,
      setOpenState: setQuickLinks,
      links: [
        { title: "Listings", url: "" },
        { title: "Blog Posts", url: "" },
        { title: "Shop/Store", url: "" },
        { title: "FAQ", url: "" },
        { title: "Community", url: "" },
      ],
    },
  ];

  const socialMedia = [
    "/Facebook-link.svg",
    "/Twitter.svg",
    "/Instagram.svg",
    "/Pinterest.svg",
    "/Google+.svg",
    "/Youtube.svg",
    "/Twitter.svg",
    "/Email.svg",
  ];

  return (
    <div>
      <div className="footer-main-container d-flex flex-column flex-md-row align-items-start justify-content-around">
        {/* {linkSections.map((linkSection) => (
          <div
            key={linkSection.title}
            className="d-flex flex-column gap-1"
            style={{ fontSize: "14px" }}
          >
            <h4 className="fw-bolder" style={{ fontSize: "16px" }}>
              {linkSection.title}
            </h4>
            <div className="d-flex flex-column gap-1">
              {linkSection.links.map((link) => (
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  key={link.title}
                  href={link.url}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        ))} */}
        {linkSections.map((linkSection) => (
          <div
            key={linkSection.title}
            className="d-flex flex-column gap-1 w-100 mb-4"
            style={{ fontSize: "14px" }}
          >
            <div className="d-flex align-items-center justify-content-between">
              <h4
                className="fw-bolder"
                style={{ fontSize: "16px", marginBottom: "0" }}
              >
                {linkSection.title}
              </h4>
              <div
                className="d-flex d-md-none"
                onClick={() =>
                  linkSection.setOpenState((previousState) => !previousState)
                }
              >
                {linkSection.openState ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>
            <div
              style={{ display: linkSection.openState ? "flex" : "none" }}
              className="flex-column gap-1"
            >
              {linkSection.links.map((link) => (
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  key={link.title}
                  href={link.url}
                >
                  {link.title}
                </a>
              ))}
            </div>
            <div className="d-none d-md-flex flex-column gap-1">
              {linkSection.links.map((link) => (
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  key={link.title}
                  href={link.url}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        ))}
        <div className="d-flex flex-column align-items-start">
          <div className="mb-5">
            <h4 className="mb-4 fw-bolder" style={{ fontSize: "16px" }}>
              Social Media
            </h4>
            <div className="d-flex align-items-center gap-4 ">
              {socialMedia.map((link) => (
                <img key={link} src={link} height="24" width="24" />
              ))}
            </div>
          </div>
          <div className="d-flex flex-column align-items-start w-100">
            <h4 className="mb-4  fw-bolder" style={{ fontSize: "16px" }}>
              Invite Friends
            </h4>

            <div className="invite-friends d-flex w-100">
              <input
                type="text"
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
                <span className="text-light p-1">Invite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="d-flex  jutify-content-center p-4"
        style={{ background: "var(--lighter-purple)" }}
      >
        <span className="mx-auto">© Purple Cues Private Limited</span>
      </div>
    </div>
  );
};

export default Footer;
