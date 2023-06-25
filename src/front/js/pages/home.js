import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Loginsignpop from "../component/loginsignpop";
import SignupForm from "../component/loginsignform";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div>I'm a little teapot...</div>
    </>
  );
};
