import React, { Component } from "react";
import "./portfolio.css";
import App from "../App";
import "bootstrap/dist/css/bootstrap.min.css";

const Portfolio = () => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-around main">
        <div className="row">
          <div className="col col-sm col-lg-auto ">
            <h1 className="heading">Future Eye Contracting</h1>

            <p id="description">
              Leaders in Quality
              <br />
              Technical AND
              <br />
              Management
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col col-sm col-lg col-md col-xxl">
            <h1 className="aboutushead"> About us</h1>
            <p className="aboutus">
              <b style={{color:'green'}}>Specialist in :</b>Aluminius Glass - UPVC - PVC Doors Windows &
              Office Partition.
              <br /> Electrical Plumbing - A/C - TV Installations - POP
              -Stainless Steel - Mild Steet Works
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
