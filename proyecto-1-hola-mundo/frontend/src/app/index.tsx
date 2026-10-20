/**
 * Punto de entrada de la pantalla. Delega la interfaz en pages para mantener las
 * rutas sin lógica de presentación.
 */
import { HomePage } from '../pages/HomePage';

/** Renderiza la página inicial sin introducir estado en la ruta. */
export default function HomeRoute() {
  return <HomePage />;
}
