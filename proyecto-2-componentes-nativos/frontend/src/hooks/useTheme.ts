/**
 * Acceso tipado al tema global. Un error fuera de ThemeProvider indica un uso
 * incorrecto del hook, no un fallo del usuario.
 */
import { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

/**
 * Devuelve el tema y sus controles.
 * @throws Error si se utiliza fuera de ThemeProvider.
 */
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme debe utilizarse dentro de un ThemeProvider.');
  }

  return context;
}
