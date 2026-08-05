"use client";

import { useEffect, useRef } from "react";

/**
 * Grid laranja de fundo, fixo atrás de todo o site, que se distorce
 * suavemente perto do cursor do mouse — efeito "tecido elástico".
 */
export default function WarpGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const targetMouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const spacing = 44; // tamanho da célula do grid
    const radius = 170; // raio de influência do mouse
    const strength = 26; // força máxima do deslocamento

    let width = 0;
    let height = 0;
    let dpr = 1;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = width + "px";
      canvas!.style.height = height + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    function displace(x: number, y: number) {
      const dx = x - mouse.current.x;
      const dy = y - mouse.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < radius) {
        const force = (1 - dist / radius) * strength;
        const angle = Math.atan2(dy, dx);
        return { x: x + Math.cos(angle) * force, y: y + Math.sin(angle) * force };
      }
      return { x, y };
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      ctx!.strokeStyle = "rgba(238, 114, 36, 0.28)";
      ctx!.lineWidth = 1;

      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;

      for (let r = 0; r <= rows; r++) {
        ctx!.beginPath();
        for (let c = 0; c <= cols; c++) {
          const p = displace(c * spacing, r * spacing);
          c === 0 ? ctx!.moveTo(p.x, p.y) : ctx!.lineTo(p.x, p.y);
        }
        ctx!.stroke();
      }

      for (let c = 0; c <= cols; c++) {
        ctx!.beginPath();
        for (let r = 0; r <= rows; r++) {
          const p = displace(c * spacing, r * spacing);
          r === 0 ? ctx!.moveTo(p.x, p.y) : ctx!.lineTo(p.x, p.y);
        }
        ctx!.stroke();
      }
    }

    let raf: number;
    function loop() {
      // suaviza o movimento do mouse (easing) pra ficar mais "elástico"
      mouse.current.x += (targetMouse.current.x - mouse.current.x) * 0.15;
      mouse.current.y += (targetMouse.current.y - mouse.current.y) * 0.15;
      draw();
      raf = requestAnimationFrame(loop);
    }
    loop();

    function onMouseMove(e: MouseEvent) {
      targetMouse.current.x = e.clientX;
      targetMouse.current.y = e.clientY;
    }
    function onMouseLeave() {
      targetMouse.current.x = -9999;
      targetMouse.current.y = -9999;
    }
    function onResize() {
      resize();
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-40"
    />
  );
}
