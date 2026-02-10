
import React from 'react';

const modules = [
  { id: 1, title: 'Getting Started: Wallets', icon: 'fa-wallet' },
  { id: 2, title: 'BSC (BEP-20) Master Class', icon: 'fa-cube' },
  { id: 3, title: 'TRON (TRC-20) Master Class', icon: 'fa-diamond' },
  { id: 4, title: 'ETH/AVAX Master Class', icon: 'fa-link' },
  { id: 5, title: 'Final Security & Ethics', icon: 'fa-shield-halved' },
];

interface Props {
  currentModuleId: number;
  onSelect: (id: number) => void;
}

const CourseSidebar: React.FC<Props> = ({ currentModuleId, onSelect }) => {
  return (
    <aside className="w-full h-full md:w-80 border-r border-zinc-800 bg-zinc-950 flex flex-col shadow-2xl">
      <div className="p-6 border-b border-zinc-800">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 mb-4 italic">Protocol Roadmap</h3>
        <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
          <div className="bg-emerald-500 h-full transition-all duration-700 ease-out" style={{ width: `${(currentModuleId / modules.length) * 100}%` }}></div>
        </div>
        <p className="text-[9px] mt-2 text-zinc-500 font-black uppercase tracking-widest">Stage {currentModuleId} of {modules.length}</p>
      </div>

      <nav className="flex-grow overflow-y-auto p-4 space-y-2">
        {modules.map((m) => (
          <button
            key={m.id}
            onClick={() => onSelect(m.id)}
            className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all group border ${
              currentModuleId === m.id 
                ? 'bg-emerald-500/10 border-emerald-500/30 text-white' 
                : 'text-zinc-500 hover:bg-zinc-900 border-transparent'
            }`}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
              currentModuleId === m.id ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]' : 'bg-zinc-900'
            }`}>
              <i className={`fa-solid ${m.icon} text-xs`}></i>
            </div>
            <div className="text-left">
              <span className={`block text-[8px] font-black uppercase tracking-tighter ${currentModuleId === m.id ? 'text-emerald-500' : 'text-zinc-600'}`}>Part 0{m.id}</span>
              <span className="text-xs md:text-sm font-bold truncate tracking-tight">{m.title}</span>
            </div>
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-zinc-800 bg-zinc-900/20">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Encrypted Auth v6.2</span>
        </div>
      </div>
    </aside>
  );
};

export default CourseSidebar;
