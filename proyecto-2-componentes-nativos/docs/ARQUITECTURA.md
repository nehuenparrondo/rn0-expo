# Arquitectura y mantenimiento

## Flujo de ejecución

1. Expo carga expo-router/entry. Las rutas de frontend/src/app no contienen la lógica de las demostraciones.
2. _layout instala SafeAreaProvider y ThemeProvider, y monta Stack sin cabecera del navegador.
3. La ruta index delega en ComponentsPage.
4. CatalogTemplate controla distribución, áreas seguras y acciones globales. Los hijos muestran el contenido.
5. Los componentes consultan useTheme; solo storageService conoce AsyncStorage.

## Mapa del código

| Módulo (dentro de frontend/src) | Responsabilidad / contrato |
| --- | --- |
| app/_layout.tsx | Proveedores, navegación y barra de estado; el consumidor del tema está dentro del proveedor. |
| app/index.tsx | Adaptador de ruta sin estado propio. |
| pages/ComponentsPage.tsx | Grupos, numeración acumulada y grilla responsive. |
| components/atoms/AppText.tsx | Variantes body/title/subtitle/eyebrow/caption, tonos y estilo final personalizable; admite TextProps. |
| components/atoms/IconButton.tsx | Ionicons, etiqueta accesible, acción, estado disabled y superficie táctil. |
| components/atoms/ActionButton.tsx | Acción textual con disabled y respuesta visual de presión. |
| components/molecules/DemoDialog.tsx | Modal controlado por visible/onClose; cierre explícito y retroceso Android. |
| components/molecules/ScrollToTopButton.tsx | Animated.Value, transición cancelable, movimiento reducido y exclusión accesible cuando está oculto. |
| components/organisms/ComponentCard.tsx | Ficha didáctica tipada; separa explicación y demostración. |
| components/organisms/ComponentPreview.tsx | Selección exhaustiva por nombre: imagen local, texto, entrada, carga, modal y barra de estado; delega grupos especializados. |
| components/organisms/InteractionPreview.tsx | Contadores e interruptor controlados por ficha. TouchableWithoutFeedback se demuestra con Pressable en web porque React Native Web lo desaconseja; en móviles conserva el original. |
| components/organisms/ListPreview.tsx | Datos locales con claves estables y listas horizontales para evitar el anidamiento vertical. |
| components/organisms/KeyboardPreview.tsx | Modal y ajuste de teclado; InputAccessoryView protegido por plataforma iOS. |
| components/organisms/RefreshPreview.tsx | Temporizador de un segundo, bloqueo de duplicados y limpieza al desmontar. |
| components/organisms/PlatformPreview.tsx | Guardas Android/iOS; alternativa de área segura y explicación de APIs antiguas, sin ejecutarlas. |
| data/components.ts | Fuente única de 25 entradas; NativeComponentName deriva de los datos y ComponentEntry define los campos de la ficha. |
| components/templates/CatalogTemplate.tsx | Layout, áreas seguras, selector de tema e información de errores recuperables. |
| context/ThemeContext.tsx | Restaura preferencia y publica theme, themeMode, isThemeReady, storageError y toggleTheme. |
| hooks/useTheme.ts | Acceso al contexto; lanza Error si falta el proveedor (invariante de programación). |
| hooks/useScrollToTop.ts | Referencia de ScrollView, umbral 250, descarte de teclado y preferencia de movimiento reducido. |
| services/storageService.ts | saveThemePreference escribe; getThemePreference acepta solo light/dark o devuelve null. Propaga errores de E/S. |
| constants/app.ts | Clave exclusiva @proyecto2/theme. |
| styles/colors.ts | Paletas con nombres semánticos: superficies, texto, acciones, estados y bordes. |
| styles/theme.ts | Construcción de AppTheme claro y oscuro. |
| types/theme.ts | ThemeMode, ThemeColors y AppTheme: contratos sin efectos secundarios. |

## Estado y efectos

- **Global:** solo el tema. Arranca en oscuro; se restaura antes de habilitar el control. No hay peticiones HTTP.
- **Persistencia:** una cola Promise procesa escrituras en orden. Los indicadores isActive evitan actualizaciones desde efectos cancelados; los fallos se muestran como texto y no como ventanas emergentes.
- **Local:** cada ficha conserva su contador, entrada o estado; abrir una demostración no modifica otras fichas.
- **Limpieza:** RefreshPreview cancela su timeout al desmontarse; ScrollToTopButton detiene la animación; useScrollToTop elimina su suscripción de accesibilidad.
- **Accesibilidad:** el botón oculto no recibe eventos ni foco; reducir movimiento desactiva el desplazamiento animado y la transición.

## Configuración y recursos

- app.json: nombre, slug, iconos, orientación y plugins Expo. No contiene lógica de interfaz.
- package.json/package-lock.json: tareas y versiones; actualizar respetando Expo SDK 57 mediante expo install.
- tsconfig.json: modo estricto y alias de importación. eslint.config.js excluye cachés/exportaciones.
- eas.json conserva perfiles de compilación cloud. No se ejecutó EAS ni se modificó el proyecto remoto vinculado.
- Los recursos son locales; no se requieren cuentas de correo, Mailtrap, servidor Node ni permisos de cámara/ubicación.

## Cómo extender sin mezclar responsabilidades

Agregar primero una entrada en data/components.ts, luego su caso en ComponentPreview y, si tiene lógica propia, un organismo dedicado. No usar APIs obsoletas para evitar una advertencia: explicar sus límites y elegir una alternativa compatible.
Para introducir almacenamiento nuevo, extender un servicio; no acceder a AsyncStorage desde una vista. Conservar comentarios de intención y contratos sin narrar cada línea. Validar con npm run validate y exportar las tres plataformas antes de entregar.

## Límites

La compilación multiplataforma no reemplaza probar un dispositivo real. Gestos, teclado, safe areas, barra de estado y componentes Android/iOS deben comprobarse en su sistema. Los ejemplos históricos no se presentan como APIs vigentes. No se prometen ausencia de avisos del sistema ni compatibilidad con versiones futuras de Expo Go.
