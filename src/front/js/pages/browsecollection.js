import React from "react";
import Imagecard from "../component/imagecard";

export const Browsecollection = () => {
  return (
    <>
      <div className="collection-container">
        <div className="row">
          <div className="col-sm-3">
            <div className="card-holder">
                <Imagecard />
            </div>
          </div>
          <div className="col-sm-3">
            <Imagecard />
          </div>
          <div className="col-sm-3">
            <Imagecard />
          </div>
          <div className="col-sm-3">
            <Imagecard />
          </div>
        </div>
        {/* row 2 */}
        <div className="row">
          <div className="col-sm-3">
            <Imagecard />
          </div>
          <div className="col-sm-3">
            <Imagecard />
          </div>
          <div className="col-sm-3">
            <Imagecard />
          </div>
          <div className="col-sm-3">
            <Imagecard />
          </div>
        </div>
        {/* row2 3 */}
        <div className="row">
          <div className="col-sm-3">
            <Imagecard />
          </div>
          <div className="col-sm-3">
            <Imagecard />
          </div>
          <div className="col-sm-3">
            <Imagecard />
          </div>
          <div className="col-sm-3">
            <Imagecard />
          </div>
        </div>
      </div>
      <style>
        {`
          body{
              background-color: #6c88c4;
              overflow: none;
          }
          .collection-container{
              padding-top: 2em;
              padding-bottom: 2em;
          }
          .col-sm-3 {
              display: flex;
              justify-content: center;
              align-items: center;
          }
        `}
      </style>
    </>
  );
};
