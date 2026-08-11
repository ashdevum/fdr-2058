import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import NovaLogo from '../components/NovaLogo';

export const TermsPage = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#07040d] text-gray-100 flex flex-col p-6 sm:p-10 selection:bg-purple-500 selection:text-white">
      <header className="max-w-4xl w-full mx-auto flex items-center justify-between py-4 border-b border-purple-500/20 mb-8">
        <NovaLogo />
        <Link 
          to="/signup" 
          className="px-4 py-2 rounded-xl text-xs font-semibold text-purple-200 bg-purple-900/40 border border-purple-500/30 hover:bg-purple-800/50 transition-all flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Sign Up
        </Link>
      </header>

      <main className="max-w-4xl w-full mx-auto nova-glass-card nova-glow-border rounded-3xl p-6 sm:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-pink-400">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold font-outfit text-white">Terms of Service & Privacy Policy</h1>
            <p className="text-xs text-purple-300/60">Last updated: August 2026</p>
          </div>
        </div>

        <div className="space-y-6 text-sm text-purple-200/80 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">1. Terms of Use</h2>
            <p>
              By accessing or creating an account on Nova, you agree to comply with our design guidelines and community standards. Nova provides futuristic networking tools designed for smooth digital interaction.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">2. Data Privacy</h2>
            <p>
              Your privacy is paramount. Nova encrypts profile data and ensures your personal information is protected with state-of-the-art security standards.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">3. Updates & Communications</h2>
            <p>
              You may opt-in to receive product update notifications and news via your account preferences at any time.
            </p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-purple-500/20 text-center">
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-white text-xs font-semibold text-gradient-btn"
          >
            I Understand & Accept - Return to Sign Up
          </Link>
        </div>
      </main>
    </div>
  );
};

export default TermsPage;
