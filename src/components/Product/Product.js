import React from "react";
import { Link } from "react-router-dom";
import PurchasePage from "../PurchasePage/PurchasePage";
// Importing css file
import "./Product.css";

const product = (props) => {
  const { img, name, Price, about } = props.product;

  return (
    <div>
      <div className="container">
        <div className="card">
          <img src={img} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p>{about}</p>
            <h5>Price:${Price}</h5>
            <Link to="/purchase">
              <button className="btn btn-primary">Purchase</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default product;
