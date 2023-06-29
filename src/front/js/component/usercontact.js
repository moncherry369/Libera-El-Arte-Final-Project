import React from "react";


const Usercontact = (props) => {
  return (
    <>
      <div className="user-contact-container">
        <h1>{props?.user?.name}</h1>
        <a href={`mailto:${props?.user?.email}`}>
          <h2>{props?.user?.email}</h2>
        </a>
       
      </div>
    </>
  );
};
export default Usercontact;
