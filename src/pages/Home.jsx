import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Master from "./layouts/Master";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Tooltip from "react-simple-tooltip";
import { contractAdd } from "../components/Constant";
import { contractAddress } from "../components/Constant";
import FetchDataContext from "../context/FetchDataContext";

const Home = () => {
  //context
  const { required, owners, contractBalance } = useContext(FetchDataContext);
  const [copy, setCopy] = useState(true);
  const usenavigate = useNavigate();

  const clickCopy = () => {
    setCopy(false);
  };

  const backToAssets = () => {
    usenavigate("/assets");
  };

  const backToTrans = () => {
    usenavigate("/transcations");
  };
  return (
    <Master>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg">
            <h6 className="text-black">Overview</h6>
            <div className="card border-black mb-3">
              <div>
                <span className="badge bg-success p-1 m-1">
                  Confirm{" "}
                  <span className="badge bg-black">
                    {required}/{owners.length}
                  </span>
                </span>
                <span className="badge bg-success float-end m-1">Goerli</span>
              </div>
              <div className="card-body text-black">
                <small className="card-title">
                  <b>Contract Address</b>
                </small>
                <small className="card-text d-block">
                  <span className="me-1">{contractAdd}</span>
                  <CopyToClipboard text={contractAddress}>
                    <Tooltip onClick={() => clickCopy()} content="copy">
                      <button className="btn p-1">
                        {copy ? (
                          <i className="fa-solid fa-clone text-black"></i>
                        ) : (
                          <i className="fa-regular fa-circle-check text-black"></i>
                        )}
                      </button>
                    </Tooltip>
                  </CopyToClipboard>
                </small>
                <small className="text-black">
                  Total balance - <b>{contractBalance} ETH</b>
                </small>
              </div>
              <div className="card-footer bg-transparent border-black">
                <span
                  onClick={() => backToAssets()}
                  className="d-block btn btn-sm bg-black text-white"
                >
                  View assets
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <h6 className="text-black">Transaction</h6>
            <div className="card border-black mb-3">
              <small className="card-header bg-transparent border-black text-black">
                Please go to Transcation
              </small>
              <div className="card-body text-black text-center my-3">
                <i className="fa-solid fa-right-left"></i>
              </div>
              <div className="card-footer bg-transparent border-black">
                <span
                  onClick={() => backToTrans()}
                  className="d-block btn btn-sm bg-black text-white"
                >
                  Transcations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Master>
  );
};

export default Home;
