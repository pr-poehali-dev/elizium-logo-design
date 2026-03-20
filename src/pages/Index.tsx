import { useEffect, useState } from "react";

const EliziumStar = () => {
  const cx = 100, cy = 100;
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        {/* Внешнее свечение фона */}
        <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7df0e8" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0d3330" stopOpacity="0" />
        </radialGradient>
        {/* Центральное свечение */}
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="30%" stopColor="#d0faf6" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#7de8e0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3bbfb8" stopOpacity="0" />
        </radialGradient>
        {/* Грани луча — светлая сторона */}
        <linearGradient id="facetLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8fffe" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#7dd8d2" stopOpacity="0.6" />
        </linearGradient>
        {/* Грани луча — тёмная сторона */}
        <linearGradient id="facetDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3a9e99" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1a5550" stopOpacity="0.9" />
        </linearGradient>
        {/* Грани — средний тон */}
        <linearGradient id="facetMid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a8e8e4" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#5cc8c2" stopOpacity="0.7" />
        </linearGradient>

        <filter id="outerGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="centerBloom" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="edgeGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Фоновое свечение */}
      <circle cx={cx} cy={cy} r="90" fill="url(#bgGlow)" />

      {/* === ЛУЧ ВВЕРХ === */}
      {/* левая грань (тёмная) */}
      <polygon points="100,10 72,82 100,68" fill="url(#facetDark)" opacity="0.9" />
      {/* правая грань (светлая) */}
      <polygon points="100,10 128,82 100,68" fill="url(#facetLight)" opacity="0.95" />
      {/* внутренняя грань слева */}
      <polygon points="100,68 72,82 100,100" fill="url(#facetMid)" opacity="0.75" />
      {/* внутренняя грань справа */}
      <polygon points="100,68 128,82 100,100" fill="url(#facetLight)" opacity="0.55" />

      {/* === ЛУЧ ВНИЗ === */}
      <polygon points="100,190 72,118 100,132" fill="url(#facetLight)" opacity="0.95" />
      <polygon points="100,190 128,118 100,132" fill="url(#facetDark)" opacity="0.9" />
      <polygon points="100,132 72,118 100,100" fill="url(#facetLight)" opacity="0.55" />
      <polygon points="100,132 128,118 100,100" fill="url(#facetMid)" opacity="0.75" />

      {/* === ЛУЧ ВЛЕВО === */}
      <polygon points="10,100 82,72 68,100" fill="url(#facetLight)" opacity="0.95" />
      <polygon points="10,100 82,128 68,100" fill="url(#facetDark)" opacity="0.9" />
      <polygon points="68,100 82,72 100,100" fill="url(#facetMid)" opacity="0.75" />
      <polygon points="68,100 82,128 100,100" fill="url(#facetLight)" opacity="0.55" />

      {/* === ЛУЧ ВПРАВО === */}
      <polygon points="190,100 118,72 132,100" fill="url(#facetDark)" opacity="0.9" />
      <polygon points="190,100 118,128 132,100" fill="url(#facetLight)" opacity="0.95" />
      <polygon points="132,100 118,72 100,100" fill="url(#facetLight)" opacity="0.55" />
      <polygon points="132,100 118,128 100,100" fill="url(#facetMid)" opacity="0.75" />

      {/* === ЦЕНТРАЛЬНЫЙ РОМБ === */}
      <polygon points="100,68 128,100 100,132 72,100" fill="#c8f8f4" opacity="0.55" />
      <polygon points="100,68 128,100 100,84" fill="white" opacity="0.45" />
      <polygon points="72,100 100,68 100,84" fill="#a0e0dc" opacity="0.35" />

      {/* Тонкие рёбра-линии для огранки */}
      <line x1="100" y1="10" x2="72" y2="82" stroke="#c8f8f4" strokeWidth="0.5" opacity="0.6" />
      <line x1="100" y1="10" x2="128" y2="82" stroke="#c8f8f4" strokeWidth="0.5" opacity="0.6" />
      <line x1="100" y1="190" x2="72" y2="118" stroke="#c8f8f4" strokeWidth="0.5" opacity="0.6" />
      <line x1="100" y1="190" x2="128" y2="118" stroke="#c8f8f4" strokeWidth="0.5" opacity="0.6" />
      <line x1="10" y1="100" x2="82" y2="72" stroke="#c8f8f4" strokeWidth="0.5" opacity="0.6" />
      <line x1="10" y1="100" x2="82" y2="128" stroke="#c8f8f4" strokeWidth="0.5" opacity="0.6" />
      <line x1="190" y1="100" x2="118" y2="72" stroke="#c8f8f4" strokeWidth="0.5" opacity="0.6" />
      <line x1="190" y1="100" x2="118" y2="128" stroke="#c8f8f4" strokeWidth="0.5" opacity="0.6" />
      <line x1="72" y1="82" x2="128" y2="82" stroke="#c8f8f4" strokeWidth="0.35" opacity="0.4" />
      <line x1="72" y1="118" x2="128" y2="118" stroke="#c8f8f4" strokeWidth="0.35" opacity="0.4" />
      <line x1="82" y1="72" x2="82" y2="128" stroke="#c8f8f4" strokeWidth="0.35" opacity="0.4" />
      <line x1="118" y1="72" x2="118" y2="128" stroke="#c8f8f4" strokeWidth="0.35" opacity="0.4" />

      {/* Центральное свечение */}
      <circle cx={cx} cy={cy} r="28" fill="url(#coreGlow)" filter="url(#centerBloom)" opacity="0.85" />
      <circle cx={cx} cy={cy} r="10" fill="white" opacity="0.95" filter="url(#edgeGlow)" />
      <circle cx={cx} cy={cy} r="5" fill="white" opacity="1" />
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