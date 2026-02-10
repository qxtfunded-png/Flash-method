
import React, { useState } from 'react';

const networks = [
  {
    id: 'BEP20',
    name: 'BSC (BEP-20) Method',
    subtitle: 'Binance Smart Chain - $0 Cost Method',
    platform: 'Target: MetaMask + Remix IDE',
    color: 'text-emerald-500',
    bg: 'border-emerald-500/20',
    icon: 'fa-cube',
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title FlashFlow BSC Protocol
 * @dev Deploy on BSC Mainnet via Remix
 */
contract FlashUSDT_BSC {
    string public name = "Tether USD";
    string public symbol = "USDT";
    uint8 public decimals = 18;
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor(uint256 _supply) {
        totalSupply = _supply * 10 ** 18;
        balanceOf[msg.sender] = totalSupply;
        emit Transfer(address(0), msg.sender, totalSupply);
    }

    function transfer(address _to, uint256 _value) public returns (bool) {
        require(balanceOf[msg.sender] >= _value);
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
}`
  },
  {
    id: 'TRC20',
    name: 'TRON (TRC-20) Method',
    subtitle: 'Tron Network - Trust Wallet Optimized',
    platform: 'Target: TronScan / TronIDE',
    color: 'text-red-500',
    bg: 'border-red-500/20',
    icon: 'fa-diamond',
    code: `// TRC-20 Flash Protocol
// Deploy on TronScan or TronIDE (Solidity 0.5.10)
pragma solidity ^0.5.10;

contract FlashUSDT_TRX {
    string public name = "Tether USD";
    string public symbol = "USDT";
    uint8 public decimals = 6;
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor(uint256 _initialSupply) public {
        totalSupply = _initialSupply * 10 ** 6;
        balanceOf[msg.sender] = totalSupply;
        emit Transfer(address(0), msg.sender, totalSupply);
    }

    function transfer(address _to, uint256 _value) public returns (bool) {
        require(balanceOf[msg.sender] >= _value);
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
}`
  },
  {
    id: 'ERC20',
    name: 'ETH (ERC-20) Method',
    subtitle: 'Ethereum Mainnet - High Fidelity',
    platform: 'Target: MetaMask + Remix IDE',
    color: 'text-cyan-500',
    bg: 'border-cyan-500/20',
    icon: 'fa-link',
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title FlashFlow Ethereum Protocol
 * @dev Standard ERC-20 Implementation
 */
contract FlashUSDT_ETH {
    string public name = "Tether USD";
    string public symbol = "USDT";
    uint8 public decimals = 6;
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor(uint256 _supply) {
        totalSupply = _supply * 10 ** 6;
        balanceOf[msg.sender] = totalSupply;
        emit Transfer(address(0), msg.sender, totalSupply);
    }

    function transfer(address _to, uint256 _v) public returns (bool) {
        require(balanceOf[msg.sender] >= _v);
        balanceOf[msg.sender] -= _v;
        balanceOf[_to] += _v;
        emit Transfer(msg.sender, _to, _v);
        return true;
    }
}`
  },
  {
    id: 'AVAX',
    name: 'AVAX C-Chain Method',
    subtitle: 'Avalanche - Ultra Fast Transfers',
    platform: 'Target: Core Wallet / MetaMask',
    color: 'text-rose-500',
    bg: 'border-rose-500/20',
    icon: 'fa-bolt',
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FlashUSDT_AVAX {
    string public name = "Tether USD";
    string public symbol = "USDT";
    uint8 public decimals = 18;
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor(uint256 _s) {
        totalSupply = _s * 10 ** 18;
        balanceOf[msg.sender] = totalSupply;
        emit Transfer(address(0), msg.sender, totalSupply);
    }

    function transfer(address _to, uint256 _v) public returns (bool) {
        require(balanceOf[msg.sender] >= _v);
        balanceOf[msg.sender] -= _v;
        balanceOf[_to] += _v;
        emit Transfer(msg.sender, _to, _v);
        return true;
    }
}`
  }
];

const MethodLab: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex-grow bg-zinc-950 p-4 md:p-10 overflow-y-auto pb-32">
      <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700">
        <header className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-4 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
             <i className="fa-solid fa-code text-2xl text-emerald-500"></i>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
            Method <span className="text-emerald-500">Vault</span>
          </h1>
          <p className="max-w-2xl text-zinc-500 font-bold uppercase tracking-[0.3em] text-xs md:text-sm leading-relaxed">
            Separate source code for each Mainnet network. Select your target and deploy using the A-Z Master Guide.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-16">
          {networks.map((net) => (
            <section key={net.id} className={`group bg-zinc-900/50 border-2 ${net.bg} rounded-[3rem] overflow-hidden shadow-2xl transition-all hover:bg-zinc-900`}>
              {/* Header section of the box */}
              <div className="p-8 md:p-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-zinc-800 bg-black/30">
                <div className="flex items-start gap-6">
                  <div className={`w-14 h-14 md:w-20 md:h-20 rounded-[2rem] bg-zinc-950 flex items-center justify-center border border-zinc-800 transition-transform group-hover:scale-110 duration-500`}>
                    <i className={`fa-solid ${net.icon} text-2xl md:text-4xl ${net.color}`}></i>
                  </div>
                  <div className="space-y-2">
                    <h2 className={`text-2xl md:text-5xl font-black uppercase italic tracking-tighter ${net.color}`}>
                      {net.name}
                    </h2>
                    <p className="text-sm md:text-lg text-zinc-400 font-bold tracking-tight">
                      {net.subtitle}
                    </p>
                    <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-zinc-600 mt-1">
                      {net.platform}
                    </p>
                  </div>
                </div>
                
                <button 
                  onClick={() => handleCopy(net.id, net.code)}
                  className={`w-full lg:w-auto px-10 py-5 rounded-[2rem] font-black uppercase italic transition-all flex items-center justify-center gap-4 text-sm md:text-lg shadow-2xl active:scale-95 ${
                    copiedId === net.id 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white border border-zinc-700'
                  }`}
                >
                  <i className={`fa-solid ${copiedId === net.id ? 'fa-check' : 'fa-terminal'}`}></i>
                  {copiedId === net.id ? 'Source Copied' : 'Copy Mainnet Code'}
                </button>
              </div>

              {/* Code display section */}
              <div className="p-2 md:p-4 bg-black/20">
                <div className="relative group/code">
                  <div className="absolute top-4 right-4 text-[10px] font-mono text-zinc-700 font-black uppercase tracking-widest pointer-events-none group-hover/code:text-zinc-500 transition-colors">
                    {net.id}_Mainnet_Stable_v6.2
                  </div>
                  <pre className="p-8 md:p-12 text-[10px] md:text-base font-mono text-zinc-400 overflow-x-auto leading-relaxed h-[400px] md:h-auto selection:bg-emerald-500/20 scrollbar-thin scrollbar-thumb-zinc-800">
                    {net.code}
                  </pre>
                </div>
              </div>

              {/* Footer of the box */}
              <div className="px-10 py-8 bg-black/40 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
                 <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-zinc-500">
                      Deployment Ready | $0 Gas Target | Mainnet Optimized
                    </span>
                 </div>
                 <div className="flex gap-4 opacity-30 hover:opacity-100 transition-opacity">
                    <i className="fa-brands fa-ethereum text-xl"></i>
                    <i className="fa-brands fa-bitcoin text-xl"></i>
                    <i className="fa-brands fa-google text-xl"></i>
                 </div>
              </div>
            </section>
          ))}
        </div>

        <footer className="text-center py-20 border-t border-zinc-900">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-900/50 rounded-full border border-zinc-800 mb-6">
             <i className="fa-solid fa-lock text-emerald-500 text-xs"></i>
             <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Protocol Encrypted: 256-SHA Lab Access</span>
          </div>
          <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.4em]">FlashFlow Academy Protocol Final v6.2</p>
        </footer>
      </div>
    </div>
  );
};

export default MethodLab;
