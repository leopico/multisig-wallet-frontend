import React, { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MessageContext = createContext();

export const MessageContextProvider = (props) => {
  const [message, setMessage] = useState({});

  useEffect(() => {
    switch (message.type) {
      case "success":
        toast.success(message.message);
        break;

      default:
        break;
      case "error":
        toast.error(message.message);
        break;
    }
  });

  return (
    <MessageContext.Provider
      value={{ message: message, setMessage: setMessage }}
    >
      {props.children}
      <ToastContainer />
    </MessageContext.Provider>
  );
};

export default MessageContext;

// for eg;
// const MessageContext = useContext(MessageContext);
// MessageContext.setMessage({ type: "success", message: "you already login" });
