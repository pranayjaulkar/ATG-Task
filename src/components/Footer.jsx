const Footer = () => {
  return (
    <div className="footer-main container">
      <div className="footer-list" style={{ marginBottom: "50px" }}>
        <div>
          <h4>Hobbycue</h4>
          <li>About Us</li>
          <li>Our Services</li>
          <li>Work With Us</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </div>
        <div>
          <h4>How Do I</h4>
          <li>Sign Up</li>
          <li>Add A Listing</li>
          <li>Claim Listring</li>
          <li>Post A Query</li>
          <li>Add A Blog Post</li>
          <li>Other Queries</li>
        </div>
        <div>
          <h4>Quick Links</h4>
          <li>Listings</li>
          <li>Blog Posts</li>
          <li>Shop/Store</li>
          <li>FAQ</li>
          <li>Community</li>
        </div>
        <div>
          <div className="social">
            <h4>Social Media</h4>
            <img src="/facebook.png" height="16" width="16" />
            <img src="/twitter1.png" height="16" width="16" />
            <img src="/instagram.png" height="16" width="16" />
            <img src="/pinterest.png" height="16" width="16" />
            <img src="/google.png" height="16" width="16" />
            <img src="/youtube.png" height="16" width="16" />
            <img src="/twitter.png" height="16" width="16" />
            <img src="/email.png" height="16" width="16" />
          </div>
          <div>
            <h4>Invite Friends</h4>
            <div>
              <input />
              <button>Invite</button>
            </div>
          </div>
        </div>
      </div>
      <p>© Purple Cues Private Limited</p>
    </div>
  );
};

export default Footer;
