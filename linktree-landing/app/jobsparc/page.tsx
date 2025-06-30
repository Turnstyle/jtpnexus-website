'use client';

import { Button } from "@/components/ui/button";
import { Flame, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function JobSparcPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900 text-slate-100 font-sans items-center justify-center p-4">
      <div className="text-center">
        <Flame className="h-24 w-24 text-orange-400 mx-auto mb-8 animate-pulse [filter:drop-shadow(0_0_8px_theme(colors.orange.400))_drop-shadow(0_0_16px_theme(colors.orange.500))]" />
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
          Job<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Sparc</span>
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300 mb-10 max-w-xl mx-auto">
          Spark the flame that ignites your job hunt!
        </p>
        <div className="bg-slate-800/60 p-8 rounded-xl shadow-2xl border border-slate-700/50 max-w-md mx-auto">
          <Sparkles className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
          <h2 className="text-3xl font-semibold text-yellow-300 mb-3">Coming Soon!</h2>
          <p className="text-slate-400 mb-6">
            We're hard at work building JobSparc to help you find your next career opportunity.
            Stay tuned for exciting features!
          </p>
          <Link href="/">
            <Button
              variant="outline"
              className="bg-transparent border-orange-500/80 text-orange-400 hover:bg-orange-500/10 hover:text-orange-300 hover:border-orange-400/90 transition-all duration-200 px-8 py-3 text-lg"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      <footer className="absolute bottom-8 text-center w-full text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} John T. Peters. All Rights Reserved.</p>
      </footer>
    </div>
  );
} 