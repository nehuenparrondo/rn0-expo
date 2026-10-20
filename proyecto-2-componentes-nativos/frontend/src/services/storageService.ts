/**
 * Único acceso a AsyncStorage. Valida las preferencias recuperadas y propaga errores
 * al proveedor para mostrarlos en línea sin ventanas de alerta.
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { ThemeMode } from '../types/theme';
import { THEME_STORAGE_KEY } from '../constants/app';

/**
 * Guarda el modo validado por TypeScript bajo la clave propia del proyecto.
 * @throws Si AsyncStorage no puede escribir; el proveedor gestiona el mensaje.
 */
export async function saveThemePreference(themeMode: ThemeMode): Promise<void> {
  await AsyncStorage.setItem(THEME_STORAGE_KEY, themeMode);
}

/**
 * Devuelve light o dark; valores ausentes o inválidos se interpretan como sin
 * preferencia.
 * @throws Si AsyncStorage no puede leer; no confunde el fallo con una preferencia
 * inexistente.
 */
export async function getThemePreference(): Promise<ThemeMode | null> {
  const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return null;
}
