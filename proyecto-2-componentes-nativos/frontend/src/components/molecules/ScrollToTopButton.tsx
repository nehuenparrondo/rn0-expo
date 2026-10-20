/**
 * Control flotante de regreso al inicio. Anima entrada y salida, respeta movimiento
 * reducido y deja de recibir foco o pulsaciones cuando está oculto.
 */
import { useEffect, useState } from 'react';
import { Animated, Platform } from 'react-native';
import { IconButton } from '../atoms/IconButton';

interface ScrollToTopButtonProps {
  visible: boolean;
  reduceMotion: boolean;
  onPress: () => void;
  bottom: number;
  right: number;
}

/**
 * Sincroniza la animación con visible y evita interacción mientras el control está
 * oculto.
 */
export function ScrollToTopButton({
  visible,
  reduceMotion,
  onPress,
  bottom,
  right,
}: ScrollToTopButtonProps) {
  const [progress] = useState(() => new Animated.Value(0));

  useEffect(() => {
    const animation = Animated.timing(progress, {
      toValue: visible ? 1 : 0,
      duration: reduceMotion ? 0 : 180,
      useNativeDriver: Platform.OS !== 'web',
    });
    animation.start();
    return () => animation.stop();
  }, [progress, reduceMotion, visible]);

  return (
    <Animated.View
      aria-hidden={!visible}
      accessibilityElementsHidden={!visible}
      importantForAccessibility={visible ? 'auto' : 'no-hide-descendants'}
      style={{
        position: 'absolute',
        pointerEvents: visible ? 'auto' : 'none',
        right,
        bottom,
        opacity: progress,
        transform: [
          {
            translateY: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [12, 0],
            }),
          },
        ],
      }}
    >
      <IconButton
        iconName="arrow-up-outline"
        label="Volver arriba"
        onPress={onPress}
        disabled={!visible}
        primary
      />
    </Animated.View>
  );
}
