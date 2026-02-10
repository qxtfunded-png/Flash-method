
import React, { useState, useEffect } from 'react';
import UserAgreement from './components/UserAgreement.tsx';
import CourseSidebar from './components/CourseSidebar.tsx';
import ContentArea from './components/ContentArea.tsx';
import MethodLab from './components/MethodLab.tsx';

const App: React.FC = () => {
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);
  const [activeTab, setActiveTab] = useState<'course' | 'method'>('course');
  const [currentModuleId, setCurrentModuleId] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('flashflow_v6_pro_final_v3');
    if (accepted === 'true') {
      setHasAcceptedTerms(true);
    }
  }, []);

  const handleAcceptTerms = () => {
    localStorage.setItem('flashflow_v6_pro_final_v3', 'true');
    setHasAcceptedTerms(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-emerald-500/30 overflow-hidden">
      {!hasAcceptedTerms && <UserAgreement onAccept={handleAcceptTerms} />}
      
      {/* Header */}
      <header className="h-16 md:h-24 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-40 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-tr from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)] border border-emerald-400/20">
            <i className="fa-solid fa-bolt-lightning text-white text-xl md:text-2xl"></i>
          </div>
          <div className="flex flex-col">
            <span className="font-black tracking-tighter text-2xl md:text-4xl italic leading-none uppercase">
              FLASH<span className="text-emerald-500">FLOW</span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 ml-0.5 italic">Beginner Academy V6</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-[10px] text-zinc-600 uppercase font-black tracking-widest leading-none mb-1">Status</span>
            <span className="text-xs text-emerald-500 flex items-center gap-2 font-black italic uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Mainnet Active
            </span>
          </div>
          <button 
            className="md:hidden w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-400 border border-zinc-800"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <i className={`fa-solid ${isSidebarOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
          </button>
        </div>
      </header>

      {/* Main Body */}
      <div className="flex-grow flex flex-col md:flex-row h-[calc(100vh-64px)] md:h-[calc(100vh-96px)] overflow-hidden relative">
        {activeTab === 'course' ? (
          <>
            <div className={`fixed inset-0 z-50 transition-transform duration-500 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:z-0`}>
              <CourseSidebar 
                currentModuleId={currentModuleId} 
                onSelect={(id) => {
                  setCurrentModuleId(id);
                  setIsSidebarOpen(false);
                }} 
              />
            </div>
            {isSidebarOpen && (
              <div 
                className="fixed inset-0 bg-black/90 backdrop-blur-xl z-40 md:hidden"
                onClick={() => setIsSidebarOpen(false)}
              ></div>
            )}
            <ContentArea moduleId={currentModuleId} />
          </>
        ) : (
          <MethodLab />
        )}
      </div>

      {/* Navigation - Bottom (Mobile) */}
      <nav className="md:hidden h-20 bg-zinc-950 border-t border-zinc-900 flex items-center justify-around px-4 z-50">
        <button 
          onClick={() => setActiveTab('course')}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'course' ? 'text-emerald-500 scale-110' : 'text-zinc-700'}`}
        >
          <i className="fa-solid fa-graduation-cap text-2xl"></i>
          <span className="text-[9px] font-black uppercase tracking-[0.2em]">Beginner Guide</span>
        </button>
        <button 
          onClick={() => setActiveTab('method')}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'method' ? 'text-emerald-500 scale-110' : 'text-zinc-700'}`}
        >
          <i className="fa-solid fa-terminal text-2xl"></i>
          <span className="text-[9px] font-black uppercase tracking-[0.2em]">Code Vault</span>
        </button>
      </nav>

      {/* Desktop Navigation Toggle */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-50 bg-zinc-900/60 backdrop-blur-3xl border border-zinc-800 p-2 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <button 
          onClick={() => setActiveTab('course')}
          className={`px-12 py-4 rounded-full text-xs font-black uppercase italic transition-all ${activeTab === 'course' ? 'bg-emerald-600 text-white shadow-lg' : 'text-zinc-500 hover:text-white'}`}
        >
          A-Z Master Guide
        </button>
        <button 
          onClick={() => setActiveTab('method')}
          className={`px-12 py-4 rounded-full text-xs font-black uppercase italic transition-all ${activeTab === 'method' ? 'bg-emerald-600 text-white shadow-lg' : 'text-zinc-500 hover:text-white'}`}
        >
          Method Code Vault
        </button>
      </div>
    </div>
  );
};

export default App;
