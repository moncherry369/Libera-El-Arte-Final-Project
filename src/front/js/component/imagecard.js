import React, { useState, useEffect } from "react";


const Imagecard = (props) => {
  

  return (
    <>
      <div className="card-container">
        <div className="img-container">
          {props.imageUrl ? (
          <img src={props.imageUrl} alt="File" />
          ) : (
            <span>Loading image...</span>
          )}
        </div>
        <div className="img-card-text">
          Created by: {props.name}
        </div>
      </div>

      <style>
        {`
        .card-container {
          margin: 7px;
          width: 275px;
          
          text-align: center;
          background-color: white;
          border: 1px solid;
          border-radius: .5em;
          justify-self: center;
        }
        .img-container img{
          width: 100%;
          height: auto;
        }
        .img-card-text {
          font-size: 10px;
        }
        `}
      </style>
    </>
  );
};
export default Imagecard;
