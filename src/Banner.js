import React from "react";
import "./Banner.css";
function Banner() {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://t4.ftcdn.net/jpg/06/22/10/13/360_F_622101352_ECPmbwGNSiIT1UrbocmVw3slaMT61p9v.jpg')`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            `this is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is testthis is test`,
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeButtom" />
    </header>
  );
}

export default Banner;
