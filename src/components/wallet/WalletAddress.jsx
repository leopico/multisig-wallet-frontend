import React, { useContext } from "react";
import WalletContext from "../../context/WalletContext"; //this is form library

const WalletAddress = () => {
  //context
  const { accounts } = useContext(WalletContext);
  // console.log(accounts);

  var account = accounts[0];
  var firstName = account.slice(0, 5);
  var lastName = account.slice(39);
  const addr = firstName + "..." + lastName;

  return <>{addr}</>;
};

export default WalletAddress;
