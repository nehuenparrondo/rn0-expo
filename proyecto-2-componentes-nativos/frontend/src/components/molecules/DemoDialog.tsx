/**
 * Ventana de demostración controlada por su componente padre. Respeta áreas seguras y
 * permite cerrar mediante el botón o el retroceso de Android.
 */
import type { PropsWithChildren } from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../hooks/useTheme';
import { AppText } from '../atoms/AppText';

interface DemoDialogProps extends PropsWithChildren {
  visible: boolean;
  title: string;
  onClose: () => void;
  fullScreen?: boolean;
}
/** Presenta children cuando visible es true; onClose queda a cargo del padre. */
export function DemoDialog({
  visible,
  title,
  onClose,
  children,
  fullScreen = false,
}: DemoDialogProps) {
  const { theme } = useTheme();
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.overlay}>
        <View
          accessibilityViewIsModal
          style={[
            styles.panel,
            {
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.border,
            },
            fullScreen && { flex: 1 },
          ]}
        >
          <View style={styles.header}>
            <AppText
              accessibilityRole="header"
              variant="subtitle"
              style={{ flex: 1 }}
            >
              {title}
            </AppText>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Cerrar ejemplo"
              onPress={onClose}
              style={styles.close}
            >
              <AppText tone="primary" style={{ fontWeight: '700' }}>
                Cerrar
              </AppText>
            </Pressable>
          </View>
          {children}
        </View>
      </SafeAreaView>
    </Modal>
  );
}
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#000000B3',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  panel: {
    width: '100%',
    maxWidth: 560,
    borderRadius: 24,
    borderWidth: 1,
    padding: 20,
    gap: 22,
    maxHeight: '100%',
  },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  close: {
    minWidth: 54,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
