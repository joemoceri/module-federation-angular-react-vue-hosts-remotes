import React, { useEffect, useRef } from "react";
import { mount } from "reactRemoteApp/reactRemoteApp";
import "./ReactRemoteApp.css";

const ReactRemoteApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current); 
  }, []);

  
  return <div className="react-remote-app" ref={ref} />;
};

export default ReactRemoteApp;