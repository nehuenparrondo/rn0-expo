/**
 * Contratos compartidos del tema: modos permitidos, colores semánticos y estructura
 * completa. Solo contiene tipos, sin dependencias de interfaz ni efectos.
 */
/** Modos aceptados por el selector y el almacenamiento. */
export type ThemeMode = 'light' | 'dark';

/** Tokens de superficies, texto, acciones, bordes y estados de resultado. */
export interface ThemeColors {
  background: string;
  surface: string;
  surfaceSecondary: string;
  text: string;
  textSecondary: string;
  primary: string;
  primarySoft: string;
  accent: string;
  onPrimary: string;
  border: string;
  shadow: string;
  error: string;
  success: string;
}

/** Tema resuelto que consumen las vistas sin conocer AsyncStorage. */
export interface AppTheme {
  mode: ThemeMode;
  colors: ThemeColors;
}
