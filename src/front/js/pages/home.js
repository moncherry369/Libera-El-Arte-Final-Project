import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Loginsignpop from "../component/loginsignpop";
import SignupForm from "../component/loginsignform";
import Fileupload from "../component/fileupload";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div>
        <Fileupload />
      </div>
    </>
  );
};
