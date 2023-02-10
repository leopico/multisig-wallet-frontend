import React, { useContext } from "react";
import FetchDataContext from "../context/FetchDataContext";
import Master from "./layouts/Master";
import { contractAddress } from "../components/Constant";

const Information = () => {
  const { deployedAddress, owners, required } = useContext(FetchDataContext);
  return (
    <Master>
      <h4 className="text-black">Information</h4>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg">
            <h6 className="text-black">Overview</h6>
            <div className="card border-black mb-3">
              <div>
                <span className="badge bg-success float-end m-1">Goerli</span>
              </div>
              <div className="card-body text-black">
                <small className="card-title d-block">
                  <b>Contract Address</b>
                </small>
                <small className="card-text d-block my-2">
                  {contractAddress}
                </small>
                <hr />
                <small className="card-title d-block">
                  <b>deployed address</b>
                </small>
                <small className="card-text d-block my-2">
                  {deployedAddress}
                </small>
                <hr />
                <small className="card-title">
                  <b>Owners of addresses</b>
                </small>
                <div className="my-2">
                  {owners.map((d) => {
                    return (
                      <small key={d} className="card-text d-block my-2">
                        {d}
                      </small>
                    );
                  })}
                  <div>
                    <small className="card-title">
                      <b>Have to confirm</b>
                    </small>
                    <div>
                      <span className="badge bg-success p-1">
                        <span className="me-1">confirm</span>
                        <span className="badge bg-black">
                          {required}/{owners.length}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Master>
  );
};

export default Information;
