import { FC, useEffect, useRef } from 'react';

import { useCanvasContext } from '../hooks/useCanvas';
import useResponsiveSize from '../hooks/useResponsiveSize';
import WaveObj from '../utils/wave';

interface WaveProps {
  height?: number;
}

const Wave: FC<WaveProps> = ({ height = 600 }) => {
  const { context, width: contextWidth } = useCanvasContext();
  const { width: responsiveWidth } = useResponsiveSize();
  const width = contextWidth || responsiveWidth;
  const requestIdRef = useRef<number>();
  const wavesRef = useRef<{ [key: string]: WaveObj }>();
  const frequencyRef = useRef(0.013);

  useEffect(() => {
    // Initialize random waves only once
    if (!wavesRef.current) {
      const getRandom = (min: number, max: number) =>
        Math.random() * (max - min) + min;

      wavesRef.current = {
        frontWave: new WaveObj(
          [getRandom(0.02, 0.03), getRandom(0.02, 0.04), getRandom(0.01, 0.02)],
          'rgb(159, 79, 254, 0.1)'
        ),
        backWave: new WaveObj(
          [
            getRandom(0.01, 0.02),
            getRandom(0.01, 0.03),
            getRandom(0.005, 0.01),
          ],
          'rgb(159, 79, 254, 0.1)'
        ),
        MiddleWave: new WaveObj(
          [
            getRandom(0.001, 0.002),
            getRandom(0.001, 0.002),
            getRandom(0.001, 0.002),
          ],
          'rgb(159, 79, 254,0.1)'
        ),
        ThirdWave: new WaveObj(
          [
            getRandom(0.01, 0.02),
            getRandom(0.01, 0.03),
            getRandom(0.005, 0.01),
          ],
          'rgba(159, 79, 254,0.1)'
        ),
      };
      // Random start frequency
      frequencyRef.current = getRandom(0, 10);
    }
  }, []);

  useEffect(() => {
    let cleanup = () => {};

    if (context && width) {
      const render = () => {
        context.clearRect(0, 0, width, height);
        if (wavesRef.current) {
          Object.entries(wavesRef.current).forEach(([, wave]) => {
            wave.draw(context, width, height, frequencyRef.current);
          });
        }
        frequencyRef.current += 0.013;
        requestIdRef.current = requestAnimationFrame(render);
      };

      render();

      cleanup = () => {
        if (requestIdRef.current) cancelAnimationFrame(requestIdRef.current);
      };
    }

    return cleanup;
  }, [context, width, height]);

  return null;
};

export default Wave;
