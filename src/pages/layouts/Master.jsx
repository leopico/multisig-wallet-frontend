import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Wallet from "../../components/wallet/Wallet";
import { contractAddress } from "../../components/Constant";
import { contractAdd } from "../../components/Constant";
import SendPopup from "../../components/SendPopup";

const Master = (props) => {
  const [copy, setCopy] = useState(true);
  const clickCopy = () => {
    setCopy(false);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto min-vh-100 bg-light">
          <div className="px-3 pt-3 pb-4">
            <h1 className="fs-4">
              <img
                src={Logo}
                alt="logo"
                style={{ width: "50px" }}
                className="pe-2"
              />
              <small className="text-black ms-1 d-none d-sm-inline">
                Multisig-wallet
              </small>
            </h1>
          </div>
          <hr />
          <div className=" px-3 pt-3 pb-4 ms-1 d-none d-sm-inline">
            <div className="text-center">
              <small className="text-black me-2">{contractAdd}</small>
              <CopyToClipboard text={contractAddress}>
                  <button onClick={() => clickCopy()}  className="btn p-1">
                    {copy ? (
                      <i className="fa-solid fa-clone text-black"></i>
                    ) : (
                      <i className="fa-regular fa-circle-check text-black"></i>
                    )}
                  </button>
              </CopyToClipboard>
            </div>
            <div className="d-block btn btn-sm bg-black text-white mt-4 p-0">
              <SendPopup />
            </div>
          </div>
          <hr />
          <ul className="text-black">
            <li>
              <Link to="/" className="nav-link link-active px-4 my-4">
                <i className="fa-solid fa-house me-2"></i>
                <span className="text-black ms-1 d-none d-sm-inline">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/assets" className="nav-link px-4 my-4">
                <i className="fa-regular fa-circle-check me-2"></i>
                <span className="text-black ms-1 d-none d-sm-inline">
                  Assets
                </span>
              </Link>
            </li>
            <li>
              <Link to="/transcations" className="nav-link px-4 my-4">
                <i className="fa-solid fa-right-left me-2"></i>
                <span className="text-black ms-1 d-none d-sm-inline">
                  Transcations
                </span>
              </Link>
            </li>
            <li>
              <Link to="/information" className="nav-link px-4 my-4">
                <i className="fa-solid fa-circle-info me-2"></i>
                <span className="text-black ms-1 d-none d-sm-inline">
                  Information
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <div className="container my-2">
            <div className="row">
              <div className="col-sm-8"></div>
              <div className="col-sm-4">
                <Wallet />
              </div>
            </div>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Master;
