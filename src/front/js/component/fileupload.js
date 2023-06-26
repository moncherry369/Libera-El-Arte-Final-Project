import React, { useState } from "react";
import { json } from "react-router-dom";

const Fileupload = () => {
  const [files, setFiles] = useState([]);

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
      body: formdata,
    }).then((response) => console.log(response));
  };

  return (
    <>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
      <div class="mb-3">
        <label htmlFor="formFile" className="form-label">
          Default file input example
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          onChange={handleFileChange}
        />
      </div>
      {typeof files}
    </>
  );
};
export default Fileupload;
