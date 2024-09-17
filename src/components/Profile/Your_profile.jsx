import React, { useEffect } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";

const Your_profile = ({ setYourProfile }) => {
  useEffect(() => {
    const input = document.querySelector("#phone");
    intlTelInput(input, {
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js",
    });
  }, []);

  return (
    <div>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Your Profile</h4>
        <form className="needs-validation" novalidate="">
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder=""
                required
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder=""
                required
              />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <div className="input-group has-validation">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  required
                />
                <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="col-12 mb-4">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
                required
              />
              <div className="invalid-feedback">
                Please enter a valid email address.
              </div>
            </div>
          </div>

          <div className="col-12 mb-4">
            <label htmlFor="phone" className="form-label phone-label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="form-control"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="col-6 mb-4">
            <label htmlFor="website" className="form-label">
              Website URL
            </label>
            <input
              type="url"
              className="form-control"
              id="website"
              placeholder="www.example.com"
              required
            />
            <div className="invalid-feedback">
              Please enter a valid website address.
            </div>
          </div>
          <button class="button-30 submit-btn" role="button">
            <span class="text">Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Your_profile;
