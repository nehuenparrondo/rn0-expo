/**
 * Puntos de corte en unidades lógicas de React Native: móvil < 768, tablet < 1024 y
 * escritorio desde 1024. No son tamaños físicos de dispositivo.
 *
 * Lectura guiada. Parte del sistema visual: comparte colores, tamaños o preferencia de
 * tema según su implementación. La preferencia de apariencia es independiente de la
 * autenticación y de los datos de las tareas.
 */
export const BREAKPOINTS = {
  tablet: 768,
  desktop: 1024,
} as const;
