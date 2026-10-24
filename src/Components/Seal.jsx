import { useState } from "react";
import cover from "../assets/invitation-cover.png";

export default function Seal({ onOpen }) {
  const [stage, setStage] = useState("closed"); // "closed" | "opening" | "flash"

  const handleOpen = () => {
    if (stage !== "closed") return;
    
    // 1. Start envelope flap opening + seal ripple (0ms - 3300ms)
    setStage("opening");

    // 2. Trigger glittering flash effect (at 600ms)
    setTimeout(() => {
      setStage("flash");
    }, 600);

    // 3. Complete transition to main page (at 2000ms)
    setTimeout(() => {
      onOpen?.();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a0508] overflow-hidden select-none">
      
      {/* --- ENVELOPE WRAPPER WITH BACKGROUND IMAGE --- */}
      <div 
        className="relative w-full max-w-md h-[100svh] bg-cover bg-center bg-no-repeat shadow-2xl flex flex-col justify-between overflow-hidden"
        style={{ backgroundImage: `url(${cover})` }}
      >
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* --- TOP TRIANGULAR FLAP --- */}
        <div
          className={`absolute top-0 left-0 right-0 z-30 origin-top transition-all duration-[3300ms] ease-in-out
            ${stage !== "closed" ? "rotate-x-180 [transform:rotateX(180deg)]" : ""}`}
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          <svg
            className="w-full h-[45vh] drop-shadow-2xl"
            viewBox="0 0 400 300"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L400,0 L200,280 Z"
              fill="#3d0c12"
              stroke="#d0b58a"
              strokeWidth="3"
            />
          </svg>
        </div>

        {/* --- CENTER WAX SEAL BUTTON --- */}
        <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
          <button
            onClick={handleOpen}
            disabled={stage !== "closed"}
            aria-label="Open wedding invitation"
            className={`pointer-events-auto relative rounded-full flex items-center justify-center transition-all duration-1000
              ${stage === "closed" ? "hover:scale-105 animate-[sealFloat_3s_ease-in-out_infinite]" : "scale-125 opacity-0 duration-1000"}`}
          >
            {stage === "opening" && (
              <>
                <span className="absolute rounded-full border border-amber-300/80 animate-[verySlowRipple_3.3s_ease-out_forwards]" />
                <span className="absolute rounded-full border border-amber-200/60 animate-[verySlowRipple_3.3s_ease-out_forwards_600ms]" />
              </>
            )}

            {/* Embossed Wax Seal Badge */}
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full flex items-center justify-center bg-[#f3ebd9] border-4 border-[#d3c2a3] shadow-[inset_0_3px_6px_rgba(0,0,0,0.2),0_10px_28px_rgba(0,0,0,0.6)]">
              {/* Outer Decorative Dashed Ring */}
              <div className="absolute inset-2 rounded-full border border-dashed border-[#bfa882]/70 pointer-events-none" />
              
              {/* Inner Decorative Accent Ring */}
              <div className="absolute inset-4 rounded-full border border-[#d0b58a]/40 pointer-events-none" />
              
              {/* Monogram Text (J ❤️ P) */}
              <div className="relative z-10 flex items-center justify-center font-cinzel italic font-bold text-amber-950 text-2xl sm:text-3xl tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
                <span>J</span>
                <span className="text-base sm:text-xl mx-1 not-italic">❤️</span>
                <span>P</span>
              </div>
            </div>

            <p
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-6 whitespace-nowrap font-serif text-xs sm:text-sm tracking-[2px] text-amber-100 drop-shadow-md transition-opacity duration-500 ${
                stage !== "closed" ? "opacity-0" : "opacity-100"
              }`}
            >
              ✦ Tap seal to open ✦
            </p>
          </button>
        </div>

        {/* --- GLITTERING SPARKLE & GLOW EFFECT --- */}
        {stage === "flash" && (
          <div className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden">
            {/* Expanding Radiant Glow */}
            <div className="absolute w-[100vw] h-[100vh] rounded-full bg-gradient-radial from-amber-100/90 via-amber-300/30 to-transparent animate-[transparentFlash_1.4s_ease-out_forwards]" />

            {/* Floating Glitter Particles */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(20)].map((_, i) => {
                const angle = (i * 18) * (Math.PI / 180);
                const distance = 80 + (i % 5) * 35;
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance;
                
                return (
                  <span
                    key={i}
                    className="absolute text-amber-200 animate-[glitterBurst_1.4s_ease-out_forwards]"
                    style={{
                      "--tx": `${tx}px`,
                      "--ty": `${ty}px`,
                      animationDelay: `${(i % 4) * 80}ms`,
                      fontSize: `${10 + (i % 3) * 6}px`,
                    }}
                  >
                    ✦
                  </span>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes sealFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes verySlowRipple {
          0% { width: 8rem; height: 8rem; opacity: 1; }
          100% { width: 50rem; height: 50rem; opacity: 0; }
        }

        @keyframes transparentFlash {
          0% { opacity: 0; transform: scale(0.1); }
          50% { opacity: 1; transform: scale(1.6); }
          100% { opacity: 0; transform: scale(3); }
        }

        @keyframes glitterBurst {
          0% {
            transform: translate(0, 0) scale(0.2) rotate(0deg);
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(1.4) rotate(180deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}