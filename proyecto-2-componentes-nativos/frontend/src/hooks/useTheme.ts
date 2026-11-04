/**
 * Acceso tipado al tema global. Un error fuera de ThemeProvider indica un uso
 * incorrecto del hook, no un fallo del usuario.
 *
 * Lectura guiada. Parte del sistema visual: comparte colores, tamaños o preferencia de
 * tema según su implementación. La preferencia de apariencia es independiente de la
 * autenticación y de los datos de las tareas.
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
