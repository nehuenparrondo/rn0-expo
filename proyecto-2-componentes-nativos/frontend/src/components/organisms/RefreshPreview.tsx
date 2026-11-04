/**
 * Recarga local simulada de un segundo. Ignora solicitudes simultáneas y cancela el
 * temporizador al desmontarse; no requiere red ni backend.
 *
 * Lectura guiada. Demuestra el gesto de actualizar con estado y temporizador. No hay una
 * petición real de red detrás del ejemplo.
 */
import { useEffect, useRef, useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { ActionButton } from '../atoms/ActionButton';
import { AppText } from '../atoms/AppText';
import { DemoDialog } from '../molecules/DemoDialog';

/** Abre la demostración de actualización por gesto o por botón. */
export function RefreshPreview() {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [refreshCount, setRefreshCount] = useState(0);
  const pendingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (pendingTimer.current !== null) clearTimeout(pendingTimer.current);
    },
    [],
  );
  /**
   * Simula el tiempo de una recarga del ejemplo y actualiza su estado visual. Este catálogo
   * no consulta una API ni descarga registros reales.
   */
  function refresh() {
    if (pendingTimer.current !== null) return;
    setRefreshing(true);
    pendingTimer.current = setTimeout(() => {
      setRefreshCount((currentCount) => currentCount + 1);
      setRefreshing(false);
      pendingTimer.current = null;
    }, 1000);
  }
  return (
    <>
      <ActionButton
        label="Probar actualización"
        onPress={() => setVisible(true)}
      />
      <DemoDialog
        visible={visible}
        onClose={() => setVisible(false)}
        title="RefreshControl"
      >
        <ScrollView
          style={{ height: 290 }}
          contentContainerStyle={{ minHeight: 360, gap: 16, padding: 12 }}
          alwaysBounceVertical
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={refresh}
              tintColor={theme.colors.primary}
              colors={[theme.colors.primary]}
            />
          }
        >
          <AppText tone="muted">
            Deslizá hacia abajo desde el inicio de esta ventana.
          </AppText>
          <AppText accessibilityLiveRegion="polite">
            Actualizaciones: {refreshCount}
          </AppText>
          <View>
            <ActionButton
              label={refreshing ? 'Actualizando…' : 'Actualizar ahora'}
              onPress={refresh}
              disabled={refreshing}
            />
          </View>
          <AppText variant="caption" tone="muted">
            La recarga está simulada; no necesita un servidor.
          </AppText>
        </ScrollView>
      </DemoDialog>
    </>
  );
}
