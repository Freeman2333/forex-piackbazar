import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import { store, persistor } from "./store/store";
import "react-toastify/dist/ReactToastify.css";
import "swiper/swiper.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
