import React from "react";
import pic from "../Images/foodpexel.jpeg";
import "./ResponsiveTask.css";

export const ResponsiveTask = () => {
  return (
    <>
      <h1>Sample Project</h1>
      <div className="topdiv">
        <div className="ecahDiv">
          <h1>Food Service</h1>

          <img className="imgStyle" src={pic} alt="Italian Trulli"></img>
          <p>
            Experience fine dining at the comfort of your home. All our orders
            are carefully packed and arranged to give you the nothing less than
            perfect.
          </p>
        </div>
        <div className="ecahDiv">
          <h1>goods Service</h1>
          <img className="imgStyle" src={pic} alt="Italian Trulli"></img>
          <p>
            Experience fine dining at the comfort of your home. All our orders
            are carefully packed and arranged to give you the nothing less than
            perfect.
          </p>
        </div>
        <div className="ecahDiv">
          <h1>Coyni Service</h1>
          <img className="imgStyle" src={pic} alt="Italian Trulli"></img>
          <p>
            Experience fine dining at the comfort of your home. All our orders
            are carefully packed and arranged to give you the nothing less than
            perfect.
          </p>
        </div>
        <div className="ecahDiv">
          <h1> Service</h1>
          <img className="imgStyle" src={pic} alt="Italian Trulli"></img>
          <p>
            Experience fine dining at the comfort of your home. All our orders
            are carefully packed and arranged to give you the nothing less than
            perfect.
          </p>
        </div>
      </div>
    </>
  );
};
