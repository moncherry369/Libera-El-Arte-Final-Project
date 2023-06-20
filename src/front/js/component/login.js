import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // Perform login validation here (e.g., making an API call)
    // You can replace the following code with your actual implementation
    if (email === 'example@example.com' && password === 'password') {
      alert('Login successful!');
      // Clear email and password fields
      setEmail('');
      setPassword('');
      // Close the modal
      setShowModal(false);
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button onClick={handleModalToggle}>Login</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalToggle}>
              &times;
            </span>
            <div className='login-title'>Login</div>
            <form onSubmit={handleLogin}>
              <label>
                Email:
                <br></br>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </label>
              <br />
              <label>
                Password:
                <br/>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
              <br />
              <div className='submit-login-btn'>
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>
      {`
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
          background-color: #fff;
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
  );
};

export default Login;