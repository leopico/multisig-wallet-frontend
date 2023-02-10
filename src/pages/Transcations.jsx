import React, { useContext, useEffect, useState } from "react";
import Master from "./layouts/Master";
import Web3Modal from "web3modal";
import { ethers, formatEther } from "ethers";
import { contractAddress } from "../components/Constant";
import { contractAbi } from "../components/Constant";
import FetchDataContext from "../context/FetchDataContext";
import Approve from "../components/Approve_Revoke_Execute/Approve";
import Execute from "../components/Approve_Revoke_Execute/Execute";
import Revoke from "../components/Approve_Revoke_Execute/Revoke";

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

const Transcations = () => {
  const { required } = useContext(FetchDataContext);
  //hooks
  const [alltrans, setAllTrans] = useState([]);
  // console.log(alltrans);
  const [Loader, setLoader] = useState(false);

  const getTrans = async () => {
    try {
      setLoader(true);
      const contract = await connectWithContract();
      const Transtions = [];
      for (let i = 0; i <= 10; i++) {
        let txId = 4 - i;
        // console.log(txId);
        if (txId < 0) {
          break;
        }
        const tx = await contract.transcations(txId);
        const numberOfConfirm = tx.numberOfconfirmation;
        const confirmNum = numberOfConfirm.toString();
        const Value = tx.value;
        const val = formatEther(Value);
        Transtions.push({
          txId,
          to: tx.to,
          amount: val,
          data: tx.data,
          exe: tx.executed,
          numberOfConfirmation: confirmNum,
        });
      }
      // console.log(Transtions);
      setAllTrans(Transtions);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrans();
  }, []);

  return (
    <Master>
      <h4 className="text-black">Transcations</h4>
      {Loader ? (
        <div className="d-flex justify-content-center align-item-center p-2">
          <div
            className="spinner-border spinner-border-lg mb-1 text-white"
            role="status"
            aria-hidden="true"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <table className="table text-black">
          <thead>
            <tr>
              <th scope="col">txId</th>
              <th scope="col">data</th>
              <th scope="col">To</th>
              <th scope="col">no: of confirmed</th>
              <th scope="col">Amount</th>
              <th scope="col">executed</th>
            </tr>
          </thead>
          <tbody>
            {alltrans.map((d) => (
              <tr key={d.txId}>
                <td>{d.txId}</td>
                <td>{d.data}</td>
                <td>{d.to.slice(0, 5) + "..." + d.to.slice(38)}</td>
                <td>
                  <b>{d.numberOfConfirmation}</b> of <b>{required}</b>
                </td>
                <td>
                  {d.amount} <b>ETH</b>
                </td>
                <td>{d.exe}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="my-5">
        <div className="my-2">
          <Approve />
        </div>
        <div className="my-2">
          <Execute />
        </div>
        <div className="my-2">
          <Revoke />
        </div>
      </div>
    </Master>
  );
};

export default Transcations;
