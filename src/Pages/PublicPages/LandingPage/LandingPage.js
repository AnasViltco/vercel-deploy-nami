import React from "react";
import CardsLanding from "../CardsLanding/CardsLanding";
import DiscoverLanding from "../DiscoverLanding/DiscoverLanding";
import FooterLanding from "../FooterLanding/FooterLanding";
import FoundersCard from "../FoundersCard/FoundersCard";
import NavbarLanding from "../NavbarLanding/NavbarLanding";
import SellLanding from "../SellLanding/SellLanding";
import StartupLanding from "../StartupLanding/StartupLanding";
import Testimonials from "../Testimonials/Testimonials";
import "./LandingPage.scss";

function LandingPage() {
  return (
    <div className="col-sm-12 p-0">
      <NavbarLanding />
      <div className="col-sm-12 header_height">
        <div className="col-sm-12 pr-0">
          <div className="row">
            <div className="col-sm-6 m-auto padding_nami_landing">
              <div className="col-sm-12 ">
                <p>600+ successful deals</p>
                <h1 className="heading_color_landing">
                  <b>
                    Everything you need to buy and sell startups. No fees. No
                    hassle. Total anonymity.
                  </b>
                </h1>
                <p className="subheading_landing">
                  Join 150,000+ entrepreneurs buying and selling startups on the
                  world’s #1 acquisition marketplace. Get free and instant
                  access to 120,000+ trusted buyers. Big or small, get your
                  startup acquired at the maximum price in as little as 30 days.
                </p>
              </div>
              <div className="col-sm-12">
                <span>
                  {" "}
                  <button
                    className="btn btn-outline-gray button_join_border btn-lg fontSizejoin1 p-3 px-5"
                    type="submit"
                  >
                    Join Now <i className="fas fa-arrow-right"></i>
                  </button>
                </span>
                <span>
                  {" "}
                  <button
                    className="btn btn-outline-gray button_join_border btn-lg fontSizejoin2 ml-3 p-3 px-5"
                    type="submit"
                  >
                    Watch Now <i className="fas fa-arrow-right"></i>
                  </button>
                </span>
              </div>
            </div>
            <div className="col-sm-6 pr-0 text-right">
              <img
                src="../images/landing.png"
                className="img-fluid img_height"
              />
            </div>
          </div>
        </div>
      </div>
      <CardsLanding />
      <StartupLanding />
      <DiscoverLanding />
      <SellLanding />
      <Testimonials />
      <FoundersCard />
      <FooterLanding />
    </div>
  );
}

export default LandingPage;
