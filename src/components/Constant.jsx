import Contract from "../artifacts/contracts/multisig.sol/MultisigWallet.json";

export const contractAddress = "0xFFEB785f93d50706d8CD9c95988E47CfcbcB3b9c";
export const contractAbi = Contract.abi;

const first = contractAddress.slice(0, 5);
const second = contractAddress.slice(39);
export const contractAdd = first + "..." + second;
