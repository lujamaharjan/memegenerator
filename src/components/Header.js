import React from "react";

function Header() {
  return (
    <div className="container-fluid" id="header">
      <div className="row">
        <div className="col-md-4 ">
          <img
            className="img-responsive img-fluid"
            src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
            alt="Problem?"
          />
        </div>
        <div className="col-md-8">
          <p
            className="text-white text-center"
            style={{ fontSize: "6vw", marginTop: "10vh" }}
          >
            Meme Generator
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
