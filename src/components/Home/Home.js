import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import HomeDetail from "../HomeDetail/HomeDetail";
import img from "../../images/home-img.jpg";
// Importing css file
import "./Home.css";
import SearchBox from "../SearchBox/SearchBox";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="home-header">
        <h1 className="greeting">Planning For a Tour? We are Here !!</h1>
        <div className="home-container">
          <button type="button" className="btn btn-primary">
            LET'S MAKE A PLAN
          </button>
          <img className="img-fluid" src={img} alt="" />
        </div>
        <br />
        <h4>
          Tour Packages in BANGLADESH BANGLADESH has a thousand year old
          tradition Let's Explore the BANGLADESH!!
        </h4>
      </div>
      <Banner></Banner>
      <SearchBox></SearchBox>
      <h3 className="mt-5">All Our Services </h3>
      <div className="product-container">
        {products.slice(0, 6).map((product) => (
          <HomeDetail key={product.id} product={product}></HomeDetail>
        ))}
      </div>
    </div>
  );
};

export default Home;
