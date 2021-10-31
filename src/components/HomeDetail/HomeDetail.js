import React from "react";
import { Link } from "react-router-dom";
const HomeData = (props) => {
  const { img, name, Price, about } = props.product;
  return (
    <div className="container">
      <div className="card">
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>{about}</p>
          <h6>Price:${Price}</h6>
          <Link to="/purchase">
            <button className="btn btn-primary"> Purchase</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeData;
