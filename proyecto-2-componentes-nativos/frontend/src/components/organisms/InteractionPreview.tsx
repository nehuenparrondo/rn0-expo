/**
 * Ejemplos controlados de botones, pulsaciones e interruptores. La respuesta aparece
 * dentro de la ficha: no utiliza alertas ni servicios externos.
 */
import { useState } from 'react';
import {
  Button,
  Platform,
  Pressable,
  StyleSheet,
  Switch,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import type { NativeComponentName } from '../../data/components';
import { useTheme } from '../../hooks/useTheme';
import { AppText } from '../atoms/AppText';

type InteractionName = Extract<
  NativeComponentName,
  | 'Button'
  | 'Pressable'
  | 'Switch'
  | 'TouchableOpacity'
  | 'TouchableHighlight'
  | 'TouchableWithoutFeedback'
>;
/** Demuestra pulsaciones o un valor booleano mediante estado local visible. */
export function InteractionPreview({ name }: { name: InteractionName }) {
  const { theme } = useTheme();
  const [pressCount, setPressCount] = useState(0);
  const [enabled, setEnabled] = useState(false);
  // React Native Web desaconseja este Touchable; en móviles se conserva el ejemplo nativo.
  const FeedbackTarget =
    Platform.OS === 'web' ? Pressable : TouchableWithoutFeedback;
  function handlePress() {
    setPressCount((currentCount) => currentCount + 1);
  }
  const text = (
    <AppText
      style={{
        fontWeight: '700',
        textAlign: 'center',
        color: theme.colors.onPrimary,
      }}
    >
      Tocá para probar
    </AppText>
  );
  const buttonStyle = [
    styles.button,
    { backgroundColor: theme.colors.primary },
  ];
  let control;
  switch (name) {
    case 'Button':
      control = (
        <Button
          title="Probar Button"
          color={theme.colors.primary}
          onPress={handlePress}
        />
      );
      break;
    case 'Switch':
      return (
        <View style={styles.row}>
          <AppText>{enabled ? 'Activado' : 'Desactivado'}</AppText>
          <Switch
            accessibilityLabel="Activar opción de ejemplo"
            value={enabled}
            onValueChange={setEnabled}
            trackColor={{
              false: theme.colors.border,
              true: theme.colors.primary,
            }}
            thumbColor="#FFFFFF"
          />
        </View>
      );
    case 'TouchableOpacity':
      control = (
        <TouchableOpacity
          accessibilityRole="button"
          onPress={handlePress}
          activeOpacity={0.3}
          style={buttonStyle}
        >
          {text}
        </TouchableOpacity>
      );
      break;
    case 'TouchableHighlight':
      control = (
        <TouchableHighlight
          accessibilityRole="button"
          onPress={handlePress}
          underlayColor={theme.colors.accent}
          style={styles.button}
        >
          <View style={buttonStyle}>{text}</View>
        </TouchableHighlight>
      );
      break;
    case 'TouchableWithoutFeedback':
      control = (
        <FeedbackTarget
          accessibilityRole="button"
          onPress={handlePress}
        >
          <View style={buttonStyle}>{text}</View>
        </FeedbackTarget>
      );
      break;
    case 'Pressable':
      control = (
        <Pressable
          accessibilityRole="button"
          onPress={handlePress}
          onLongPress={() => setPressCount((currentCount) => currentCount + 5)}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed
                ? theme.colors.accent
                : theme.colors.primary,
            },
          ]}
        >
          {text}
        </Pressable>
      );
      break;
  }
  return (
    <View style={{ gap: 10 }}>
      {control}
      <AppText variant="caption" tone="muted" accessibilityLiveRegion="polite">
        Pulsaciones: {pressCount}
        {name === 'Pressable' ? ' · mantener presionado suma 5' : ''}
      </AppText>
      {name === 'TouchableWithoutFeedback' && Platform.OS === 'web' && (
        <AppText variant="caption" tone="muted">
          En web se usa Pressable sin efecto visual; en el celular se ejecuta
          TouchableWithoutFeedback.
        </AppText>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    minHeight: 46,
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 14,
  },
});
