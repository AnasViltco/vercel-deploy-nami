import React from "react";
import DiscoverCar from "./DiscoverCar/DiscoverCar";
import "./DiscoverLanding.scss";

function DiscoverLanding() {
  return (
    <div className="col-sm-12 pt-5 pb-5">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-sm-6 m-auto">
            <h3>
              <b>Discover your dream startup</b>
            </h3>
            <p>
              Search 1,000s of vetted startups to find your perfect match.
              Derisk potential acquisitions and project returns using key
              financial metrics. Be LOI-ready in as little as 30 days.
            </p>
            <p>
              <b>
                <span className="circle_size">
                  {" "}
                  <i className="far fa-circle"></i>{" "}
                </span>
                &nbsp;&nbsp;Evaluate 20+ financial metrics, including MRR, CAC,
                and ARR
              </b>
            </p>
            <p>
              <b>
                <span className="circle_size">
                  {" "}
                  <i className="far fa-circle"></i>{" "}
                </span>
                &nbsp;&nbsp;Get help to acquire with financing through Pipe.
              </b>
            </p>
            <p>
              <b>
                <span className="circle_size">
                  {" "}
                  <i className="far fa-circle"></i>{" "}
                </span>
                &nbsp;&nbsp;Easily create and send LOIs within the platform
              </b>
            </p>
            <p>
              <b>
                <span className="circle_size">
                  {" "}
                  <i className="far fa-circle"></i>{" "}
                </span>
                &nbsp;&nbsp;Easily create and send LOIs within the platform
              </b>
            </p>

            <button
              className="btn btn-outline-gray button_join_border mt-4 btn-lg fontSizejoin1 p-3 px-5"
              type="submit"
            >
              Tell me more <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          <div className="col-sm-6 pl-5 pr-5">
            <DiscoverCar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverLanding;
