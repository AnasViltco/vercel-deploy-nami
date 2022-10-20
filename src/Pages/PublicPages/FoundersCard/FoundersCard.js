import React from "react";
import "./FoundersCard.scss";

function FoundersCard() {
  return (
    <div className="col-sm-12 pt-5 mt-5">
      <div className="container background_color_founder pt-5 pb-5">
        <div className="col-sm-12 text-center pt-5">
          <h1 className="color_h1">
            <b>
              {" "}
              Join over 150,000 founders <br /> and buyers already doing <br />{" "}
              business on MicroAcquire{" "}
            </b>
          </h1>
          <button
            className="btn btn-outline-gray button_join_border btn-lg fontSizejoin1 mt-5 mb-5 p-3 px-5"
            type="submit"
          >
            Join Now <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoundersCard;
