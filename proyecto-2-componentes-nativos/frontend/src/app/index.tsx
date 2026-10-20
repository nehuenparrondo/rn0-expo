/**
 * Punto de entrada de la pantalla. Delega la interfaz en pages para mantener las
 * rutas sin lógica de presentación.
 */
import { ComponentsPage } from '../pages/ComponentsPage';
/** Renderiza el catálogo desde su ruta pública. */
export default function ComponentsRoute() {
  return <ComponentsPage />;
}
