import { useState } from "react";
import {ethers} from "ethers";

async function connectWallet(setWalletAddress) {
  if (typeof window.ethereum !== 'undefined') {
    await requestAccounts(setWalletAddress);
    const provider = new ethers.BrowserProvider(window.ethereum)
    console.log(provider);
  }
}

async function requestAccounts(setWalletAddress) {
  console.log("working");
  if (window.ethereum) {
    console.log("detected");

    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      console.log(accounts);
      setWalletAddress(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("please install metamask");
  }
}

const App = () => {
  const [walletAddress, setWalletAddress] = useState("");

  const handleConnectWallet = () => {
    connectWallet(setWalletAddress);
  };

  return (
    <>
      <button onClick={handleConnectWallet}>Connect to wallet</button>
      <div>
        <h3>Wallet Address: {walletAddress}</h3>
      </div>
    </>
  );
};

export default App;
