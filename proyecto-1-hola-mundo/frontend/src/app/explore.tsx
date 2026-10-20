/**
 * Compatibilidad con enlaces antiguos. Redirige /explore a / sin duplicar pantallas
 * ni mantener navegación obsoleta.
 */
import { Redirect } from 'expo-router';

/** Mantiene accesibles las URL antiguas mediante una redirección. */
export default function ExploreRoute() {
  return <Redirect href="/" />;
}
