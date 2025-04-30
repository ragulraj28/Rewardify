import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PopupProvider } from "./utils/popupContext/PopupContext.jsx";
import { Provider } from "react-redux";
import store from "./utils/store/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PopupProvider>
        <App />
      </PopupProvider>
    </Provider>
  </StrictMode>
);
