/**
 * Ejemplos exclusivos de cada sistema y notas sobre APIs obsoletas. No importa ni
 * monta componentes deprecados; distingue la alternativa actual del ejemplo
 * histórico.
 *
 * Lectura guiada. Agrupa ejemplos con comportamiento dependiente de la plataforma y evita
 * tratar APIs históricas como funciones disponibles en todos los dispositivos.
 */
import { useRef, useState } from 'react';
import {
  DrawerLayoutAndroid,
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeComponentName } from '../../data/components';
import { useTheme } from '../../hooks/useTheme';
import { ActionButton } from '../atoms/ActionButton';
import { AppText } from '../atoms/AppText';
import { DemoDialog } from '../molecules/DemoDialog';
import { KeyboardPreview } from './KeyboardPreview';

type PlatformName = Extract<
  NativeComponentName,
  | 'DrawerLayoutAndroid'
  | 'TouchableNativeFeedback'
  | 'InputAccessoryView'
  | 'SafeAreaView'
  | 'ProgressBarAndroid'
>;
/** Monta únicamente APIs compatibles y explica las alternativas de las obsoletas. */
export function PlatformPreview({ name }: { name: PlatformName }) {
  const { theme } = useTheme();
  const drawerRef = useRef<DrawerLayoutAndroid>(null);
  const [pressCount, setPressCount] = useState(0);
  const [visible, setVisible] = useState(false);
  if (name === 'InputAccessoryView') return <KeyboardPreview accessory />;
  if (name === 'SafeAreaView') {
    return (
      <>
        <ActionButton
          label="Ver alternativa de área segura"
          onPress={() => setVisible(true)}
        />
        <DemoDialog
          visible={visible}
          title="Área segura: alternativa actual"
          onClose={() => setVisible(false)}
        >
          <SafeAreaView style={{ backgroundColor: theme.colors.primarySoft }}>
            <View style={{ padding: 18 }}>
              <AppText>Contenido dentro del área segura.</AppText>
            </View>
          </SafeAreaView>
          <AppText tone="muted" variant="caption">
            El componente original está obsoleto. Este ejemplo usa
            react-native-safe-area-context; no ejecuta la API anterior.
          </AppText>
        </DemoDialog>
      </>
    );
  }
  if (name === 'ProgressBarAndroid')
    return (
      <AppText variant="caption" tone="muted">
        API obsoleta: se conserva su explicación y código histórico, pero no se
        monta para evitar avisos de deprecación. En proyectos nuevos se utiliza
        una alternativa mantenida compatible con el entorno nativo.
      </AppText>
    );
  if (Platform.OS !== 'android')
    return (
      <AppText variant="caption" tone="muted">
        Este ejemplo requiere Android. En iOS y web se muestra su explicación,
        no una imitación.
      </AppText>
    );
  if (name === 'TouchableNativeFeedback')
    return (
      <View style={{ gap: 10 }}>
        <TouchableNativeFeedback
          accessibilityRole="button"
          onPress={() => setPressCount((currentCount) => currentCount + 1)}
          background={TouchableNativeFeedback.Ripple(
            theme.colors.accent,
            false,
          )}
        >
          <View
            style={[
              styles.touchable,
              { backgroundColor: theme.colors.primarySoft },
            ]}
          >
            <AppText tone="primary">Tocá para ver la onda</AppText>
          </View>
        </TouchableNativeFeedback>
        <AppText variant="caption" tone="muted">
          Pulsaciones: {pressCount}
        </AppText>
      </View>
    );
  return (
    <View style={{ height: 220 }}>
      <DrawerLayoutAndroid
        ref={drawerRef}
        drawerWidth={220}
        drawerPosition="left"
        drawerBackgroundColor={theme.colors.surfaceSecondary}
        renderNavigationView={() => (
          <View style={{ flex: 1, padding: 18, gap: 16 }}>
            <AppText variant="subtitle">Panel lateral</AppText>
            <AppText tone="muted">Este es un drawer nativo.</AppText>
            <ActionButton
              label="Cerrar panel"
              onPress={() => drawerRef.current?.closeDrawer()}
            />
          </View>
        )}
      >
        <View
          style={{ flex: 1, justifyContent: 'center', gap: 12, padding: 12 }}
        >
          <AppText variant="caption" tone="muted">
            Deslizá desde la izquierda o tocá el botón.
          </AppText>
          <ActionButton
            label="Abrir panel"
            onPress={() => drawerRef.current?.openDrawer()}
          />
        </View>
      </DrawerLayoutAndroid>
    </View>
  );
}
const styles = StyleSheet.create({
  touchable: {
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    overflow: 'hidden',
  },
});
