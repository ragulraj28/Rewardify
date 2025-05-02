import React, { useState } from "react";
import ConfirmationPage from "./ConfirmationPage";
import PreparingPage from "./PreparingPage";
import PackedPage from "./PackedPage";
import CompletedPage from "./CompletedPage";
import "./Orders.css";

const OrderTabs = () => {
  const [activeTab, setActiveTab] = useState("confirmation");

  return (
    <div className="orders-container">
      <div className="tabs">
        {["confirmation", "preparing", "packed", "completed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {activeTab === "confirmation" && <ConfirmationPage />}
        {activeTab === "preparing" && <PreparingPage />}
        {activeTab === "packed" && <PackedPage />}
        {activeTab === "completed" && <CompletedPage />}
      </div>
    </div>
  );
};

export default OrderTabs;
