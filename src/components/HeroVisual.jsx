export default function HeroVisual() {
  const nodes = [
    { cx: 70, cy: 150, r: 5 },
    { cx: 180, cy: 90, r: 4 },
    { cx: 285, cy: 155, r: 6 },
    { cx: 390, cy: 80, r: 4 },
    { cx: 470, cy: 175, r: 5 },
    { cx: 350, cy: 270, r: 5 },
    { cx: 210, cy: 245, r: 4 },
  ];

  const connections = [
    [70, 150, 180, 90],
    [180, 90, 285, 155],
    [285, 155, 390, 80],
    [390, 80, 470, 175],
    [285, 155, 350, 270],
    [350, 270, 210, 245],
    [210, 245, 70, 150],
    [180, 90, 210, 245],
  ];

  return (
    <div className="hero-visual" aria-hidden="true">
      <style>{`
        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.25;
          }
          50% {
            transform: translateY(-18px);
            opacity: 0.8;
          }
        }
        @keyframes dataFlow {
          0% { 
            offset-distance: 0%;
            opacity: 0;
          }
          20% {
            opacity: 0.7;
          }
          80% {
            opacity: 0.7;
          }
          100% { 
            offset-distance: 100%;
            opacity: 0;
          }
        }
        @keyframes dataFlow2 {
          0% { 
            offset-distance: 0%;
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          80% {
            opacity: 0.6;
          }
          100% { 
            offset-distance: 100%;
            opacity: 0;
          }
        }
        @keyframes dataFlow3 {
          0% { 
            offset-distance: 0%;
            opacity: 0;
          }
          20% {
            opacity: 0.65;
          }
          80% {
            opacity: 0.65;
          }
          100% { 
            offset-distance: 100%;
            opacity: 0;
          }
        }
        .data-particle {
          animation: floatParticle 5s ease-in-out infinite;
        }
        .particle-one {
          animation-delay: 0s;
        }
        .particle-two {
          animation-delay: 1.5s;
        }
        .particle-three {
          animation-delay: 3s;
        }
        .flow-dot {
          fill: #9DD2FF;
          filter: drop-shadow(0 0 3px rgba(153, 210, 255, 0.6));
        }
        .flow-path-1 .flow-dot { animation: dataFlow 4s ease-in-out infinite; }
        .flow-path-2 .flow-dot { animation: dataFlow 5s ease-in-out 0.5s infinite; }
        .flow-path-3 .flow-dot { animation: dataFlow 4.5s ease-in-out 1s infinite; }
        .flow-path-4 .flow-dot { animation: dataFlow2 5.5s ease-in-out 0.7s infinite; }
        .flow-path-5 .flow-dot { animation: dataFlow2 4.8s ease-in-out 1.2s infinite; }
        .flow-path-6 .flow-dot { animation: dataFlow3 5.2s ease-in-out 0.3s infinite; }
        .flow-path-7 .flow-dot { animation: dataFlow3 4.6s ease-in-out 1.5s infinite; }
        .flow-path-8 .flow-dot { animation: dataFlow 5.5s ease-in-out 0.9s infinite; }
      `}</style>

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <svg
        className="hero-network"
        viewBox="0 0 540 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id="connectionGradient"
            x1="0"
            y1="0"
            x2="540"
            y2="340"
          >
            <stop offset="0%" stopColor="#4DA3FF" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#78BFFF" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#8B7CFF" stopOpacity="0.18" />
          </linearGradient>

          <radialGradient id="nodeGlow">
            <stop offset="0%" stopColor="#8CC8FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4DA3FF" stopOpacity="0" />
          </radialGradient>

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        {/* Soft background curves */}
        <path
          d="M20 170 C120 100 160 210 260 140 S420 80 530 150"
          stroke="url(#connectionGradient)"
          strokeWidth="1"
          opacity="0.35"
        />

        <path
          d="M30 260 C140 190 200 280 300 210 S440 160 520 230"
          stroke="url(#connectionGradient)"
          strokeWidth="1"
          opacity="0.25"
        />

        {/* Network connections with animated data flow */}
        {connections.map(([x1, y1, x2, y2], index) => (
          <g key={`conn-${index}`}>
            {/* Base connection line */}
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#connectionGradient)"
              strokeWidth="1.2"
              opacity="0.4"
            />
            
            {/* Animated data packet flowing through connection */}
            <g className={`flow-path-${index + 1}`}>
              <circle
                cx={x1}
                cy={y1}
                r="2.5"
                className="flow-dot"
              />
            </g>
          </g>
        ))}

        {/* Glowing nodes */}
        {nodes.map((node, index) => (
          <g key={`node-${index}`}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.r * 4}
              fill="url(#nodeGlow)"
              opacity="0.35"
            />

            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill="#9DD2FF"
              opacity="0.85"
            />
          </g>
        ))}

        {/* Central intelligent-system node */}
        <g>
          <circle
            cx="285"
            cy="155"
            r="28"
            stroke="#70B8FF"
            strokeOpacity="0.18"
          />

          <circle
            cx="285"
            cy="155"
            r="17"
            stroke="#70B8FF"
            strokeOpacity="0.35"
          />

          <circle
            cx="285"
            cy="155"
            r="5"
            fill="#B8DDFF"
          />
        </g>
      </svg>

      {/* Small floating data particles */}
      <span className="data-particle particle-one" />
      <span className="data-particle particle-two" />
      <span className="data-particle particle-three" />
    </div>
  );
}
