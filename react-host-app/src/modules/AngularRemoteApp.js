import React, { useEffect } from "react";
import { mount } from "angularRemoteApp/angularRemoteApp";
import "./AngularRemoteApp.css";

const AngularRemoteApp = () => {
  useEffect(() => {
    mount();  
  }, []);   
return <div className="angular-remote-app"><app-root></app-root></div>;
};

export default AngularRemoteApp;