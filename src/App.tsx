import React from "react";
import "./styles/index.scss";
import MainRoutes from "./routes";
import LayoutContextProvider from "./contexts/LayoutContext";
import { ConfirmProvider } from "material-ui-confirm";

function App() {
  return (
    <LayoutContextProvider>
      <ConfirmProvider
        defaultOptions={{
          confirmationButtonProps: {
            color: "primary",
            variant: "contained",
          },
        }}
      >
        <div className="app-wrapper">
          <MainRoutes></MainRoutes>
        </div>
      </ConfirmProvider>
    </LayoutContextProvider>
  );
}

export default App;
