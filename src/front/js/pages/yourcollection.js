import React from "react";
import Fileupload from "../component/fileupload";
import Imagecard from "../component/imagecard";

export const Yourcollection = () => {
  return (
    <>
      <div className="your-collection-container">
        <div className="row">
          <div className="file-uploader-container col-sm-3">
            <Fileupload />
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
            body {
                background-color: #6c88c4;
            }
            .file-uploader-container {
                margin: auto;
            }
            .your-collection-container{
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
