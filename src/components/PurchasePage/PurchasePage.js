import React from "react";

const PurchasePage = () => {
  return (
    <div>
      <div className="input-group mb-1 p-3">
        <span className="input-group-text">First and last name</span>
        <input type="text" aria-label="First name" className="form-control" />
        <input type="text" aria-label="Last name" className="form-control" />
      </div>
      <div className="mb-1 p-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="p-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Your Address
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary">
        Submit
      </button>
    </div>
  );
};

export default PurchasePage;
