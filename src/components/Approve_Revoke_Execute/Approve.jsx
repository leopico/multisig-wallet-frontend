import React, { useContext, useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { contractAddress } from "../Constant";
import { contractAbi } from "../Constant";
import Spinner from "../Spinner";
import MessageContext from "../../context/MessageContext";

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

const Approve = () => {
  //context
  const { setMessage } = useContext(MessageContext);

  const [text, setText] = useState("");
  const [Loader, setLoader] = useState(false);

  //approveHandle
  const approveHandle = async () => {
    try {
      setLoader(true);
      const contract = await connectWithContract();
      const approveData = await contract.approve(text);
      await approveData.wait();
      setLoader(false);
      setMessage({ type: "success", message: "Already approved" });
    } catch (error) {
      setLoader(false);
      setMessage({ type: "error", message: "Please try properly" });
      // console.log(error);
    }
  };

  return (
    <div>
      <label className="me-2 text-black">
        <small>
          <b>txId</b>
        </small>
      </label>
      <input
        onChange={(e) => setText(e.target.value)}
        type="number"
        className="me-2"
      />
      <span
        onClick={() => approveHandle()}
        className="btn btn-sm btn-black me-2"
      >
        {Loader && <Spinner />} approve
      </span>
    </div>
  );
};

export default Approve;
