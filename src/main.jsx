import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "./index.css";
import { GlobalStateProvider } from "./Layout/GlobalState.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Routes.jsx";
import { ToastProvider } from "./GlobalContext/GlobalToast.jsx";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <GlobalStateProvider>
        <ToastProvider>
          <RouterProvider router={router}></RouterProvider>
        </ToastProvider>
      </GlobalStateProvider>
    </ChakraProvider>
  </StrictMode>
);
