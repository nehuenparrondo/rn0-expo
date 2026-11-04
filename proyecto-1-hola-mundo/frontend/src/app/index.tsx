/**
 * Punto de entrada de la pantalla. Delega la interfaz en pages para mantener las
 * rutas sin lógica de presentación.
 *
 * Lectura guiada. Entrada de Expo Router que une una ruta con su pantalla. Los componentes
 * de uso general permanecen fuera de app para no convertirse accidentalmente en rutas.
 */
import { HomePage } from '../pages/HomePage';

/** Renderiza la página inicial sin introducir estado en la ruta. */
export default function HomeRoute() {
  return <HomePage />;
}
