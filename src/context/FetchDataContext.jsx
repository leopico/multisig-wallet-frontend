import React, { createContext, useEffect, useState } from "react";
import { ethers, formatEther } from "ethers";
import Web3Modal from "web3modal";
import { contractAddress } from "../components/Constant";
import { contractAbi } from "../components/Constant";

const connectWithContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.BrowserProvider(connection);
    const contract = new ethers.Contract(
      contractAddress,
      contractAbi,
      provider
    );
    return contract;
  } catch (error) {
    console.log(error);
  }
};

const FetchDataContext = createContext();
export const FetchDataContextProvider = (props) => {
  const [owners, setOwners] = useState([]);
  const [required, setRequired] = useState("");
  const [deployedAddress, setDeployedAddress] = useState("");
  const [contractBalance, setContractBalance] = useState("");

  const getOwners = async () => {
    try {
      const contract = await connectWithContract();
      const deployer = await contract.deployer();
      setDeployedAddress(deployer);

      const ownerAddresses = await contract.getOwners();
      setOwners(ownerAddresses);

      const confirm = await contract.required();
      const confirmReq = confirm.toString();
      setRequired(confirmReq);

      const balance = await contract.getContractBalance(contractAddress);
      const balanceEther = formatEther(balance);
      setContractBalance(balanceEther);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOwners();
  }, []);

  return (
    <FetchDataContext.Provider
      value={{
        deployedAddress,
        owners,
        required,
        contractBalance,
      }}
    >
      {props.children}
    </FetchDataContext.Provider>
  );
};

export default FetchDataContext;
