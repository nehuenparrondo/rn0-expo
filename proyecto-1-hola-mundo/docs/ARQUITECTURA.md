# Arquitectura y mantenimiento

## Flujo de ejecución

1. Expo carga expo-router/entry. Las rutas de frontend/src/app no contienen la lógica de las demostraciones.
2. _layout instala SafeAreaProvider y ThemeProvider, y monta Stack sin cabecera del navegador.
3. La ruta index delega en HomePage.
4. PageTemplate controla distribución, áreas seguras y acciones globales. Los hijos muestran el contenido.
5. Los componentes consultan useTheme; solo storageService conoce AsyncStorage.

## Mapa del código

| Módulo (dentro de frontend/src) | Responsabilidad / contrato |
| --- | --- |
| app/_layout.tsx | Proveedores, navegación y barra de estado; el consumidor del tema está dentro del proveedor. |
| app/index.tsx | Adaptador de ruta sin estado propio. |
| app/explore.tsx | Redirección de enlaces antiguos al inicio. |
| pages/HomePage.tsx | Índice local del estilo y composición del saludo. |
| components/atoms/AppText.tsx | Variantes body/title/subtitle/eyebrow/caption, tonos y estilo final personalizable; admite TextProps. |
| components/atoms/IconButton.tsx | Ionicons, etiqueta accesible, acción, estado disabled y superficie táctil. |
| components/molecules/BrandMark.tsx | Marca sin estado ni efectos. |
| components/templates/PageTemplate.tsx | Layout, áreas seguras, selector de tema e información de errores recuperables. |
| context/ThemeContext.tsx | Restaura preferencia y publica theme, themeMode, isThemeReady, storageError y toggleTheme. |
| hooks/useTheme.ts | Acceso al contexto; lanza Error si falta el proveedor (invariante de programación). |
| hooks/useBreakpoint.ts | Dimensiones reactivas y categorías móvil/tablet/escritorio/orientación. |
| services/storageService.ts | saveThemePreference escribe; getThemePreference acepta solo light/dark o devuelve null. Propaga errores de E/S. |
| constants/app.ts | Clave exclusiva @proyecto1/theme. |
| styles/colors.ts | Paletas con nombres semánticos: superficies, texto, acciones, estados y bordes. |
| styles/theme.ts | Construcción de AppTheme claro y oscuro. |
| styles/breakpoints.ts | Móvil <768, tablet 768–1023 y escritorio >=1024 puntos. |
| styles/greeting.ts | Cuatro configuraciones de tamaño, fuente y tonos. |
| types/theme.ts | ThemeMode, ThemeColors y AppTheme: contratos sin efectos secundarios. |

## Estado y efectos

- **Global:** solo el tema. Arranca en oscuro; se restaura antes de habilitar el control. No hay peticiones HTTP.
- **Persistencia:** una cola Promise procesa escrituras en orden. Los indicadores isActive evitan actualizaciones desde efectos cancelados; los fallos se muestran como texto y no como ventanas emergentes.
- **Local:** styleIndex avanza módulo longitud del arreglo; no cambia rutas ni almacenamiento.

## Configuración y recursos

- app.json: nombre, slug, iconos, orientación y plugins Expo. No contiene lógica de interfaz.
- package.json/package-lock.json: tareas y versiones; actualizar respetando Expo SDK 57 mediante expo install.
- tsconfig.json: modo estricto y alias de importación. eslint.config.js excluye cachés/exportaciones.
- El script destructivo reset-project y los componentes sin uso de la plantilla inicial fueron retirados. Los recursos de la aplicación se conservaron.
- Los recursos son locales; no se requieren cuentas de correo, Mailtrap, servidor Node ni permisos de cámara/ubicación.

## Cómo extender sin mezclar responsabilidades

Agregar variantes en styles/greeting.ts; mantener el arreglo no vacío. Cambiar los márgenes globales en PageTemplate, no en la ruta.
Para introducir almacenamiento nuevo, extender un servicio; no acceder a AsyncStorage desde una vista. Conservar comentarios de intención y contratos sin narrar cada línea. Validar con npm run validate y exportar las tres plataformas antes de entregar.

## Límites

La compilación multiplataforma no reemplaza probar un dispositivo real. Gestos, teclado, safe areas, barra de estado y componentes Android/iOS deben comprobarse en su sistema. Los ejemplos históricos no se presentan como APIs vigentes. No se prometen ausencia de avisos del sistema ni compatibilidad con versiones futuras de Expo Go.
