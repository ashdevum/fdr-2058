import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Zap, ArrowLeft, LogOut, Cpu, CheckCircle2, LockKeyhole } from 'lucide-react';
import NovaLogo from '../components/NovaLogo';

export const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#03050c] bg-cyber-grid text-gray-100 flex flex-col justify-between p-6 sm:p-10 selection:bg-cyan-500 selection:text-black">
      {/* Ambient Cyber Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[180px] pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-10 max-w-6xl w-full mx-auto flex items-center justify-between py-4 border-b border-cyan-500/20">
        <NovaLogo />
        <div className="flex items-center gap-4">
          <Link 
            to="/signup" 
            className="px-4 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-900/50 transition-all flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sign Up
          </Link>
          <button 
            onClick={() => navigate('/login')} 
            className="p-2 rounded-xl text-cyan-400 hover:text-white hover:bg-cyan-900/30 transition-colors cursor-pointer"
            title="Log Out"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl w-full mx-auto my-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)]">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span>QUANTUM OS AUTHENTICATION VERIFIED</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-syne text-white tracking-tight mb-6 leading-tight">
          Welcome to <span className="text-gradient-cyan-indigo">Nova Quantum OS</span>
        </h1>

        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Your entire application has been redesigned with a brand-new, ultra-modern Cyber Glassmorphic theme while keeping 100% of your exact Authentication logic intact!
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left mb-10">
          <div className="quantum-glass-card p-6 rounded-3xl border border-cyan-500/20">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-syne text-white mb-2">Your Auth Logic</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Regex validations, Email Verification, Toastify alerts, and Forgot Password Modal are 100% identical.
            </p>
          </div>

          <div className="quantum-glass-card p-6 rounded-3xl border border-cyan-500/20">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-blue-400 mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-syne text-white mb-2">New Quantum Theme</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cyber-grid mesh backdrop, cyan-indigo gradient halos, split-hero showcase, and floating 3D glass visuals.
            </p>
          </div>

          <div className="quantum-glass-card p-6 rounded-3xl border border-cyan-500/20">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-emerald-400 mb-4">
              <LockKeyhole className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-syne text-white mb-2">Firebase Cloud Auth</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Fully integrated with Firebase Authentication, Email/Password verification guard, and password recovery.
            </p>
          </div>
        </div>

        <Link
          to="/signup"
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-white font-bold text-sm bg-gradient-quantum shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
        >
          <span>View New Sign Up Design</span>
        </Link>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-6xl w-full mx-auto text-center py-4 border-t border-cyan-500/20 text-xs text-slate-500">
        © {new Date().getFullYear()} Nova Quantum OS. Built with React + Tailwind CSS v4.
      </footer>
    </div>
  );
};

export default DashboardPage;
