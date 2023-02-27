import React, { useState } from "react";
import "../components/tabs.css";
import EmailSignUp from "./EmailSignUp";
import Signup from "./EmailSignUp";
import MobileSignup from "./MobileSignUp";

const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) => activeIndex === index ? className : "";
  return (
    <>
     <div className="tabs">
        <button
          className={`tab ${checkActive(1, "active")}`}
          onClick={() => handleClick(1)}
        >
          Email
        </button>
        <button
          className={`tab ${checkActive(2, "active")}`}
          onClick={() => handleClick(2)}
        >
          Mobile
        </button>
        {/* <button
          className={`tab ${checkActive(3, "active")}`}
          onClick={() => handleClick(3)}
        >
          Delivery &amp; Returns
        </button> */}
      </div>  
      <div className="panels">
        <div className={`panel ${checkActive(1, "active")}`}>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat ligula, feugiat at felis vitae, porttitor lacinia quam.</p> */}
          {/* <EmailSignUp /> */}
          <EmailSignUp />
        </div>
        <div className={`panel ${checkActive(2, "active")}`}>
          {/* <p>Nulla lobortis quis massa quis lobortis. Nullam porta semper lorem, vel efficitur augue rutrum quis. Suspendisse potenti.</p> */}
          <MobileSignup />
        </div>
        {/* <div className={`panel ${checkActive(3, "active")}`}>
          <p>Cras porta consectetur dolor porttitor fringilla. Cras vitae urna ac erat fermentum egestas. Donec egestas cursus scelerisque.</p>
        </div> */}
      </div>  
    </>
  );
};

export default Tabs;
