/**
 * Único acceso a AsyncStorage. Valida las preferencias recuperadas y propaga errores
 * al proveedor para mostrarlos en línea sin ventanas de alerta.
 *
 * Lectura guiada. Servicio reutilizable de la aplicación. Separa operaciones de datos o
 * comunicación de la presentación; sus funciones importadas indican si la operación es
 * local, HTTP o de servidor.
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { ThemeMode } from '../types/theme';
import { THEME_STORAGE_KEY } from '../constants/app';

/**
 * Guarda el modo validado por TypeScript bajo la clave propia del proyecto.
 * @throws Si AsyncStorage no puede escribir; el proveedor gestiona el mensaje.
 *
 * Para seguir el recorrido: Guarda solo la preferencia visual en AsyncStorage. Es
 * almacenamiento local del dispositivo, no una base de usuarios ni un lugar para
 * contraseñas.
 */
export async function saveThemePreference(
  themeMode: ThemeMode,
): Promise<void> {
  await AsyncStorage.setItem(THEME_STORAGE_KEY, themeMode);
}

/**
 * Devuelve light o dark; valores ausentes o inválidos se interpretan como sin
 * preferencia.
 * @throws Si AsyncStorage no puede leer; no confunde el fallo con una preferencia
 * inexistente.
 *
 * Para seguir el recorrido: Recupera la preferencia visual persistida y valida el valor
 * antes de usarlo. La aplicación puede volver a su opción inicial si no hay una
 * preferencia utilizable.
 */
export async function getThemePreference(): Promise<ThemeMode | null> {
  const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return null;
}
