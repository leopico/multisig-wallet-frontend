import React, { useContext, useEffect } from "react";
import WalletContext from "../../context/WalletContext";
import WalletAddress from "./WalletAddress";

const Wallet = () => {
  //context
  const { accounts, setAccounts } = useContext(WalletContext);
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    } else {
      return "Please install MetaMask or connect your wallet";
    }
  }

  useEffect(() => {
    async function accountsChanged() {
      window.ethereum.on("accountsChanged", async function () {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length) {
          setAccounts(accounts);
        } else {
          window.ethereum.reload();
        }
      });
    }
    accountsChanged();
  }, [setAccounts]);

  return isConnected ? (
    <div>
      <button type="button" className="btn btn-sm bg-black text-white">
        <i className="fa-solid fa-wallet me-2"></i>
        <WalletAddress />
      </button>
    </div>
  ) : (
    <button
      onClick={() => connectAccount()}
      type="button"
      className="btn btn-sm bg-black text-white"
    >
      <i className="fa-solid fa-wallet me-2"></i>connect
    </button>
  );
};

export default Wallet;
