/**
 * Temas completos construidos a partir de las paletas. AppTheme exige el mismo
 * contrato de colores para ambos modos.
 */
import { DARK_COLORS, LIGHT_COLORS } from './colors';
import type { AppTheme } from '../types/theme';

export const lightTheme: AppTheme = {
  mode: 'light',
  colors: LIGHT_COLORS,
};

export const darkTheme: AppTheme = {
  mode: 'dark',
  colors: DARK_COLORS,
};
