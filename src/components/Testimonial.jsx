

const Testimonial = () => {
  return (
    <div className="container d-flex flex-column testimonial-main my-5">
      <div className="d-flex my-3">
        <img src="/quote.png"  height="32" width="32" />
        <h4 className="mx-3">Testimonials</h4>
      </div>
      <p>
      In a fast growing and ever changing city like Bangalore
      , it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my c
      ity, all under one roof, is an excellent idea and I highly recommend it.
      </p>
      <img src="/hplay.jpeg" alt="" className="d-none d-md-block" />
      <img src="/vplay.jpeg" alt="" className="d-md-none" />
    </div>
  )
}

export default Testimonial
