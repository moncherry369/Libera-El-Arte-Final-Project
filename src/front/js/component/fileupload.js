import React, { useContext, useState } from "react";
import { json } from "react-router-dom";
import { Context } from "../store/appContext";

const Fileupload = () => {
  const [files, setFiles] = useState([]);
  const {state, actions} = useContext(Context);

  const handleFileChange = (ev) => {
    // console.log(ev.target.files);
    setFiles(ev.target.files);
    ev.stopPropagation();
  };

  const handleSubmit = () => {
    const formdata = new FormData();
    formdata.append("file", files[0]);
    fetch(process.env.BACKEND_URL + "/api/assets", {
      method: "POST",
      headers: {

      },
      body: formdata,
    }).then((response) => console.log(response));
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          <u>Upload your pieces here:</u>
        </label>
        <div className="choose-file-container">
          <input
            className="form-control"
            type="file"
            id="formFile"
            onChange={handleFileChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
        Upload
        </button>
      </div>
      <style>
        {`
        .mb-3 {
          justify-content: center;
          margin: auto;
          padding: 7px;
          text-align: center;
          border: 2px dashed #ffd872;
        }
        .form-label {
          font-size: 20px;
        }
        .choose-file-container {
          margin: auto;
        }
        .btn {
          background-color: #ffd872;
          color: #6c88c4;
          margin-top: .8em;
        }
        .btn:hover {
          color: #ffd872;
        }
        `}
      </style>
      {/* {typeof files} */}
    </>
  );
};
export default Fileupload;
