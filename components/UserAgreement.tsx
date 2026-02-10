
import React from 'react';

interface Props {
  onAccept: () => void;
}

const UserAgreement: React.FC<Props> = ({ onAccept }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-3xl bg-black/95 overflow-y-auto">
      <div className="max-w-xl w-full my-auto bg-zinc-900 border border-zinc-800 rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(16,185,129,0.15)] animate-in fade-in zoom-in duration-500">
        <div className="p-8 text-center border-b border-zinc-800 bg-emerald-500/5">
          <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
            <i className="fa-solid fa-shield-halved text-emerald-500 text-3xl"></i>
          </div>
          <h2 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase italic">User Responsibility Decree</h2>
          <p className="text-emerald-500 font-black text-[10px] uppercase tracking-[0.4em]">Protocol Authorization Required</p>
        </div>
        
        <div className="p-8 space-y-6 text-zinc-300 text-sm leading-relaxed font-medium">
          <div className="bg-black/40 p-6 rounded-2xl border border-zinc-800">
            <p className="text-rose-500 font-black mb-3 uppercase tracking-tighter italic text-base flex items-center gap-2">
              <i className="fa-solid fa-triangle-exclamation"></i>
              Legal Binding Clause
            </p>
            <p className="text-zinc-400">
              By clicking "Authorize Access" below, you confirm that you are using this site for <span className="text-white">Educational Research</span> and software testing only. You acknowledge that <span className="text-white underline decoration-rose-500 decoration-2">you assume 100% legal responsibility</span> for any actions performed using the information provided. The developers of FlashFlow Pro are not liable for any misuse, fraud, or harm.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-start gap-4 p-3 bg-zinc-950 rounded-xl border border-zinc-800">
              <i className="fa-solid fa-circle-info text-emerald-500 mt-1"></i>
              <p className="text-xs text-zinc-500">These are <span className="text-emerald-400 font-bold">Real Mainnet Protocols</span>. They function on the live Binance Smart Chain, not a test network.</p>
            </div>
            <div className="flex items-start gap-4 p-3 bg-zinc-950 rounded-xl border border-zinc-800">
              <i className="fa-solid fa-circle-info text-emerald-500 mt-1"></i>
              <p className="text-xs text-zinc-500">The assets created have <span className="text-emerald-400 font-bold">$0 Market Value</span>. They cannot be sold, swapped, or used in P2P transactions.</p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-zinc-950/50 border-t border-zinc-800">
          <button 
            onClick={onAccept}
            className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.97] uppercase tracking-tighter text-xl italic"
          >
            Authorize Access & Accept Liability
          </button>
          <div className="mt-4 flex flex-col items-center gap-1 opacity-40">
             <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-600">Protocol Hash: AUTH_0x71_ACCEPTED</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAgreement;
