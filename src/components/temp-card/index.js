import React from "react";

export default function TempCard(props) {
  return (
    <div className="cardContainer">
      <div className="card">
        <p className="city">{props.city}</p>
        <p className="weather">{props.description}</p>
        {/* <svg
          className="weather"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          width="50px"
          height="50px"
          viewBox="0 0 100 100"
          xmlSpace="preserve"
        ></svg> */}
        <p className="minHeading">{props.day}</p>
        <p className="temp">{props.temp}</p>
        <div className="minmaxContainer">
          <div className="min">
            <p className="minHeading">Min</p>
            <p className="minTemp">{props.tempMin}</p>
          </div>
          <div className="max">
            <p className="maxHeading">Max</p>
            <p className="maxTemp">{props.tempMax}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
