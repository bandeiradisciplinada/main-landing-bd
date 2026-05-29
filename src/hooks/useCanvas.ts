import { createContext, useContext } from 'react';

export const CanvasContext = createContext<{
  context: CanvasRenderingContext2D | undefined;
  width?: number;
}>({
  context: undefined,
  width: undefined,
});

export const useCanvasContext = () => {
  return useContext(CanvasContext);
};
