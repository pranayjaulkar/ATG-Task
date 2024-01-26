const Header = () => {
  return (
    <header className="d-flex align-items-center container justify-content-between py-4 header-main">
      <div className="d-flex align-items-center">
        <div>
          <img
            src={"/HobbyCue Logo.png"}
            alt="Description of the image"
            className="header-logo"
          />
        </div>

        <div className="input-group search-bar">
          <input
            type="text"
            className="form-control search-input d-none d-md-block"
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="searchButton"
          />
          <div className="input-group-append">
            <div className="d-flex justify-content-center align-items-center h-100 w-100 header-search-button">
              <img src="/searchIcon.png" alt="Search" className="w-50 h-50" />
            </div>
          </div>
        </div>
      </div>
      <div className="header-div2">
        <div className="input-group-prepend">
          <span className="input-group-text bg-white border-0 d-none d-md-block">
            <img src="Explore.png" alt="Explore Logo" width="20" height="20" />
          </span>
        </div>
        <select
          className="custom-select border-0 header-select d-none d-md-block"
          id="exploreSelect"
        >
          <option value="explore" selected>
            Explore
          </option>
          <option value="people">People-Community</option>
          <option value="place">Places-Venues</option>
          <option value="place">Programs-Events</option>
          <option value="place">Product-Store</option>
          <option value="place">Blogs</option>
        </select>
        <div className="input-group-prepend d-none d-md-block">
          <span className="input-group-text bg-white border-0">
            <img
              src="Star 1.png"
              alt="Explore Logo"
              width="17"
              height="17"
              className="hobbies-logo"
            />
          </span>
        </div>
        <select
          className="custom-select border-0 header-select d-none d-md-block"
          id="exploreSelect"
        >
          <option value="explore" selected>
            Hobbies
          </option>
          <option value="people">Painting-Sketches</option>
          <option value="people">Football</option>
          <option value="people">Cricket</option>
        </select>
        <img
          src="bookmark_black_24dp 1.png"
          className="mx-2 d-none d-md-block"
          alt="Bookmark Logo"
          width="20"
          height="20"
        />
        <img
          className="mx-5"
          src="notifications_black_24dp 1.png"
          alt="Notification Logo"
          width="20"
          height="20"
        />
         {/* <img
          src="searchIcon.png"
          alt="Notification Logo"
          className="d-md-none"
          width="20"
          height="20"
        /> */}
        <img
          src="menu_black_24dp 1.png"
          alt="Notification Logo"
          className="d-md-none"
          width="20"
          height="20"
        />
        <button className="sign-in-button d-none d-md-block">Sign In</button>
      </div>
    </header>
  );
};

export default Header;
