import React from "react";
import "./FooterLanding.scss";

function FooterLanding() {
  return (
    <div className="col-sm-12 pt-5 pb-5">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-sm">
            <h6 className="mb-3">
              <b>Sellers</b>
            </h6>
            <p className="mb-3 footer_sub">
              <b>List Your Startup</b>
            </p>
            <p className="mb-3 footer_sub">
              <b>Get help selling</b>
            </p>
          </div>
          <div className="col-sm">
            <h6 className="mb-3">
              <b>Buyers</b>
            </h6>
            <p className="mb-3 footer_sub">
              <b>Browse Startups</b>
            </p>
            <p className="mb-3 footer_sub">
              <b>Pricing</b>
            </p>
            <p className="mb-3 footer_sub">
              <b>Instant Slack Alerts</b>
            </p>
          </div>
          <div className="col-sm">
            <h6 className="mb-3">
              <b>Company</b>
            </h6>
            <p className="mb-3 footer_sub">
              <b>About us</b>
            </p>
            <p className="mb-3 footer_sub">
              <b>Resources</b>
            </p>
            <p className="mb-3 footer_sub">
              <b>Testimonials</b>
            </p>
            <p className="mb-3 footer_sub">
              <b>Legal</b>
            </p>
          </div>
          <div className="col-sm">
            <h6 className="mb-3">
              <b>Address info</b>
            </h6>
            <p className="mb-3 footer_sub">
              <b>951 Mariners Island Blvd</b>
            </p>
            <p className="mb-3 footer_sub">
              <b>Suite 300 PMB3008</b>
            </p>
            <p className="mb-3 footer_sub">
              <b>San Mateo, CA 94404</b>
            </p>
          </div>
          <div className="col-sm">
            <h6 className="mb-3">
              <b>Contact us</b>
            </h6>
            <p className="mb-3 footer_sub">
              <b>1-800-994-8014</b>
            </p>
            <p className="mb-3 footer_sub">
              <b>support@microacquire.com</b>
            </p>
          </div>
        </div>
        <div className="col-sm-12 pt-5 p-0">
          <div className="row">
            <div className="col-sm-6 ">
              <div className="col-sm-12 p-0">
                <img className="img-fluid" src="../images/logo.png" />
                <p className="mb-1 mt-3 font_footer">
                  &copy; MicroAcquire, Inc. 2022. All rights reserved
                </p>
                <p className="mb-2 font_footer">
                  {" "}
                  MicroAcquire Brokerage Services, Inc., CA DRE # 01862195{" "}
                </p>
              </div>
            </div>
            <div className="col-sm-6 m-auto text-right">
              <span className="font_icon">
                <i className="fab fa-twitter"></i>
              </span>
              <span className="font_icon">
                <i className="fab fa-linkedin-in"></i>
              </span>
              <span className="font_icon">
                <i className="fab fa-facebook"></i>
              </span>
              <span className="font_icon">
                <i className="fab fa-youtube"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterLanding;
