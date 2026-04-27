import React, { useEffect, useRef } from 'react';

export default function CanvasHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId;
    let frame = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Performance rule: reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    // Debounce resize
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setSize, 200);
    };
    window.addEventListener('resize', handleResize);
    setSize();

    // Setup objects
    const isMobile = width < 768;

    // 1. Dust Particles
    const dustCount = isMobile ? 30 : 80;
    const dustParticles = Array.from({ length: dustCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speedY: -Math.random() * 0.5 - 0.1,
      speedX: Math.random() * 0.4 - 0.2,
      offset: Math.random() * Math.PI * 2,
      flickerSpeed: Math.random() * 0.05 + 0.01,
    }));

    // 3. Wind Turbines
    const turbines = [
      { x: width * 0.2, y: height * 0.65, size: 1.2, speed: 0.02, angle: 0 },
      { x: width * 0.5, y: height * 0.55, size: 0.8, speed: 0.015, angle: Math.PI / 3 },
      { x: width * 0.8, y: height * 0.7, size: 1.5, speed: 0.025, angle: Math.PI / 2 }
    ];

    // 4. Drone
    const drone = {
      x: 0,
      y: height * 0.3,
      targetX: width * 0.8,
      targetY: height * 0.4,
      history: [],
      maxHistory: 16
    };

    const drawFieldRows = () => {
      ctx.fillStyle = '#0a2e22'; // Base dark forest
      ctx.fillRect(0, height * 0.4, width, height * 0.6);

      const rows = isMobile ? 8 : 16;
      const rowHeight = (height * 0.6) / rows;
      
      const scrollOffset = prefersReducedMotion ? 0 : (frame * 0.5) % rowHeight;

      ctx.strokeStyle = '#0F6E56';
      ctx.lineWidth = 2;

      for (let i = -1; i <= rows + 1; i++) {
        const y = height * 0.4 + i * rowHeight + scrollOffset;
        ctx.beginPath();
        for (let x = 0; x <= width; x += 50) {
          // Sine wave organic edge
          const wave = Math.sin(x * 0.01 + y * 0.02 + frame * 0.01) * 15;
          if (x === 0) ctx.moveTo(x, y + wave);
          else ctx.lineTo(x, y + wave);
        }
        ctx.stroke();
      }
    };

    const drawSolarPanels = () => {
      const panelWidth = 120;
      const panelHeight = 60;
      const startX = width * 0.6;
      const startY = height * 0.75;
      
      ctx.save();
      // Breathing opacity formula
      const opacity = 0.15 + Math.sin(frame * 0.02) * 0.08;
      
      for(let row = 0; row < 3; row++) {
        for(let col = 0; col < 4; col++) {
          const px = startX + col * (panelWidth + 10) - (row * 30);
          const py = startY + row * (panelHeight + 15);
          
          ctx.translate(px, py);
          ctx.transform(1, 0, -0.5, 1, 0, 0); // skew
          
          // Panel base
          ctx.fillStyle = `rgba(2, 6, 23, ${opacity + 0.4})`;
          ctx.fillRect(0, 0, panelWidth, panelHeight);
          
          // Internal cell grid lines
          ctx.strokeStyle = `rgba(15, 110, 86, ${opacity + 0.2})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          for(let i=1; i<4; i++) {
            ctx.moveTo(i * (panelWidth/4), 0);
            ctx.lineTo(i * (panelWidth/4), panelHeight);
          }
          for(let i=1; i<3; i++) {
            ctx.moveTo(0, i * (panelHeight/3));
            ctx.lineTo(panelWidth, i * (panelHeight/3));
          }
          ctx.stroke();
          
          // Glint effect traveling
          const glintPos = (frame * 2) % (panelWidth * 2) - panelWidth;
          const glintGrad = ctx.createLinearGradient(glintPos, 0, glintPos + 20, 0);
          glintGrad.addColorStop(0, 'rgba(255,255,255,0)');
          glintGrad.addColorStop(0.5, `rgba(255,255,255,${opacity + 0.1})`);
          glintGrad.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.fillStyle = glintGrad;
          ctx.fillRect(0, 0, panelWidth, panelHeight);
          
          ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform
        }
      }
      ctx.restore();
    };

    const drawTurbines = () => {
      turbines.forEach(t => {
        if (!prefersReducedMotion) t.angle += t.speed;
        
        ctx.save();
        ctx.translate(t.x, t.y);
        ctx.scale(t.size, t.size);
        
        // Tapered tower
        ctx.fillStyle = '#C9A84C'; // Gold tower
        ctx.beginPath();
        ctx.moveTo(-4, 0);
        ctx.lineTo(4, 0);
        ctx.lineTo(2, -100);
        ctx.lineTo(-2, -100);
        ctx.fill();
        
        // Nacelle
        ctx.translate(0, -100);
        ctx.fillStyle = '#F8F6F0';
        ctx.beginPath();
        ctx.roundRect(-8, -5, 20, 10, 5);
        ctx.fill();
        
        // Hub & Blades
        ctx.translate(10, 0);
        ctx.rotate(t.angle);
        
        ctx.fillStyle = 'rgba(248, 246, 240, 0.9)';
        for(let i=0; i<3; i++) {
          ctx.rotate((Math.PI * 2) / 3);
          ctx.beginPath();
          ctx.moveTo(0, -3);
          // Curved quadratic blades
          ctx.quadraticCurveTo(40, -5, 60, 0);
          ctx.quadraticCurveTo(40, 5, 0, 3);
          ctx.fill();
        }
        
        ctx.restore();
      });
    };

    const drawDrone = () => {
      if (!prefersReducedMotion) {
        // Eased left-to-right sweep path
        drone.x += (drone.targetX - drone.x) * 0.01;
        drone.y += (drone.targetY - drone.y) * 0.01;
        
        if (Math.abs(drone.x - drone.targetX) < 10) {
          drone.targetX = Math.random() * width;
          drone.targetY = height * 0.2 + Math.random() * height * 0.4;
        }

        // 16-point trailing tail
        drone.history.push({x: drone.x, y: drone.y});
        if (drone.history.length > drone.maxHistory) {
          drone.history.shift();
        }
      }

      ctx.save();
      // Emerald Glow
      ctx.shadowColor = '#34D399';
      ctx.shadowBlur = 15;
      
      // Draw Tail
      if (drone.history.length > 1) {
        ctx.beginPath();
        ctx.moveTo(drone.history[0].x, drone.history[0].y);
        for(let i=1; i<drone.history.length; i++) {
          ctx.lineTo(drone.history[i].x, drone.history[i].y);
        }
        ctx.strokeStyle = `rgba(52, 211, 153, 0.5)`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Draw Drone Body
      ctx.translate(drone.x, drone.y);
      ctx.fillStyle = '#111111';
      ctx.fillRect(-8, -3, 16, 6);
      ctx.fillStyle = '#34D399';
      ctx.fillRect(-2, -2, 4, 4); // glow core
      
      // Scanning Line
      const scanLength = 150;
      const scanAngle = Math.sin(frame * 0.05) * 0.5;
      ctx.rotate(scanAngle);
      const scanGrad = ctx.createLinearGradient(0, 0, 0, scanLength);
      scanGrad.addColorStop(0, 'rgba(52, 211, 153, 0.4)');
      scanGrad.addColorStop(1, 'rgba(52, 211, 153, 0)');
      ctx.fillStyle = scanGrad;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-30, scanLength);
      ctx.lineTo(30, scanLength);
      ctx.fill();

      ctx.restore();
    };

    const drawDust = () => {
      ctx.fillStyle = '#F8F6F0';
      dustParticles.forEach(p => {
        if (!prefersReducedMotion) {
          p.y += p.speedY;
          p.x += p.speedX;
          if (p.y < 0) p.y = height;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
        }
        // Flicker opacity using sine wave per particle
        const opacity = Math.abs(Math.sin(frame * p.flickerSpeed + p.offset)) * 0.6;
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;
    };

    const drawVignette = () => {
      // Vignette gradient with left-edge darkening - exact stops
      const gradient = ctx.createLinearGradient(0, 0, width * 0.4, 0);
      gradient.addColorStop(0, 'rgba(17, 17, 17, 0.8)');
      gradient.addColorStop(0.5, 'rgba(17, 17, 17, 0.3)');
      gradient.addColorStop(1, 'rgba(17, 17, 17, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const radialGrad = ctx.createRadialGradient(width/2, height/2, height*0.3, width/2, height/2, height*0.8);
      radialGrad.addColorStop(0, 'rgba(17, 17, 17, 0)');
      radialGrad.addColorStop(1, 'rgba(17, 17, 17, 0.4)');
      ctx.fillStyle = radialGrad;
      ctx.fillRect(0, 0, width, height);
    };

    const render = () => {
      ctx.fillStyle = '#041510'; // Deep dark base
      ctx.fillRect(0, 0, width, height);

      drawFieldRows();
      drawSolarPanels();
      drawTurbines();
      drawDrone();
      drawDust();
      drawVignette();

      frame++;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0" 
      style={{ touchAction: 'none' }}
    />
  );
}
