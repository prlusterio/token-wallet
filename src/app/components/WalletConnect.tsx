import { useState } from "react";

interface WalletConnectProps {
  setAccount: (account: string) => void;
}

const WalletConnect: React.FC<WalletConnectProps> = ({ setAccount }) => {
  const [error, setError] = useState<string | null>(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
        setError(null);
      } catch (err) {
        setError("Failed to connect wallet.");
      }
    } else {
      setError("MetaMask not detected.");
    }
  };

  return (
    <div>
      <button onClick={connectWallet} className="connect-wallet-button">
        Connect Wallet
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default WalletConnect;
