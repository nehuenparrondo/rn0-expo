/**
 * Adaptación a ancho, alto y orientación actuales. useWindowDimensions actualiza los
 * valores al rotar el dispositivo o redimensionar la ventana.
 */
import { useWindowDimensions } from 'react-native';

import { BREAKPOINTS } from '../styles/breakpoints';

/** Devuelve dimensiones y categorías responsive mutuamente excluyentes. */
export function useBreakpoint() {
  const { width, height } = useWindowDimensions();

  const isDesktop = width >= BREAKPOINTS.desktop;
  const isTablet =
    width >= BREAKPOINTS.tablet && width < BREAKPOINTS.desktop;
  const isMobile = width < BREAKPOINTS.tablet;
  const isLandscape = width > height;

  return {
    width,
    height,
    isMobile,
    isTablet,
    isDesktop,
    isLandscape,
  };
}
