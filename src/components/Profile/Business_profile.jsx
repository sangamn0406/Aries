import React from "react";

const Business_profile = ({ setYourProfile }) => {
  return (
    <div>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Business Profile</h4>
        <form className="needs-validation" novalidate="">
          <div className="row g-3">
            <label for="business-type" className="form-label">
              Business type
            </label>
            <select
              class="form-select"
              id="business-type"
              aria-label="Default select example"
              style={{ marginTop: "0px" }}
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <div class="mb-0">
              <label for="exampleFormControlTextarea1" class="form-label">
                Business idea
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
              ></textarea>
            </div>

            <div className="business-bio d-flex gap-3">
              <div className="col-6">
                <label for="exampleDataList" class="form-label">
                  Datalist example
                </label>
                <input
                  class="form-control"
                  list="datalistOptions"
                  id="exampleDataList"
                  placeholder="Type to search..."
                />
                <datalist id="datalistOptions">
                  <option value="San Francisco" />
                  <option value="New York" />
                  <option value="Seattle" />
                  <option value="Los Angeles" />
                  <option value="Chicago" />
                </datalist>
              </div>
              <div className="col-6">
                <label for="Years" className="form-label">
                  Years
                </label>
                <select
                  class="form-select"
                  id="Years"
                  aria-label="Default select example"
                  style={{ marginTop: "0px" }}
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          <div className="business-bio d-flex gap-3 mt-3">
            <div className="col-6">
              <div class="mb-3">
                <label for="customers" class="form-label">
                  Customers
                </label>
                <textarea
                  class="form-control"
                  id="customers"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="col-6">
              <div class="mb-3">
                <label for="usp" class="form-label">
                  Unique Selling Point
                </label>
                <textarea class="form-control" id="usp" rows="3"></textarea>
              </div>
            </div>
          </div>
          <button className="button-30 submit-btn">Submit</button>
          <button
            className="button-30 submit-btn"
            style={{ marginLeft: "45%" }}
          >
            Enable Blogging
          </button>
        </form>
      </div>
    </div>
  );
};

export default Business_profile;
