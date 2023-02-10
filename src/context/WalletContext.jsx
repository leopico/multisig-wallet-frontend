import React, { createContext, useState } from "react";

const WalletContext = createContext();

export const WalletContextProvider = (props) => {
  const [accounts, setAccounts] = useState([0]);
  return (
    <WalletContext.Provider
      value={{ accounts: accounts, setAccounts: setAccounts }}
    >
      {props.children}
    </WalletContext.Provider>
  );
};

export default WalletContext;
