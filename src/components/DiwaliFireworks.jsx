import React, { useEffect, useRef } from "react";

export default function DiwaliFireworks() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let rockets = [];
    let particles = [];
    let lastLaunch = 0;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const colors = ["#ffd166", "#f8e6b0", "#e9bd65", "#fff4cf"];

    class Rocket {
      constructor() {
        this.x = Math.random() * width;
        this.y = height + 8;
        this.targetY = height * (0.16 + Math.random() * 0.38);
        this.speed = 4.2 + Math.random() * 2.2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y -= this.speed;
        if (this.y <= this.targetY) {
          this.burst();
          return false;
        }
        return true;
      }

      draw() {
        ctx.save();
        ctx.shadowBlur = 12;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      burst() {
        const count = 48 + Math.floor(Math.random() * 28);
        for (let i = 0; i < count; i++) {
          const angle = (Math.PI * 2 * i) / count;
          const speed = 1.2 + Math.random() * 3.2;
          particles.push(new Particle(
            this.x,
            this.y,
            Math.cos(angle) * speed,
            Math.sin(angle) * speed,
            this.color
          ));
        }
      }
    }

    class Particle {
      constructor(x, y, vx, vy, color) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.alpha = 1;
        this.gravity = 0.035;
        this.size = 1 + Math.random() * 1.5;
        this.life = 0.008 + Math.random() * 0.006;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity;
        this.vx *= 0.992;
        this.vy *= 0.992;
        this.alpha -= this.life;
        return this.alpha > 0;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 9;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const animate = (time) => {
      ctx.clearRect(0, 0, width, height);

      // Launch gently spaced fireworks rather than overwhelming the invitation.
      if (time - lastLaunch > 1050 && rockets.length < 3) {
        rockets.push(new Rocket());
        lastLaunch = time;
      }

      rockets = rockets.filter((rocket) => {
        const alive = rocket.update();
        rocket.draw();
        return alive;
      });

      particles = particles.filter((particle) => {
        const alive = particle.update();
        particle.draw();
        return alive;
      });

      animationId = window.requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animationId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="diwali-fireworks"
      aria-hidden="true"
    />
  );
}
