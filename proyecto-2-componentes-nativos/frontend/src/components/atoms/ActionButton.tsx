/**
 * Acción reutilizable del catálogo. Centraliza apariencia, etiqueta accesible y
 * bloqueo de pulsaciones mientras una operación está en curso.
 *
 * Lectura guiada. Componente reutilizable ActionButton. Sus props conectan contenido y
 * acciones con el componente que lo usa; para seguir el dato, buscar sus importaciones y
 * los callbacks recibidos en lugar de suponer que guarda directamente en una base.
 */
import { Pressable, StyleSheet } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { AppText } from './AppText';

interface ActionButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}
/**
 * Renderiza una acción textual; disabled impide ejecuciones repetidas y comunica su
 * estado.
 */
export function ActionButton({ label, onPress, disabled = false }: ActionButtonProps) {
  const { theme } = useTheme();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: theme.colors.primary,
          opacity: disabled ? 0.5 : pressed ? 0.75 : 1,
        },
      ]}
    >
      <AppText
        style={{
          color: theme.colors.onPrimary,
          fontWeight: '700',
          textAlign: 'center',
        }}
      >
        {label}
      </AppText>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    minHeight: 46,
    justifyContent: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
  },
});
