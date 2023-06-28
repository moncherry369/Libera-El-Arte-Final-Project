import React, { useState, useEffect } from "react";


const Imagecard = () => {
  const [imageUrl, setImageUrl] = useState('');

  // useEffect(() => {
  //   const fetchImageUrl = async () => {
  //     try {
  //       const response = await fetch(`/api/assets/${filename}`);
  //       const data = await response.json();
  //       setImageUrl(data.url);
  //     } catch (error) {
  //       console.error('Error fetching image URL:', error);
  //     }
  //   };

  //   fetchImageUrl();
  // }, [filename]);

  return (
    <>
      <div className="card-container">
        <div className="img-container">
          {imageUrl ? (
          <img src={imageUrl} alt="File" />
          ) : (
            <span>Loading image...</span>
          )}
        </div>
        <div className="img-card-text">
          <p>This is a picture ... except not really cause yk...</p>
        </div>
      </div>

      <style>
        {`
        .card-container {
          margin: 7px;
          width: 275px;
          height: 300px;
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
        .img-card-text p {
          font-size: 12px;
        }
        `}
      </style>
    </>
  );
};
export default Imagecard;
