"use client";
import React, { useEffect, useRef, useState } from "react";
// Class to represent a single particle
class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.initialX = x;
    this.initialY = y;
    this.velocity = {
      x: Math.random() * 0.5 - 0.25,
      y: Math.random() * 0.5 - 0.25,
    };
  }

  // Method to draw the particle
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  // Method to update particle position and handle mouse interaction
  update(ctx, mouse) {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if (this.x + this.radius > ctx.canvas.width || this.x - this.radius < 0) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.y + this.radius > ctx.canvas.height || this.y - this.radius < 0) {
      this.velocity.y = -this.velocity.y;
    }

    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const maxDistance = 150;
    if (distance < maxDistance) {
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const force = (maxDistance - distance) / maxDistance;
      const speed = 2;
      this.x += forceDirectionX * force * speed;
      this.y += forceDirectionY * force * speed;
    } else {
      const restoreFactor = 0.05;
      this.x += (this.initialX - this.x) * restoreFactor;
      this.y += (this.initialY - this.y) * restoreFactor;
    }

    this.draw(ctx);
  }
}

const HeroBackground = () => {
  const canvasRef = useRef(null);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const mouse = useRef({ x: null, y: null });
  const particles = useRef([]);

  // useEffect hook to handle canvas setup and animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = windowDimensions.width;
    canvas.height = windowDimensions.height;

    const particleCount = 200;

    const init = () => {
      particles.current.length = 0;
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 2 + 1;
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        const color = "rgba(0, 0, 0, 0.8)";
        particles.current.push(new Particle(x, y, radius, color));
      }
    };

    const connect = () => {
      for (let a = 0; a < particles.current.length; a++) {
        const neighbors = [];
        for (let b = a + 1; b < particles.current.length; b++) {
          const dx = particles.current[a].x - particles.current[b].x;
          const dy = particles.current[a].y - particles.current[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          neighbors.push({ particle: particles.current[b], distance });
        }
        neighbors.sort((p1, p2) => p1.distance - p2.distance);

        const maxConnections = 5;
        for (let i = 0; i < Math.min(neighbors.length, maxConnections); i++) {
          const neighbor = neighbors[i].particle;
          const distance = neighbors[i].distance;
          const maxDistance = 100;

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            const lineWidth = 1 - distance / maxDistance + 0.5;
            ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`;
            ctx.lineWidth = lineWidth;
            ctx.beginPath();
            ctx.moveTo(particles.current[a].x, particles.current[a].y);
            ctx.lineTo(neighbor.x, neighbor.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((particle) => {
        particle.update(ctx, mouse.current);
      });
      connect();
    };

    const handleMouseMove = (event) => {
      mouse.current.x = event.x;
      mouse.current.y = event.y;
    };

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    init();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [windowDimensions]);
  return (
    <div className="absolute inset-0 z-0">
      <canvas ref={canvasRef} className="w-full h-full bg-white"></canvas>
    </div>
  );
};

export default HeroBackground;
