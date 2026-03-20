import { useEffect, useState } from "react";

const EliziumStar = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#b2f0ea" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#5dd8cc" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="starCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8fffe" />
          <stop offset="40%" stopColor="#a8e8e4" />
          <stop offset="100%" stopColor="#5bbfba" />
        </radialGradient>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#c8f0ec" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#7dd8d2" stopOpacity="0.3" />
        </radialGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="softGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Внешнее свечение */}
      <circle cx="100" cy="100" r="85" fill="url(#starGlow)" />

      {/* Четырёхлучевая звезда — изящная форма */}
      <path
        d="M100 18
           C102 55, 108 62, 100 100
           C92 62, 98 55, 100 18Z"
        fill="url(#starCore)"
        filter="url(#glow)"
        opacity="0.95"
      />
      <path
        d="M100 182
           C98 145, 92 138, 100 100
           C108 138, 102 145, 100 182Z"
        fill="url(#starCore)"
        filter="url(#glow)"
        opacity="0.95"
      />
      <path
        d="M18 100
           C55 98, 62 92, 100 100
           C62 108, 55 102, 18 100Z"
        fill="url(#starCore)"
        filter="url(#glow)"
        opacity="0.95"
      />
      <path
        d="M182 100
           C145 102, 138 108, 100 100
           C138 92, 145 98, 182 100Z"
        fill="url(#starCore)"
        filter="url(#glow)"
        opacity="0.95"
      />

      {/* Диагональные малые лучи */}
      <path
        d="M143 57
           C128 74, 122 80, 100 100
           C116 82, 122 76, 143 57Z"
        fill="#a8e0dc"
        opacity="0.5"
      />
      <path
        d="M57 143
           C72 126, 78 120, 100 100
           C84 118, 78 124, 57 143Z"
        fill="#a8e0dc"
        opacity="0.5"
      />
      <path
        d="M57 57
           C74 72, 80 78, 100 100
           C82 84, 76 78, 57 57Z"
        fill="#a8e0dc"
        opacity="0.5"
      />
      <path
        d="M143 143
           C126 128, 120 122, 100 100
           C118 116, 124 122, 143 143Z"
        fill="#a8e0dc"
        opacity="0.5"
      />

      {/* Центральный кристалл */}
      <circle cx="100" cy="100" r="10" fill="url(#centerGlow)" filter="url(#softGlow)" />
      <circle cx="100" cy="100" r="5" fill="white" opacity="0.9" />

      {/* Декоративное кольцо */}
      <circle
        cx="100"
        cy="100"
        r="42"
        fill="none"
        stroke="#9dd8d4"
        strokeWidth="0.4"
        strokeDasharray="2 4"
        opacity="0.5"
      />
      <circle
        cx="100"
        cy="100"
        r="60"
        fill="none"
        stroke="#b8e8e4"
        strokeWidth="0.3"
        strokeDasharray="1 6"
        opacity="0.3"
      />
    </svg>
  );
};

const Index = () => {
  const [visible, setVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 200);
    const t2 = setTimeout(() => setTextVisible(true), 900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-elizium-dark">

      {/* Фоновые частицы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-teal-300 opacity-10"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Фоновое свечение */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(93,216,204,0.06) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Логотип */}
      <div
        className="flex flex-col items-center gap-0 relative z-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
          transition: "opacity 1.2s ease, transform 1.2s ease",
        }}
      >
        {/* Звезда */}
        <div
          className="relative"
          style={{ width: "220px", height: "220px" }}
        >
          <div
            className="absolute inset-0"
            style={{ animation: "starPulse 4s ease-in-out infinite" }}
          >
            <EliziumStar />
          </div>
        </div>

        {/* Название */}
        <div
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 1s ease, transform 1s ease",
            marginTop: "-8px",
          }}
        >
          <h1
            className="text-center tracking-[0.35em] uppercase"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 500,
              color: "#c8f0ec",
              letterSpacing: "0.35em",
              textShadow: "0 0 30px rgba(93,216,204,0.4), 0 0 60px rgba(93,216,204,0.15)",
            }}
          >
            ELIZIUM
          </h1>

          {/* Декоративная линия */}
          <div className="flex items-center gap-3 mt-3 justify-center">
            <div
              style={{
                width: "40px",
                height: "0.5px",
                background: "linear-gradient(to right, transparent, #9dd8d4)",
              }}
            />
            <div
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "#9dd8d4",
                boxShadow: "0 0 8px rgba(157,216,212,0.6)",
              }}
            />
            <div
              style={{
                width: "40px",
                height: "0.5px",
                background: "linear-gradient(to left, transparent, #9dd8d4)",
              }}
            />
          </div>


        </div>
      </div>

      <style>{`
        .bg-elizium-dark {
          background: radial-gradient(ellipse at 50% 40%, #0d2422 0%, #071615 40%, #040e0d 100%);
        }
        @keyframes starPulse {
          0%, 100% { opacity: 0.9; transform: scale(1); filter: drop-shadow(0 0 12px rgba(93,216,204,0.25)); }
          50% { opacity: 1; transform: scale(1.03); filter: drop-shadow(0 0 22px rgba(178,240,234,0.4)); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
};

export default Index;