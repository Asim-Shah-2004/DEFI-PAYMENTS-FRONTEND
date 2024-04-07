import { useState } from "react";

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
  const [walletAddress, setWalletAddress] = useState(""); // Destructure useState correctly

  return (
    <>
      <button onClick={() => requestAccounts(setWalletAddress)}>Connect to wallet</button>
      <div>
        <h3>Wallet Address: {walletAddress}</h3>
      </div>
    </>
  );
};

export default App;
