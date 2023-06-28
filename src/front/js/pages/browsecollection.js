import React, { useState, useEffect } from "react";
import Imagecard from "../component/imagecard";
import "../../styles/your_collection.css";

export const Browsecollection = () => {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/pieces")
      .then((resp) => resp.json())
      .then((data) => setPieces(data.pieces));
  }, []);

  return (
    <>
      <div className="collection-container">
        <div className="row d-flex flex-row justify-content-around">
          {pieces.map((piece) => (
            <div className="image-card-container">
              <Imagecard imageUrl={piece?.filename} />
            </div>
          ))}
          {/*  */}
        </div>
      </div>
    </>
  );
};
