import React, { useEffect, useRef } from 'react';

interface WaveAnimationProps {
  className?: string;
  style?: React.CSSProperties;
}

export const WaveAnimation: React.FC<WaveAnimationProps> = ({ className, style }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    let n = 18000;

    const updateDom = () => {
      if (!svgRef.current) return;

      let paths = "";
      
      const minY = -100 * Math.tan(Math.PI / 6) - 30;
      
      let delta = 1;
      let deltaDelta = 0.25;
      
      for (let y = minY; y < 100; y += (delta += (deltaDelta += 0.01))) {
        const pA = [100, y];
        const pB = [0, y + 100 * Math.tan(Math.PI / 6)];
        const rA = 100 / 1.5;
        const thetaA = Math.PI * (-0.15 + 0.3 + 0.3 * Math.sin(y / 150 + 0.6 + n / 100));
        const rB = 100 / 2;
        const thetaB = Math.PI * (-0.2 + 0.3 + 0.3 * Math.sin(y / 150 + 1.3 + n / 110));
        const d = "M" + pA[0] + "," + pA[1] +
                "C" +
                (pA[0] - rA * Math.cos(thetaA)) + "," +
                (pA[1] + rA * Math.sin(thetaA)) + "," +
                (pB[0] + rB * Math.cos(thetaB)) + "," +
                (pB[1] - rB * Math.sin(thetaB)) + "," +
                pB[0] + "," + pB[1];
        
        paths += "<path d='" + d + "' class='wave-path'></path>";
      }
      
      const maxX = 100 + 100 * Math.tan(Math.PI / 6);
      
      delta = 1;
      deltaDelta = 0.3;
      
      for (let x = 0; x < maxX; x += (delta += (deltaDelta += 0.01))) {
        const pA = [x, 0];
        const pB = [x - 100 * Math.tan(Math.PI / 6), 100];
        const rA = 100 / 3;
        const thetaA = Math.PI * (0.6 + 0.15 * Math.sin(x / 150 + 0.3 + n / 120));
        const rB = 100 / 3;
        const thetaB = Math.PI * (0.5 + 0.15 * Math.sin(x / 150 + 1.9 + n / 200));
        const d = "M" + (100 - pA[0]) + "," + pA[1] +
                "C" +
                ((100 - pA[0]) - rA * Math.cos(thetaA)) + "," +
                (pA[1] + rA * Math.sin(thetaA)) + "," +
                ((100 - pB[0]) + rB * Math.cos(thetaB)) + "," +
                (pB[1] - rB * Math.sin(thetaB)) + "," +
                (100 - pB[0]) + "," + pB[1];
        
        paths += "<path d='" + d + "' class='wave-path'></path>";
      }
   
      svgRef.current.innerHTML = paths;
      n += 1;
      
      setTimeout(() => {
        animationFrameRef.current = requestAnimationFrame(updateDom);
      }, 100);
    };

    updateDom();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className={className}
      style={{
        height: 'max(100vh, 100vw)',
        width: 'max(100vh, 100vw)',
        ...style
      }}
      viewBox="0 0 100 100"
    />
  );
};
