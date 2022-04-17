import Web3 from "web3";

async function getWalletAddress() {
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    return account;
  } catch (error) {
    return;
  }
}

//checking wallet is connected to website;
async function checkWallet() {
  // const web3 = new Web3(ethereum);
  const web3 = new Web3();
  const checkWalletConnection = await web3.eth.getAccounts();
  return checkWalletConnection.length > 0 ? true : false;
}
export { getWalletAddress, checkWallet };
