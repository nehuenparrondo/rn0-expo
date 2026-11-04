/**
 * Compatibilidad con enlaces antiguos. Redirige /explore a / sin duplicar pantallas
 * ni mantener navegación obsoleta.
 *
 * Lectura guiada. Esta ruta conserva una redirección al inicio. No implementa la pestaña
 * adicional pedida por la consigna; ese requisito sigue pendiente.
 */
import { Redirect } from 'expo-router';

/** Mantiene accesibles las URL antiguas mediante una redirección. */
export default function ExploreRoute() {
  return <Redirect href="/" />;
}
