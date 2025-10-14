// import React, { useRef, useState } from 'react';

// interface Position {
//   x: number;
//   y: number;
// }

// interface SpotlightCardProps extends React.PropsWithChildren {
//   className?: string;
//   spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
// }

// const SpotlightCard: React.FC<SpotlightCardProps> = ({
//   children,
//   className = '',
//   spotlightColor = 'rgba(255, 255, 255, 0.25)'
// }) => {
//   const divRef = useRef<HTMLDivElement>(null);
//   const [isFocused, setIsFocused] = useState<boolean>(false);
//   const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
//   const [opacity, setOpacity] = useState<number>(0);

//   const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = e => {
//     if (!divRef.current || isFocused) return;

//     const rect = divRef.current.getBoundingClientRect();
//     setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//   };

//   const handleFocus = () => {
//     setIsFocused(true);
//     setOpacity(0.6);
//   };

//   const handleBlur = () => {
//     setIsFocused(false);
//     setOpacity(0);
//   };

//   const handleMouseEnter = () => {
//     setOpacity(0.6);
//   };

//   const handleMouseLeave = () => {
//     setOpacity(0);
//   };

//   return (
//     <div
//       ref={divRef}
//       onMouseMove={handleMouseMove}
//       onFocus={handleFocus}
//       onBlur={handleBlur}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className={`relative rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden p-2 ${className}`}
//     >
//       <div
//         className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
//         style={{
//           opacity,
//           background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`
//         }}
//       />
//       {children}
//     </div>
//   );
// };

// export default SpotlightCard;

import React, { useRef, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = ''
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [glassOpacity, setGlassOpacity] = useState<number>(0);
  const [blurAmount, setBlurAmount] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [rotation, setRotation] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = e => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });

    // 3D rotation (parallax tilt)
    const rotateX = ((y - rect.height / 2) / rect.height) * -10; // yuqoriga pastga
    const rotateY = ((x - rect.width / 2) / rect.width) * 10; // chap-o‘ng
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    if (!isAnimating) {
      setGlassOpacity(0);
      setBlurAmount(0);
    }
    setRotation({ x: 0, y: 0 }); // cardni tik holatga qaytarish
  };

  const handleMouseEnter = () => {
    setGlassOpacity(0.15);
    setBlurAmount(5);
  };

  const handleClick: React.MouseEventHandler<HTMLDivElement> = e => {
    if (!divRef.current || isAnimating) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });

    // Animation
    setIsAnimating(true);
    setGlassOpacity(0.95);
    setBlurAmount(30);

    setTimeout(() => {
      setGlassOpacity(0.1);
      setBlurAmount(3);
      setIsAnimating(false);
    }, 1800);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden p-2 transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.03)`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glass Morphism / Ice Effect Overlay */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-[1800ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          opacity: glassOpacity,
          backdropFilter: `blur(${blurAmount}px) saturate(200%)`,
          background: `
            radial-gradient(
              circle at ${position.x}px ${position.y}px, 
              rgba(255, 255, 255, 0.35) 0%, 
              rgba(255, 255, 255, 0.15) 40%, 
              rgba(255, 255, 255, 0.05) 70%, 
              transparent 100%
            ),
            linear-gradient(145deg, 
              rgba(255, 255, 255, 0.2) 0%, 
              rgba(255, 255, 255, 0.05) 50%, 
              rgba(0, 0, 0, 0.15) 100%
            )
          `,
          boxShadow: `
            inset 0 2px 4px rgba(255, 255, 255, 0.25),
            0 10px 40px rgba(0, 0, 0, 0.15)
          `,
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}
      />

      {/* Ice Reflection Effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-[1800ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          opacity: glassOpacity * 0.5,
          background: `
            radial-gradient(
              ellipse at ${position.x}px ${position.y}px, 
              rgba(255, 255, 255, 0.7) 0%, 
              rgba(255, 255, 255, 0.3) 30%, 
              transparent 60%
            )
          `,
        }}
      />

      {/* Subtle Ice Cracks Effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-[1800ms]"
        style={{
          opacity: isAnimating ? 0.15 : 0,
          backgroundImage: `
            radial-gradient(circle at 15% 85%, transparent 20%, rgba(255, 255, 255, 0.15) 21%, rgba(255, 255, 255, 0.15) 23%, transparent 24%),
            radial-gradient(circle at 85% 15%, transparent 20%, rgba(255, 255, 255, 0.15) 21%, rgba(255, 255, 255, 0.15) 23%, transparent 24%),
            radial-gradient(circle at 50% 50%, transparent 20%, rgba(255, 255, 255, 0.15) 21%, rgba(255, 255, 255, 0.15) 23%, transparent 24%)
          `,
        }}
      />

      {children}
    </div>
  );
};

export default SpotlightCard;
