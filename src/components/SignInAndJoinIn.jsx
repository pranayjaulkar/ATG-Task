import { useState } from "react";
export default function SignIn() {
  const [signIn, setSignIn] = useState(true);
  return (
    <div
      className="col-12 col-lg-4 px-2"
      style={{ padding: "0 .5rem 10rem .5rem" }}
    >
      <div className="w-100 mb-5 d-flex justify-content-start">
        <div
          className="me-4 p-1"
          onClick={() => setSignIn(true)}
          style={{
            borderBottom: signIn ? "2px solid var(--light-purple)" : "",
            cursor: "pointer",
          }}
        >
          <span
            className="fs-5 fw-semibold"
            style={{ color: signIn ? "var(--light-purple)" : "gray" }}
          >
            Sign In
          </span>
        </div>
        <div
          onClick={() => setSignIn(false)}
          className="p-1"
          style={{
            borderBottom: signIn ? "" : "2px solid var(--light-purple)",
            cursor: "pointer",
          }}
        >
          <span
            className="fs-5 fw-semibold"
            style={{ color: signIn ? "gray" : "var(--light-purple)" }}
          >
            Join In
          </span>
        </div>
      </div>
      {/* Google Login  */}
      <div
        className="d-flex align-items-center justify-content-center w-100 position-relative mb-3 py-3 px-4 "
        style={{
          border: "1px solid var(--light-purple)",
          borderRadius: "8px",
          height: "40px",
          cursor: "pointer",
        }}
      >
        <img
          src="/Google.svg"
          className="position-absolute px-3"
          style={{ left: "0px" }}
        />
        Login With Google
      </div>
      {/* Facebook Login  */}
      <div
        className="d-flex align-items-center justify-content-center w-100 position-relative mb-3 py-3 px-4 "
        style={{
          border: "1px solid var(--light-purple)",
          borderRadius: "8px",
          height: "40px",
          cursor: "pointer",
        }}
      >
        <img
          src="/Facebook.svg"
          className="position-absolute px-3"
          style={{ left: "0px" }}
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
      {signIn ? (
        <div className="d-flex justify-content-between mx-auto align-items-center mb-4">
          <div style={{ cursor: "pointer" }}>
            <input type="checkbox" id="RememberMe" className="me-2" />
            <label htmlFor="RememberMe" className="fs-6">
              Remember Me
            </label>
          </div>
          <div style={{ cursor: "pointer" }}>
            <span>
              <img src="/Lock.svg" alt="" />
            </span>
            <span className="fs-6 ms-2">Forgot Password?</span>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div className="d-flex justify-content-between mx-auto align-items-center mb-2">
              <div className="d-flex w-50 align-items-center">
                <span
                  className="me-2"
                  style={{
                    width: "20%",
                    border: "2px solid white",
                    borderRadius: "9999px",
                  }}
                ></span>
                <span
                  className="me-2"
                  style={{
                    width: "20%",
                    border: "2px solid white",
                    borderRadius: "9999px",
                  }}
                ></span>
                <span
                  className="me-2"
                  style={{
                    width: "20%",
                    border: "2px solid white",
                    borderRadius: "9999px",
                  }}
                ></span>
              </div>
              <span
                className="w-50 d-flex justify-content-end align-items-center ps-2"
                style={{ fontSize: "14px" }}
              >
                Password Strength
              </span>
            </div>
            <div className="pb-4">
              <span className="fs-6">
                By continuing, you agree to our
                <span className="fw-bolder">Terms of Service</span> and
                <span className="fw-bolder"> Privacy Policy</span>.
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="d-flex justify-content-between mx-auto align-items-center">
        <button
          className="w-100 p-2"
          style={{
            background: "var(--bg-purple)",
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
