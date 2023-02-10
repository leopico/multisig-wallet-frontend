import React, { useContext, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { ethers, parseEther } from "ethers";
import Web3Modal from "web3modal";
import { contractAddress } from "./Constant";
import { contractAbi } from "./Constant";
import Spinner from "./Spinner";
import MessageContext from "../context/MessageContext";

const connectWithContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.BrowserProvider(connection);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

const SendPopup = () => {
  //Context
  const { setMessage } = useContext(MessageContext);

  //for popup
  const contentStyle = { background: "#fff" };
  const overlayStyle = { background: "rgba(0,0,0,0.5)" };

  //Hooks
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [Loader, setLoader] = useState(false);

  const submitHandle = async () => {
    try {
      setLoader(true);
      const add = address;
      const amt = amount;
      const amountEther = parseEther(amt);
      const data = "0x";
      const contract = await connectWithContract();
      const submitData = await contract.submit(add, amountEther, data);
      await submitData.wait();
      setLoader(false);
      setMessage({ type: "success", message: "Already deposited" });
    } catch (error) {
      setLoader(false);
      setMessage({ type: "error", message: "Please try properly" });
      console.log(error);
    }
  };

  return (
    <Popup
      trigger={<span className="btn btn-sm btn-black">send</span>}
      {...{
        contentStyle,
        overlayStyle,
      }}
    >
      <label className="text-black">Enter to address</label>
      <input
        onChange={(e) => setAddress(e.target.value)}
        type="text"
        className="form-control"
        placeholder="Enter address"
        required
      />
      <label className="text-black">Enter amount</label>
      <input
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        className="form-control"
        placeholder="amount"
        required
      />
      <button onClick={() => submitHandle()} className="btn btn-black mt-2">
        {Loader && <Spinner />} Submit
      </button>
    </Popup>
  );
};

export default SendPopup;
