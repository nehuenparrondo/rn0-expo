/**
 * Configuración de las cuatro variantes del saludo. Separa tipografía, tamaños
 * responsive y tonos de la lógica de la pantalla; usa fuentes disponibles en cada
 * plataforma.
 */
import { Platform, type TextStyle } from 'react-native';

/** Apariencia independiente de la interacción: tamaños en puntos y tonos del tema. */
interface GreetingStyle {
  textStyle: TextStyle;
  mobileSize: number;
  desktopSize: number;
  firstTone: 'default' | 'primary' | 'accent';
  secondTone: 'default' | 'primary' | 'accent';
}

export const GREETING_STYLES: readonly GreetingStyle[] = [
  {
    textStyle: { fontWeight: '900', letterSpacing: -4 },
    mobileSize: 72,
    desktopSize: 112,
    firstTone: 'primary',
    secondTone: 'default',
  },
  {
    textStyle: { fontWeight: '500', fontStyle: 'italic', letterSpacing: -2 },
    mobileSize: 64,
    desktopSize: 96,
    firstTone: 'default',
    secondTone: 'primary',
  },
  {
    textStyle: {
      fontWeight: '600',
      fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
      letterSpacing: 1,
    },
    mobileSize: 48,
    desktopSize: 80,
    firstTone: 'accent',
    secondTone: 'default',
  },
  {
    textStyle: {
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: 5,
    },
    mobileSize: 40,
    desktopSize: 68,
    firstTone: 'primary',
    secondTone: 'accent',
  },
];
