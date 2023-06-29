import React, { useContext, useEffect } from "react";
import Usercontact from "../component/usercontact";
import { Context } from "../store/appContext";

export const Contact = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.rehydrate();
        
      }, []);
    return(
        <>
            <div className="user-contact-container">
                <Usercontact user={store.user}/>
            </div>
        </>
    )
}