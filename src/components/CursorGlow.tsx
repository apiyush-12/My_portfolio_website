import React, { useEffect, useRef } from 'react';

interface CometPoint {
  x: number;
  y: number;
  hue: number;
  size: number;
}

export const CursorGlow: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<CometPoint[]>([]);
  const mouse = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    // Hide default cursor
    document.body.style.cursor = 'none';

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      const last = points.current[points.current.length - 1];
      if (!last || Math.hypot(last.x - e.clientX, last.y - e.clientY) > 5) {
        points.current.push({
          x: e.clientX,
          y: e.clientY,
          hue: 200 + Math.random() * 80,
          size: 2 + Math.random() * 2,
        });
        if (points.current.length > 30) points.current.shift();
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw tail
      for (let i = 1; i < points.current.length; i++) {
        const a = points.current[i - 1];
        const b = points.current[i];
        const prog = i / points.current.length;

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `hsla(${b.hue}, 90%, 72%, ${prog * 0.85})`;
        ctx.lineWidth = b.size * prog * 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
      }

      // Draw glowing head
      const mx = mouse.current.x;
      const my = mouse.current.y;
      if (mx > 0) {
        // Outer glow
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, 20);
        gradient.addColorStop(0, 'rgba(167, 139, 250, 0.6)');
        gradient.addColorStop(0.4, 'rgba(99, 102, 241, 0.2)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(mx, my, 20, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core white dot
        ctx.beginPath();
        ctx.arc(mx, my, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.shadowColor = '#a78bfa';
        ctx.shadowBlur = 16;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    window.addEventListener('mousemove', onMouseMove);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};
