const Cards = () => {
  const cards = [
    {
      title: "People",
      description:
        "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
      icon: "/People.svg",
      action: "Connect",
    },
    {
      title: "Place",
      description:
        "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
      icon: "/Location.svg",
      action: "Meet Up",
    },
    {
      title: "Product",
      description:
        "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
      icon: "/ShoppingBag.svg",
      action: "Get It",
    },
    {
      title: "Program",
      description:
        "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
      icon: "/Calender.svg",
      action: "Attend",
    },
  ];
  return (
    <div className="cards-container container">
      {cards.map((card) => (
        <div key={card.title} className=" border">
          <div className="d-flex gap-4 align-items-center pb-4">
            <img src={card.icon} height="40px" width="40px" />
            <span className="fs-4 fw-bolder">{card.title}</span>
          </div>
          <p className="pb-4">{card.description}</p>
          <button
            className="px-4 py-2 bg-white "
            style={{
              minWidth: "120px",
              border: "1px solid var(--light-purple)",
              borderRadius: "8px",
            }}
          >
            {card.action}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
