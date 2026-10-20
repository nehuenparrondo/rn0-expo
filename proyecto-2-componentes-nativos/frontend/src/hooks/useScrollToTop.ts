/**
 * Estado del control de regreso al inicio a partir del desplazamiento. Solo actualiza
 * React al cruzar el umbral y libera la suscripción de accesibilidad al desmontarse.
 */
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  AccessibilityInfo,
  Keyboard,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  type ScrollView,
} from 'react-native';

/**
 * Devuelve la referencia de ScrollView, visibilidad y manejadores accesibles del
 * control.
 */
export function useScrollToTop() {
  const scrollRef = useRef<ScrollView>(null);
  const visibleRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    let isActive = true;
    const subscription = AccessibilityInfo.addEventListener(
      'reduceMotionChanged',
      setReduceMotion,
    );
    void AccessibilityInfo.isReduceMotionEnabled()
      .then((enabled) => {
        if (isActive) setReduceMotion(enabled);
      })
      .catch(() => {
        // Si el sistema no informa la preferencia se conserva el valor inicial.
      });
    return () => {
      isActive = false;
      subscription.remove();
    };
  }, []);

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const shouldShow = event.nativeEvent.contentOffset.y > 250;
      if (shouldShow !== visibleRef.current) {
        visibleRef.current = shouldShow;
        setIsVisible(shouldShow);
      }
    },
    [],
  );

  const scrollToTop = useCallback(() => {
    Keyboard.dismiss();
    scrollRef.current?.scrollTo({ y: 0, animated: !reduceMotion });
  }, [reduceMotion]);

  return { scrollRef, isVisible, reduceMotion, handleScroll, scrollToTop };
}
