import { useState } from "react";
import { BrowserProvider } from "ethers"; 

export default function WalletButton() {
  const [account, setAccount] = useState(null);

  async function connectWallet() {
    if (window.ethereum) {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]); // Store the first connected account
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask.");
    }
  }

  function disconnectWallet() {
    setAccount(null); // Clear the stored wallet address
  }

  return (
    <button onClick={account ? disconnectWallet : connectWallet} className="wallet-button">
      {account ? `Disconnect (${account.slice(0, 6)}...${account.slice(-4)})` : "Connect Wallet"}
    </button>
  );
}