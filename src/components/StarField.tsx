import { useMemo } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export default function StarField({ count = 120 }: { count?: number }) {
  const stars = useMemo<Star[]>(() => {
    const arr: Star[] = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 4,
      });
    }
    return arr;
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            boxShadow: "0 0 6px rgba(255,255,255,0.6)",
          }}
        />
      ))}
    </div>
  );
}