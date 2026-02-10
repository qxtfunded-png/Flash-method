
import React from 'react';

const content = {
  1: {
    title: "The Toolbelt: Wallets",
    subtitle: "A-Z setup for Mainnet interaction.",
    body: `Before you touch any code, you must have your tools. We do not use fake test wallets; we use real ones.

### 1. MetaMask (BSC, ETH, AVAX)
- Install from metamask.io. 
- Create a new wallet. Save your 12 words.
- Go to **Chainlist.org** and add 'Binance Smart Chain' (BSC). This is our main target.

### 2. Trust Wallet (TRON)
- Best for mobile users. Download Trust Wallet from the App Store.
- It supports TRX (TRC-20) out of the box. 
- You will use this to receive and send TRON-based Flash USDT.

### 3. Gas Faucets
Every deployment costs money. To make it $0:
- Search 'BSC Mainnet Faucet' on Google.
- Paste your wallet address. They send 0.0001 BNB (2 cents). This is enough to deploy our contract!`,
    tags: ["TOOLS", "A-Z SETUP", "WALLETS"]
  },
  2: {
    title: "BSC (BEP-20) Method",
    subtitle: "A-Z Guide for Binance Smart Chain.",
    body: `This is the most popular and cheapest method ($0 gas).

### STEP A: THE PREPARATION
Ensure your MetaMask is on **Binance Smart Chain** and you have a tiny bit of BNB (from the faucet).

### STEP B: THE CODE
Go to the **Code Vault**, find the **BSC (BEP-20)** section, and click **Copy Source Code**.

### STEP C: REMIX IDE
1. Open **remix.ethereum.org** in Chrome.
2. Create a file: \`FlashBSC.sol\`.
3. Paste the code.
4. Go to **Compiler** (3rd icon) and click **Compile**.
5. Go to **Deploy** (4th icon). Change 'Environment' to **Injected Provider**.
6. Click **Deploy**. Confirm in MetaMask.

### STEP D: IMPORT
Copy the contract address from Remix. In MetaMask, click 'Import Token' and paste it. You now have 1,000,000 USDT on BSC Mainnet!`,
    tags: ["BSC", "BEP-20", "100% FREE"]
  },
  3: {
    title: "TRON (TRC-20) Method",
    subtitle: "A-Z Guide for Tron Network.",
    body: `Tron is extremely fast and notifications are instant on Trust Wallet.

### STEP A: THE TOOL
Use **TronIDE** or the **TronScan Contract Tool**. You will need **TronLink** or **Trust Wallet** connected.

### STEP B: GAS
You need approx 5-10 TRX for gas. You can get this from a 'Tron Faucet' or small community airdrops. 

### STEP C: DEPLOYMENT
1. Copy the **TRC-20 Code** from our Code Vault.
2. Paste it into the TronScan compiler.
3. Deploy it to the **Mainnet**.
4. The contract will return an address starting with 'T...'.

### STEP D: THE RESULT
Import this address into Trust Wallet. It will show 'Tether USD (USDT)' with the logo and a balance of 1,000,000. Any transfer to another Trust Wallet will show a real notification.`,
    tags: ["TRON", "TRC-20", "TRUST WALLET"]
  },
  4: {
    title: "ETH/AVAX Method",
    subtitle: "A-Z Guide for High-End Chains.",
    body: `These methods are identical to BSC but run on different networks.

### FOR ETHEREUM (ERC-20)
1. Use the **ERC-20 Code** from the Vault.
2. Use Remix IDE on **Ethereum Mainnet**.
3. *Note: Ethereum Gas is expensive (approx $10-$30). Only use this if you have real ETH.*

### FOR AVALANCHE (AVAX)
1. Use the **AVAX Code** from the Vault.
2. Add Avalanche Network via Chainlist.org.
3. Deploy via Remix using 'Injected Provider'.
4. Gas is cheap on AVAX ($0.10), often covered by small faucets.`,
    tags: ["ETH", "AVAX", "ADVANCED"]
  },
  5: {
    title: "Security & Ethics",
    subtitle: "How to stay safe and responsible.",
    body: `Now that you are a Master of Flash Protocols, remember:

- **Visibility**: Your tokens are on the Mainnet. Everyone can see them.
- **Liquidity**: There is NO money in these tokens. They are visual simulations for UI research.
- **Exchanges**: Never send these to Binance, Coinbase, or Kraken. They will be lost.
- **Fraud**: Using these tokens to scam people is strictly forbidden and illegal.

This academy is for educational purposes. Use your knowledge to audit contracts and understand how blockchain data works.`,
    tags: ["SECURITY", "ETHICS", "LEGAL"]
  }
};

interface Props {
  moduleId: number;
}

const ContentArea: React.FC<Props> = ({ moduleId }) => {
  const data = content[moduleId as keyof typeof content] || content[1];

  return (
    <main className="flex-grow overflow-y-auto p-4 md:p-12 bg-zinc-950 pb-32 md:pb-12">
      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
        <header className="border-l-4 border-emerald-500 pl-6 py-2">
          <div className="flex flex-wrap gap-2 mb-4">
            {data.tags.map(tag => (
              <span key={tag} className="text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded border border-emerald-500/20">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-6xl font-black text-white mb-2 leading-tight uppercase italic tracking-tighter">
            {data.title}
          </h1>
          <p className="text-sm md:text-lg text-zinc-500 font-bold uppercase tracking-widest">{data.subtitle}</p>
        </header>

        <article className="space-y-6">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-[2rem] p-6 md:p-10 whitespace-pre-wrap text-zinc-300 text-sm md:text-lg leading-relaxed font-sans shadow-2xl">
            {data.body}
          </div>
          
          <div className="flex items-center gap-4 p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <p className="text-xs text-zinc-500 font-medium">
              Complete each Master Class to understand the unique behavior of each network.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
};

export default ContentArea;
