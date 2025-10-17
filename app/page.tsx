"use client"
import { useState, useEffect } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';

export default function Home() {
  const [glitchActive, setGlitchActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scanlinePos, setScanlinePos] = useState(0);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 100);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    const scanlineInterval = setInterval(() => {
      setScanlinePos(prev => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(scanlineInterval);
  }, []);

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
    });
  };

  return (
    <div 
      className="font-mono grid grid-rows-[1fr] items-center justify-items-center min-h-screen bg-black p-4 sm:p-8 overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      {/* CRT Scanlines */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-10"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent 2px
          )`
        }}
      />
      
      {/* Animated Scanline */}
      <div 
        className="absolute left-0 right-0 h-24 pointer-events-none z-20 opacity-5"
        style={{
          top: `${scanlinePos}%`,
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.8), transparent)',
          transition: 'top 0.05s linear'
        }}
      />

      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.7) 100%)'
        }}
      />

      <main 
        className="flex flex-col gap-6 sm:gap-10 items-center text-center relative z-30"
        style={{
          transform: `perspective(1000px) rotateX(${mousePos.y * 0.05}deg) rotateY(${mousePos.x * 0.05}deg)`
        }}
      >
        {/* ASCII Art Logo with Glow */}
        <div className="relative group">
          <div 
            className={`text-white text-xl sm:text-3xl md:text-4xl transition-all duration-100 ${
              glitchActive ? 'animate-pulse' : ''
            }`}
            style={{
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4)'
            }}
          >
            <pre className="leading-none">
              {`
  __ _ _             _      
 / _| (_)_ __   ___ | |_ ___
| |_| | | '_ \\ / _ \\| __/ _ \\
|  _| | | |_) | (_) | ||  __/
|_| |_|_| .__/ \\___/ \\__\\___|
        |_|                  
              `}
            </pre>
          </div>
          
          {/* Glitch effect layers */}
          {glitchActive && (
            <>
              <div 
                className="absolute inset-0 text-red-500 text-xl sm:text-3xl md:text-4xl opacity-70"
                style={{ transform: 'translate(-2px, -2px)' }}
              >
                <pre className="leading-none">
                  {`
  __ _ _             _      
 / _| (_)_ __   ___ | |_ ___
| |_| | | '_ \\ / _ \\| __/ _ \\
|  _| | | |_) | (_) | ||  __/
|_| |_|_| .__/ \\___/ \\__\\___|
        |_|                  
                  `}
                </pre>
              </div>
              <div 
                className="absolute inset-0 text-cyan-500 text-xl sm:text-3xl md:text-4xl opacity-70"
                style={{ transform: 'translate(2px, 2px)' }}
              >
                <pre className="leading-none">
                  {`
  __ _ _             _      
 / _| (_)_ __   ___ | |_ ___
| |_| | | '_ \\ / _ \\| __/ _ \\
|  _| | | |_) | (_) | ||  __/
|_| |_|_| .__/ \\___/ \\__\\___|
        |_|                  
                  `}
                </pre>
              </div>
            </>
          )}
        </div>

        {/* Tagline */}
        <p 
          className="text-white/60 text-xs sm:text-sm tracking-widest animate-pulse"
          style={{
            textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
          }}
        >
        </p>

        {/* CTA Button with Enhanced Effects */}
        <div className="relative group">
          {/* Glow background */}
          <div 
            className="absolute inset-0 bg-white/20 blur-xl group-hover:bg-white/40 transition-all duration-300"
            style={{ transform: 'scale(1.2)' }}
          />
          
          <a
            className="relative block border-2 border-white bg-black text-white hover:bg-white hover:text-black transition-all duration-300 px-6 sm:px-12 py-3 sm:py-5 text-sm sm:text-base font-bold tracking-wider group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            href="/get-started"
            style={{
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.05)'
            }}
          >
            <span className="relative z-10">[ GET STARTED ]</span>
            
            {/* Animated border corners */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white group-hover:w-4 group-hover:h-4 transition-all duration-300" />
            <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white group-hover:w-4 group-hover:h-4 transition-all duration-300" />
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white group-hover:w-4 group-hover:h-4 transition-all duration-300" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white group-hover:w-4 group-hover:h-4 transition-all duration-300" />
          </a>
        </div>

        {/* Additional Info */}
        <div className="flex gap-6 sm:gap-8 mt-4 text-white/40 text-xs tracking-widest">
          <span className="hover:text-white/80 transition-colors cursor-default">FLIP</span>
          <span className="hover:text-white/80 transition-colors cursor-default">IDEA</span>
          <span className="hover:text-white/80 transition-colors cursor-default">SHARE</span>
        </div>
      </main>

      {/* Bottom indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-xs animate-bounce">
        ▼
      </div>
    </div>
  );
}