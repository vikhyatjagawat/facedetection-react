import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./brain.png";
import "./Navigation.css";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="logo">
          <Tilt
            className="Tilt br2 shadow-2"
            options={{ max: 35 }}
            style={{ height: 100, width: 100 }}
          >
            <div className="Tilt-inner">
              <img alt="Logo" src={brain} />
            </div>
          </Tilt>
        </div>
        <div className="pa4">
          <button
            onClick={() => onRouteChange("signout")}
            className="btn pointer"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="logo">
          <Tilt
            className="Tilt br2 shadow-2"
            options={{ max: 35 }}
            style={{ height: 100, width: 100 }}
          >
            <div className="Tilt-inner">
              <img alt="Logo" src={brain} />
            </div>
          </Tilt>
        </div>
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <p
            onClick={() => onRouteChange("signin")}
            className="f3 link dim black underline pa3 pointer"
          >
            Sign In
          </p>
          <p
            onClick={() => onRouteChange("register")}
            className="f3 link dim black underline pa3 pointer"
          >
            Register
          </p>
        </nav>
      </div>
    );
  }
};

export default Navigation;
