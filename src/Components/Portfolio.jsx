import React, { Component } from "react";
import "./portfolio.css";
import App from "../App";
import 'bootstrap/dist/css/bootstrap.min.css';


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
              INFRASTRUCTURE
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col col-sm col-lg col-md col-xxl">
            <h1 className="aboutushead"> About us</h1>
            <p className="aboutus">
              <b>Specialist in :</b>Aluminius Glass - UPVC - PVC Doors Windows &
              Office Partition.
              <br /> Electrical Plumbing - A/C - TV Installations - POP
              -Stainless Steel - Mild Steet Works
            </p>
          </div>
        </div>
      </div>

      {/* <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">Footer Content</h5>
              <p>
                Here you can use rows and columns to organize your footer
                content.
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          <p>Email id : sidimran4455@gmail.com</p>
        </div>
      </footer> */}
{/* 

      <div class="d-flex flex-column fixed-bottom">
    <div class="wrapper flex-grow-2"></div>
    <footer></footer>
</div> */}

      {/* <div className="footer fixed-bottom ">
 <p>Footer</p>
</div> */}
    </>
  );
};

export default Portfolio;
