import React, { useState } from "react";
import "./Profile.css";
import Your_profile from "./Your_profile";
import Business_profile from "./Business_profile";
import Logo from "./Logo";

const Profile = () => {
  const [yourProfile, setYourProfile] = useState("your");

  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-underline">
          <li className="nav-item">
            <a
              className={`nav-link ${yourProfile === "your" ? "active" : ""}`}
              aria-current="page"
              onClick={() => setYourProfile("your")}
              href="#"
            >
              Your Profile
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                !yourProfile === "business" ? "active" : ""
              }`}
              onClick={() => setYourProfile("business")}
              href="#"
            >
              Business Details
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${yourProfile === "logo" ? "active" : ""}`}
              aria-current="page"
              onClick={() => setYourProfile("logo")}
              href="#"
            >
              Logo Generator
            </a>
          </li>
        </ul>
      </header>
      {yourProfile === "your" && (
        <Your_profile setYourProfile={setYourProfile} />
      )}
      {yourProfile === "business" && (
        <Business_profile setYourProfile={setYourProfile} />
      )}
      {yourProfile === "logo" && <Logo setYourProfile={setYourProfile} />}
    </div>
  );
};

export default Profile;
