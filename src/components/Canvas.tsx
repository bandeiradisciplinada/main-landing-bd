import { useRef, FC, useEffect, useState } from 'react';

import Wave from './Wave';
import { CanvasContext } from '../hooks/useCanvas';
import useResponsiveSize from '../hooks/useResponsiveSize';

const Canvas: FC<{
  height?: number;
  waveHeight?: number;
  className?: string;
  fullWidth?: boolean;
}> = ({ height = 220, waveHeight = 600, className, fullWidth = false }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { width: responsiveWidth } = useResponsiveSize();
  const [containerWidth, setContainerWidth] = useState(0);

  const [context, setContext] = useState<
    CanvasRenderingContext2D | undefined
  >();

  useEffect(() => {
    const ctx = canvasRef?.current?.getContext('2d');
    if (ctx) setContext(ctx);
  }, []);

  useEffect(() => {
    let cleanup = () => {};

    if (fullWidth && containerRef.current) {
      const updateWidth = () => {
        if (containerRef.current) {
          setContainerWidth(containerRef.current.offsetWidth);
        }
      };

      updateWidth();
      window.addEventListener('resize', updateWidth);
      cleanup = () => window.removeEventListener('resize', updateWidth);
    }

    return cleanup;
  }, [fullWidth]);

  const width = fullWidth ? containerWidth : responsiveWidth;

  return (
    <div ref={containerRef} className={fullWidth ? 'w-full' : ''}>
      <CanvasContext.Provider value={{ context, width }}>
        <canvas
          id="canvas"
          ref={canvasRef}
          width={width}
          height={height}
          className={className}
        ></canvas>
        <Wave height={waveHeight} />
      </CanvasContext.Provider>
    </div>
  );
};

export default Canvas;
