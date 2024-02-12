import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [explore, setExplore] = useState(false);
  const [hobbies, setHobbies] = useState(false);
  return (
    <div className="shadow">
      <header className="d-flex align-items-center justify-content-between py-4 col-11  col-md-10 mx-auto ">
        <div className="d-flex align-items-center">
          <div>
            <img
              style={{ height: "50px" }}
              src="/HobbyCue Logo.png"
              alt="Description of the image"
              className="px-4"
            />
          </div>

          <div className="d-none d-lg-flex">
            <input
              type="text"
              style={{ borderRadius: "10px 0 0 10px " }}
              className="border px-2"
              placeholder="Search..."
            />
            <div
              className="d-flex justify-content-center align-items-center  h-100 w-100 p-2"
              style={{
                background: "var(--light-purple)",
                borderRadius: "0 10px  10px 0",
              }}
            >
              <Search className="text-light p-1" style={{ cursor: "pointer" }}/>
            </div>
          </div>
          <div className="d-flex d-lg-none">
            <div className="d-flex justify-content-center align-items-center  h-100 w-100 p-2">
              <Search style={{ color: "var(--light-purple)",cursor:"pointer" }} />
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-around">
          <div className="d-flex align-items-center">
            <div className="position-relative me-4" style={{ cursor: "pointer" }}>
              <div
                className="bg-white border-0 d-none d-md-flex align-items-center"
                onClick={() => setExplore((previousState) => !previousState)}
              >
                <img
                  src="Explore.svg"
                  className="me-2"
                  alt="Explore Logo"
                  width="20"
                  height="20"
                />
                <span className="me-2">Explore</span>
                <span className="p-1">
                  {explore ? <ChevronUp /> : <ChevronDown />}
                </span>
              </div>
              <div
                className="position-absolute flex-column bg-white"
                style={{
                  display: `${explore ? "flex" : "none"}`,
                  zIndex: "9999",
                  top: "65px",
                  minWidth: "230px",
                }}
              >
                <div className="border-bottom px-3 py-1" value="people">
                  People-Community
                </div>
                <div className="border-bottom px-3 py-1" value="place">
                  Places-Venues
                </div>
                <div className="border-bottom px-3 py-1" value="place">
                  Programs-Events
                </div>
                <div className="border-bottom px-3 py-1" value="place">
                  Product-Store
                </div>
                <div className="border-bottom px-3 py-1" value="place">
                  Blogs
                </div>
              </div>
            </div>
            <div className="position-relative" style={{ cursor: "pointer" }}>
              <div
                className="bg-white border-0 d-none d-md-flex align-items-center"
                onClick={() => setHobbies((previousState) => !previousState)}
              >
                <img
                  src="Hobbies.svg"
                  className="me-2"
                  alt="Hobbies Logo"
                  width="20"
                  height="20"
                />
                <span className="me-2">Hobbies</span>
                <span className="p-1">
                  {hobbies ? <ChevronUp /> : <ChevronDown />}
                </span>
              </div>
              <div
                className="position-absolute flex-column bg-white"
                style={{
                  display: `${hobbies ? "flex" : "none"}`,
                  zIndex: "9999",
                  top: "65px",
                  minWidth: "230px",
                }}
              >
                <div className="border-bottom px-3 py-1" value="place">
                  Painting-Sketches
                </div>
                <div className="border-bottom px-3 py-1" value="place">
                  Football
                </div>
                <div className="border-bottom px-3 py-1" value="place">
                  Cricket
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center px-3  ">
            <img
              src="/Bookmark.svg"
              alt=""
              className="me-4 d-none d-md-block"
              style={{ cursor: "pointer" }}
            />
            <img
              src="/Notification.svg"
              alt=""
              className="me-4 d-none d-md-block"
              style={{ cursor: "pointer" }}
            />
            <img
              src="/ShoppingCart.svg"
              alt=""
              className="me-4 d-none d-md-block"
              style={{ cursor: "pointer" }}
            />
          </div>
          <button
            className="d-none d-md-block bg-white px-4 py-2 rounded-3"
            style={{ border: "solid 1px var(--light-purple)" }}
          >
            Sign In
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
