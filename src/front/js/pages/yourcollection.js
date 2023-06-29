import React, { useContext, useEffect, useState } from "react";
import Fileupload from "../component/fileupload";
import Imagecard from "../component/imagecard";

import "../../styles/your_collection.css";
import { Context } from "../store/appContext";



export const Yourcollection = () => {
  const [pieces, setPieces] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.rehydrate();
    fetch(process.env.BACKEND_URL + "/api/user/pieces", {
      headers: {
        Authorization: `Bearer ${store.token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => setPieces(data.pieces));
  }, []);

  return (
    <>
      <div className="your-collection-container">
        <div className="row">
          <div className="file-uploader-container col-sm-3">
            <Fileupload />
          </div>
        </div>
        <div className="row d-flex flex-row justify-content-around">
          {pieces?.map((piece) => (
            <div className="image-card-container">
              <Imagecard imageUrl={piece.filename} name={piece.user?.name}/>
            </div>
          ))}
          {/*  */}
        </div>
      </div>
    </>
  );
};
