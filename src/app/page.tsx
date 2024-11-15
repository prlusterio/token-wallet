"use client"
import { useState } from "react";
import WalletInfo from "./components/WalletInfo";
import WalletConnect from "./components/WalletConnect";

export default function Home() {
  const [account, setAccount] = useState<string>("");

  return (
    <div>
      <h1>Token Wallet</h1>
      {!account ? (
        <WalletConnect setAccount={setAccount} />
      ) : (
        <div>
          <WalletInfo account={account} />
        </div>
      )}
    </div>
  );
}
