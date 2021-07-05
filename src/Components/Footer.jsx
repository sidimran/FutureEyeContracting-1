import React from "react";
import "./Footer.css";
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
  return (
    <div className="main-footer">
      <div className="container-fluid">

      
        <div className="row">
          {/* Column1 */}
          <div className="col">
          <h6 className = "pt-5">Address</h6>
          <ul className = "list-unstyled">
            <li>#147, Shivashankar Block, Guddadahalli Main Road</li>
            <li>RT Nagar Post, Hebbal </li>
            <li>Bengaluru 560024</li>
          </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4 className = "pt-5">Future Eye Contracting</h4>
            <ul className="list-unstyled">
              <li></li>
              <li>Ajaz Ahmed </li>
              <li>Technical Manager</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4 className = "pt-5">GET IN TOUCH</h4>
            <ul className="list-unstyled">
              <li>futureeyeblr2020@gmail.com</li>
              <li><a href="https://api.whatsapp.com/send?phone=+919886831834"> <i className="fa fa-whatsapp text-light" aria-hidden="true"></i></a>   +91 9886831834</li>
              <li><a href="https://api.whatsapp.com/send?phone=+919482581834"> <i className="fa fa-whatsapp text-light" aria-hidden="true"></i></a>   +91 9482581834</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row bg-danger">
          <p className="col-sm  ">
            &copy;{new Date().getFullYear()} | All rights reserved |
            sidimran4455@gmail.com | 
              <a href="https://www.facebook.com/sid.imran.31"> <i className="fa fa-facebook-square text-secondary text-light" aria-hidden="true"></i></a> |
              <a href="https://www.linkedin.com/in/syed-mudassir-a3070082"> <i className="fa fa-linkedin-square  text-light" aria-hidden="true"></i></a> |
              <a href="https://api.whatsapp.com/send?phone=+918884189238"> <i className="fa fa-whatsapp text-light" aria-hidden="true"></i></a>
          </p>

    
        </div>
      </div>
    </div>
  );
}

export default Footer;
