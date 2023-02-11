
# Multisig-wallet front end

This pj was demo multisig_wallet with react and ether.js frameword.


## Environment Variables

To run this project, you will need to add the following environment variables to constant.jsx of components folder after deployed your smart contract.

- Have to assign `contractAddress`.

- Have to assign `contractAbi`.

- Have to increase `+1` at (txId) variable of (getTrans) fn of Transcation.jsx of pages folder after you deposited to contract because of I not yet sync for deposite transcation (txId). 

## Demo

[deploy on vecel](https://multisig-wallet-frontend.vercel.app/)).

- Note --> You can not see on Transcation histories on the vercel deployment because of can not increase `+1` for txId.

## Acknowledgements

 - [react](https://reactjs.org/).
 - [ether.js](https://docs.ethers.org/v6/)


## Tech Stack


**Client:** React, react-router-dom and react-libiaries, Ethers.js

