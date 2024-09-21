/* eslint-disable react/prop-types */

import { createContext, useContext } from "react";
import { useToast } from "@chakra-ui/react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const toast = useToast();

  const showToast = ({
    title,
    description,
    status,
    duration = 3000,
    isClosable = true,
    variant = "left-accent",
    position = "top-right",
  }) => {
    toast({
      title,
      description,
      status,
      duration,
      isClosable,
      variant,
      position,
    });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useGlobalToast = () => {
  return useContext(ToastContext);
};
