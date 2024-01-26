import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function JoinIn() {
  return (
    <div className="col-12 col-lg-4 px-2" id="banner1_signIn">
      <div className="w-100 mb-5 d-flex justify-content-start">
        <div
          id="banner1_signIn-signIn"
          className="me-4 p-1"
          style={{ borderBottom: "2px solid #8064A2" }}
        >
          <Link to={"/"} >Sign In</Link>
        </div>
        <div
          id="banner1_signIn-joinIn"
          className=" p-1"
          style={{ color: "#939393" }}
        >
          <Link to={"/join"}>Join In</Link>
        </div>
      </div>
      <div className="w-100 Google-Button position-relative mb-3">
        <FcGoogle
          className="Google-Logo position-absolute"
          style={{ left: "5%" }}
        />
        Login With Google
      </div>
      <div className="w-100 Google-Button position-relative mb-4">
        <img
          src="/FB.png"
          className="Google-Logo position-absolute"
          style={{ left: "5%" }}
        />
        Login With Facebook
      </div>
      <div className="d-flex align-items-center mx-auto mb-4 ">
        <div className="border-top border-2 flex-grow-1 h-0"></div>
        <div className="p-2">
          <span>Or connect with</span>
        </div>
        <div className="border-top border-2 flex-grow-1 h-0"></div>
      </div>
      <div className="d-flex flex-column mx-auto d-flex flex-column align-items-center">
        <input
          type="email"
          placeholder="Email"
          className="mb-3 border p-3 w-100"
          style={{ height: "40px", borderRadius: "10px" }}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-3 border p-3 w-100"
          style={{ height: "40px", borderRadius: "10px" }}
        />
      </div>
      <div className="d-flex justify-content-between mx-auto align-items-center mb-4">
        <p>By continuing, you agree to our <span className="font-weight-bold">Terms of Service</span> and <span className="font-weight-bold">Privacy Policy</span>.</p>
      </div>{" "}
      <div className="d-flex justify-content-between mx-auto align-items-center">
        <button
          className="w-100 p-2"
          style={{
            background: "#f7f5f9",
            borderRadius: "10px",
            border: "1px solid black",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
