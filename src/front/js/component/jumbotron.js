import React from "react";

function Jumbotron() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="jumbotron-container">
          <div className="jumbo-logo">
            <img
              className=""
              href="#top"
              src="https://i.ibb.co/v3992Zz/lea-logo.jpg"
              id="jumbo-logo-img"
            />
            <h2 id="jumbo-logo-text">Libera El Arte</h2>
          </div>
          <p className="mission-statement">
            “Libera El Arte” translates to liberate the art. This is the core
            value of L.E.A. <br/>We look forward to providing you the platform to
            showcase your collections and works with full freedom of expression.
            <br/>Get recognized by art exhibits that will value your unique
            creativity.
          </p>
          <button className="jumbo-btn">
            Find out more about our mission...
          </button>
        </div>
      </div>
      <style>
        {`
        body {
            font-family: 'Roboto';
        }
        .jumbotron{
            background-color: #e77577;
            width: 100%;
            hieght: auto;
            text-align: center;
            margin: auto;
            padding-left: 5em;
            padding-right: 5em;
            padding-bottom: 2em;
            padding-top: 2em;
        }
        .mission-statement{
            font-size: 24px;
        }
        #jumbo-logo-img{
            width: 100px;
            hieght: 100px;
            border-radius: 50%;
        }
        .jumbo-btn{
            border: none;
            background-color: #e77577;
        }
        `}
      </style>
    </>
  );
}
export default Jumbotron;
