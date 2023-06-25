import React, { useState } from "react";
import Loginsignform from "./loginsignform";

const Loginsignpop = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    // Perform login validation here (e.g., making an API call)
    // You can replace the following code with your actual implementation
    if (email === "example@example.com" && password === "password") {
      alert("Login successful!");
      // Clear email and password fields
      setEmail("");
      setPassword("");
      // Close the modal
      setShowModal(false);
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div>
        <button id="toggleButton" onClick={handleModalToggle}>
          Login/Signup
        </button>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleModalToggle}>
                &times;
              </span>
              <Loginsignform />
            </div>
          </div>
        )}

        <style>
          {`
          #toggleButton {
            background-color: rgb(255, 216, 114);
            border: none;
            color: rgb(252, 98, 56);
            position: absolute;
            bottom: 0px;
            right: 0em;
            font-size: 13px;
            cursor: cell;
          }
          #toggleButton:hover {
            color: rgb(11, 9, 9);
          }
          .modal {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
          }

          .modal-content {
            background-color: rgb(255, 216, 114);
            padding: 20px;
            border-radius: 5px;
            max-width: 300px;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
          }

          .modal-content button{
            margin-top: 3px;
            margin: auto;
            font-size: 16px;
          }

          .close {
            position: absolute;
            top: 10px;
            right: 15px;
            cursor: pointer;
            transform: translateX(50%);
          }
        `}
        </style>
      </div>
    </>
  );
};

export default Loginsignpop;
