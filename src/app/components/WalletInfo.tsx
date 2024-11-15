import { useEffect, useState } from "react";
import { ethers } from "ethers";

interface WalletInfoProps {
  account: string;
}

const WalletInfo: React.FC<WalletInfoProps> = ({ account }) => {
  const [ethBalance, setEthBalance] = useState<string>("");

  useEffect(() => {
    const fetchBalance = async () => {
      if (account) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        setEthBalance(ethers.utils.formatEther(balance));
      }
    };

    fetchBalance();
  }, [account]);

  return (
    <div>
      <p>Connected Wallet: {account}</p>
      <p>ETH Balance: {ethBalance} ETH</p>
    </div>
  );
};

export default WalletInfo;
