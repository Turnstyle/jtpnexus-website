'use client';

import { Button } from "@/components/ui/button";
import { Gamepad2, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function SnakeGamePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans items-center justify-center p-4">
      <div className="text-center">
        <Gamepad2 className="h-24 w-24 text-gray-400 mx-auto mb-8 animate-bounce [filter:drop-shadow(0_0_8px_theme(colors.gray.400))_drop-shadow(0_0_16px_theme(colors.gray.500))]" />
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
          Snake<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600"> Game</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-xl mx-auto">
          Classic snake game with modern design and smooth gameplay
        </p>
        <div className="bg-gray-800/60 p-8 rounded-xl shadow-2xl border border-gray-700/50 max-w-md mx-auto">
          <Sparkles className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-3xl font-semibold text-gray-300 mb-3">Coming Soon!</h2>
          <p className="text-gray-400 mb-6">
            Get ready for a nostalgic gaming experience with modern touches!
            The classic snake game is being crafted with smooth animations and responsive controls.
          </p>
          <Link href="/">
            <Button
              variant="outline"
              className="bg-transparent border-gray-500/80 text-gray-400 hover:bg-gray-500/10 hover:text-gray-300 hover:border-gray-400/90 transition-all duration-200 px-8 py-3 text-lg"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      <footer className="absolute bottom-8 text-center w-full text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} John T. Peters. All Rights Reserved.</p>
      </footer>
    </div>
  );
}