import { useEffect, useRef } from 'react';

const HeroParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Reactively determine theme using OS preference for Canvas stroke colors
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Star-like colors for dark mode; Brand colors for light mode
    const colors = isDark 
      ? ['#FFFFFF', '#FDFD96', '#ADD8E6', '#E0E0E0', '#FFFACD']
      : ['#9f4ffe', '#5301b4', '#99a0a3', '#1a2e35', '#ec4755'];

    const particles: {
      originX: number;
      originY: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      length: number;
      thickness: number;
      color: string;
      angle: number;
      // Unique sensitivity multipliers for chaos
      repulsionMultiplier: number;
      radiusMultiplier: number;
      baseAlpha: number;
    }[] = [];

    const initParticles = () => {
      particles.length = 0;
      // We only care about the hero section bounds, but we'll fill the canvas
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w;
      canvas.height = h;

      // Increase density to "splash" more on the hero section
      const particleCount = Math.floor((w * h) / 4000); 
      
      for (let i = 0; i < particleCount; i++) {
        // Random distribution
        const x = Math.random() * w;
        const y = Math.random() * h;
        
        // Stars are smaller, some are just dots, some are short dashes
        const isDot = Math.random() > 0.5;
        
        particles.push({
          originX: x,
          originY: y,
          x: x,
          y: y,
          vx: 0,
          vy: 0,
          length: isDot ? Math.random() * 2 + 1 : Math.random() * 8 + 2,
          thickness: isDot ? Math.random() * 2 + 1 : Math.random() * 2 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)] || '#FFFFFF',
          angle: Math.random() * Math.PI * 2,
          repulsionMultiplier: Math.random() * 1.5 + 0.5, // 0.5x to 2x repulsion force
          radiusMultiplier: Math.random() * 0.8 + 0.5, // 0.5x to 1.3x interaction radius
          baseAlpha: Math.random() * 0.6 + 0.2 // Twinkling effect base
        });
      }
    };
    initParticles();

    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      initParticles();
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    window.addEventListener('resize', resize);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', resize);
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      // Get mouse coordinates relative to the canvas
      const rect = canvasRef.current.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const onMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseleave', onMouseLeave);

    let animationFrameId: number;
    const render = () => {
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       
       const baseRepulsionRadius = 250;
       const springFactor = 0.05; // Return speed to origin
       const friction = 0.8; // Damping
       const baseRepulsionForce = 0.8; // How fast they fly away
       
       particles.forEach(p => {
          // Calculate distance to mouse
          const dxMouse = mouse.x - p.x;
          const dyMouse = mouse.y - p.y;
          const distMouse = Math.hypot(dxMouse, dyMouse);
          
          const particleRepulsionRadius = baseRepulsionRadius * p.radiusMultiplier;
          
          if (distMouse < particleRepulsionRadius) {
             // Calculate repulsion force
             const force = (particleRepulsionRadius - distMouse) / particleRepulsionRadius;
             // Angle away from mouse
             const angle = Math.atan2(dyMouse, dxMouse);
             
             // Accelerate away from mouse
             p.vx -= Math.cos(angle) * force * (baseRepulsionForce * p.repulsionMultiplier);
             p.vy -= Math.sin(angle) * force * (baseRepulsionForce * p.repulsionMultiplier);
          }
          
          // Ambient drift
          const driftSpeed = 0.2;
          p.originX += Math.cos(p.angle) * driftSpeed;
          p.originY += Math.sin(p.angle) * driftSpeed;
          
          // Wrap origin around canvas bounds softly
          if (p.originX < -50) p.originX = canvas.width + 50;
          if (p.originX > canvas.width + 50) p.originX = -50;
          if (p.originY < -50) p.originY = canvas.height + 50;
          if (p.originY > canvas.height + 50) p.originY = -50;

          // Spring back to origin
          const dxOrigin = p.originX - p.x;
          const dyOrigin = p.originY - p.y;
          
          p.vx += dxOrigin * springFactor;
          p.vy += dyOrigin * springFactor;
          
          // Apply friction
          p.vx *= friction;
          p.vy *= friction;
          
          // Update position
          p.x += p.vx;
          p.y += p.vy;
          
          // Draw particle
          const dx = Math.cos(p.angle);
          const dy = Math.sin(p.angle);
          
          ctx.beginPath();
          ctx.moveTo(p.x - dx * (p.length / 2), p.y - dy * (p.length / 2));
          ctx.lineTo(p.x + dx * (p.length / 2), p.y + dy * (p.length / 2));
          
          ctx.strokeStyle = p.color;
          ctx.lineWidth = p.thickness;
          ctx.lineCap = 'round';
          
          // Twinkle effect mixed with speed
          const speed = Math.hypot(p.vx, p.vy);
          const dynamicAlpha = Math.min(1, p.baseAlpha + (speed * 0.05));
          ctx.globalAlpha = dynamicAlpha; 
          
          ctx.stroke();
       });

       animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', resize);
      }
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{
         zIndex: -1, // Behind the hero text but catches mouse events
      }}
    />
  );
};

export default HeroParticles;
