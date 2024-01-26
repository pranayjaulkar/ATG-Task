const Cards = () => {
  return (
    <div className="cards-main container" style={{margin:"100px auto"}}>
      <div className="cards-container d-flex justify-content-center">
        <div className="cards">
          <div className="cards-heading">
            <img src="/people.png" height="40px" width="40px" />
            <span>People</span>
          </div>
          <p>
            Find a teacher, coach, or expert for your hobby interest in your
            locality. Find a partner, teammate, accompanist or collaborator.
          </p>
          <button>Connect</button>
        </div>
        <div className="cards">
          <div className="cards-heading">
            <img src="/place.png" height="40px" width="40px" />
            <span>Place</span>
          </div>
          <p>
            Find a class, school, playground, auditorium, studio, shop or an
            event venue. Book a slot at venues that allow booking through
            hobbycue.
          </p>
          <button>Meet Up</button>
        </div>
      </div>

      <div className="cards-container d-flex justify-content-center">
        <div className="cards">
          <div className="cards-heading">
            <img src="/product.png" height="40px" width="40px" />
            <span>Product</span>
          </div>
          <p>
            Find equipment or supplies required for your hobby. Buy, rent or
            borrow from shops, online stores or from community members.
          </p>
          <button>Get It</button>
        </div>
        <div className="cards">
          <div className="cards-heading">
            <img src="/program.png" height="40px" width="40px" />
            <span>Program</span>
          </div>
          <p>
            Find events, meetups and workshops related to your hobby. Register
            or buy tickets online.
          </p>
          <button>Attend</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
