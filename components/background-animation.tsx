'use client';

import { useEffect, useRef } from 'react';

export function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Array to store particles
    const particles: Particle[] = [];
    
    // Particle class definition
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1; // Size between 1-6
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
        
        // Pastel colors
        const colors = [
          'rgba(159, 122, 234, 0.7)', // Purple
          'rgba(237, 100, 166, 0.7)', // Pink
          'rgba(79, 209, 197, 0.7)',  // Teal
          'rgba(56, 178, 172, 0.7)',  // Emerald
          'rgba(66, 153, 225, 0.7)',  // Blue
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      // Update particle position
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off walls
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
          this.speedY = -this.speedY;
        }
      }

      // Draw particle
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Draw lines between particles that are close to each other
    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) { // Connect particles within 100px
            ctx.beginPath();
            ctx.strokeStyle = `rgba(150, 150, 255, ${0.2 - distance/500})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    // Initialize canvas and particles
    function init() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Create particles
      particles.length = 0; // Clear any existing particles
      const numberOfParticles = Math.min(50, Math.floor(window.innerWidth / 30));
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw each particle
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      connectParticles();
      requestAnimationFrame(animate);
    }

    // Handle window resize
    const handleResize = () => {
      init();
    };

    // Initialize and start animation
    init();
    animate();
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        background: 'transparent'
      }} 
    />
  );
}