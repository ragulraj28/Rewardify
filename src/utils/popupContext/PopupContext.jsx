// src/context/PopupContext.jsx
import React, { createContext, useState, useContext } from "react";

const PopupContext = createContext();

const PopupProvider = ({ children }) => {

  const [popupContent, setPopupContent] = useState(null);

  const showPopup = (content) => {
    setPopupContent(content);
  };

  const hidePopup = () => {
    setPopupContent(null);
  };

  return (
    <PopupContext.Provider value={{ showPopup, hidePopup }}>
      {children}
      {popupContent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            {popupContent}
        </div>
      )}
    </PopupContext.Provider>
  );
};

const usePopup = () => {

  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;

};

export { PopupProvider, usePopup };