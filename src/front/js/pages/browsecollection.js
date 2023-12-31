import React, { useState, useEffect, useContext } from "react";
import Imagecard from "../component/imagecard";
import "../../styles/your_collection.css";
import { Context } from "../store/appContext";

export const Browsecollection = () => {
  const [pieces, setPieces] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.rehydrate();
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
              <Imagecard imageUrl={piece.filename} name={piece.user?.name}/>
            </div>
          ))}
          {/*  */}
        </div>
      </div>
      <style>
        {`
        .collection-container {
          margin-top: 2em;
        }
        `}
      </style>
    </>
  );
};
