import React, { useState } from "react";
import "../features/tabs.css";
import EmailSignUp from "./EmailSignUp";
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
      </div>  
      <div className="panels">
        <div className={`panel ${checkActive(1, "active")}`}>
          <EmailSignUp />
        </div>
        <div className={`panel ${checkActive(2, "active")}`}>
          <MobileSignup />
        </div>
      </div>  
    </>
  );
};

export default Tabs;
