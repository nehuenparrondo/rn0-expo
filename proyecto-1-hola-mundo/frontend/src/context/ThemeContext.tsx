/**
 * Estado global del tema y coordinación de su persistencia. Restaura la preferencia
 * antes de habilitar el selector y serializa las escrituras para conservar el último
 * cambio.
 */
import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  getThemePreference,
  saveThemePreference,
} from '../services/storageService';
import { darkTheme, lightTheme } from '../styles/theme';
import type { AppTheme, ThemeMode } from '../types/theme';

/** Contrato del proveedor: estado listo, errores recuperables y acción de alternancia. */
interface ThemeContextValue {
  theme: AppTheme;
  themeMode: ThemeMode;
  isThemeReady: boolean;
  storageError: string | null;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);

/**
 * Restaura el modo guardado, publica el tema y encola los cambios posteriores.
 * Las marcas isActive evitan actualizar estado desde tareas pertenecientes a efectos
 * ya desmontados.
 */
export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');
  const [isThemeReady, setIsThemeReady] = useState(false);
  const [storageError, setStorageError] = useState<string | null>(null);
  const pendingSave = useRef<Promise<void>>(Promise.resolve());

  // La lectura termina antes de habilitar cambios para no sobrescribir la preferencia inicial.
  useEffect(() => {
    let isActive = true;
    async function restoreTheme() {
      try {
        const preference = await getThemePreference();
        if (isActive && preference) setThemeMode(preference);
      } catch {
        if (isActive) setStorageError('No se pudo recuperar tu tema guardado.');
      } finally {
        if (isActive) setIsThemeReady(true);
      }
    }
    void restoreTheme();
    return () => {
      isActive = false;
    };
  }, []);

  // La cola resuelve escrituras en orden, incluso cuando el usuario alterna rápidamente.
  useEffect(() => {
    if (!isThemeReady) return;
    let isActive = true;
    pendingSave.current = pendingSave.current
      .then(() => saveThemePreference(themeMode))
      .then(() => {
        if (isActive) setStorageError(null);
      })
      .catch(() => {
        if (isActive)
          setStorageError(
            'El tema cambió, pero no se pudo guardar en este dispositivo.',
          );
      });
    return () => {
      isActive = false;
    };
  }, [isThemeReady, themeMode]);

  const toggleTheme = useCallback(() => {
    if (isThemeReady)
      setThemeMode((currentTheme) =>
        currentTheme === 'dark' ? 'light' : 'dark',
      );
  }, [isThemeReady]);
  const theme = themeMode === 'dark' ? darkTheme : lightTheme;
  const contextValue = useMemo(
    () => ({ theme, themeMode, isThemeReady, storageError, toggleTheme }),
    [theme, themeMode, isThemeReady, storageError, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
