/**
 * Composición global: áreas seguras, preferencia de tema y navegación Expo Router. El
 * navegador consume el tema dentro de su proveedor.
 */
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '../context/ThemeContext';
import { useTheme } from '../hooks/useTheme';

/** Configura la navegación y la barra de estado con el tema activo. */
function RootNavigator() {
  const { theme, themeMode } = useTheme();
  return (
    <>
      <StatusBar
        barStyle={themeMode === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.colors.background },
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
}
/** Instala los proveedores antes de montar cualquier pantalla. */
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
