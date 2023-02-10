import React, { useContext } from "react";
import SendPopup from "../components/SendPopup";
import FetchDataContext from "../context/FetchDataContext";
import Master from "./layouts/Master";
import { contractAdd } from "../components/Constant";

const Assets = () => {
  const { contractBalance } = useContext(FetchDataContext);
  return (
    <Master>
      <h4 className="text-black">Assets</h4>
      <table className="table text-black">
        <thead>
          <tr>
            <th scope="col">Contract Address</th>
            <th scope="col">Balance</th>
            <th scope="col">Submit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>{contractAdd}</b>
            </td>
            <td>
              {contractBalance}{" "}
              <small>
                <b>ETH</b>
              </small>
            </td>
            <td>
              <SendPopup />
            </td>
          </tr>
        </tbody>
      </table>
    </Master>
  );
};

export default Assets;
