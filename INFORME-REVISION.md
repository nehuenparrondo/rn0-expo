# RN0 · Informe de revisión

Fecha: 18 de octubre de 2026. Alcance: los dos proyectos de esta carpeta, sin intervenir RN1, R5 ni sus servicios.

## Resultado

El saludo y el catálogo funcionan en las comprobaciones realizadas. Se documentaron los 43 archivos activos de TypeScript/TSX, con responsabilidades, contratos y decisiones relevantes en español. Se conserva la separación entre rutas, pantallas, componentes, hooks, contexto, servicios, estilos y tipos. No se agregó un backend artificial: estos ejercicios no lo necesitan.

En la carga final nueva y las interacciones probadas, **ambas consolas web registraron cero errores y cero advertencias**. No se utilizan alertas emergentes ni se ocultan avisos con LogBox o sustituyendo console. Los modales didácticos se mantienen porque forman parte de la demostración del componente Modal; solo se abren por una acción del usuario.

## Cambios principales

- Documentación por módulo y función pública, README actualizado, mapa completo de arquitectura y guion de pruebas manuales para cada proyecto.
- Instrucciones corregidas para ejecutar desde frontend; guía general LEEME-ENTREGA.md y comando npm run validate en ambos proyectos.
- Proyecto 1: retirados 21 archivos de plantilla sin referencias desde las rutas y el script destructivo reset-project. Se conserva /explore como redirección de compatibilidad. Los recursos gráficos se conservaron.
- Proyecto 2: pointerEvents se define en style, no en la propiedad obsoleta de la vista animada; se elimina la sombra de texto desaconsejada en web y se usa un fondo legible sobre la imagen.
- Proyecto 2: TouchableWithoutFeedback conserva el componente nativo en iOS/Android y utiliza Pressable en web, con explicación visible. No se silencia la advertencia del componente anterior.
- Proyecto 2: se evita importar y ejecutar SafeAreaView del núcleo y ProgressBarAndroid, ambos obsoletos. Sus fichas permanecen: la primera demuestra safe-area-context y la segunda presenta explicación/código histórico. No se hacen pasar alternativas por componentes originales.
- Proyecto 2: el botón de actualización comunica su estado deshabilitado durante la espera; se mantiene el bloqueo de operaciones simultáneas y la limpieza del temporizador.
- Dependencias actualizadas dentro de Expo SDK 57: Expo 57.0.30, Router 57.0.28, Constants 57.0.22, Linking 57.0.13 y ajustes compatibles específicos del primer proyecto. Se conservan React 19.2.3 y React Native 0.86.3.
- Se corrigieron las exclusiones de carpetas generadas para la estructura frontend y el alcance recursivo de ESLint. Expo generó además frontend/.gitignore para expo-env.d.ts en ambos proyectos.

## Verificaciones ejecutadas

| Comprobación | Proyecto 1 | Proyecto 2 |
| --- | --- | --- |
| npm ci (instalación inicial real) | Correcta | Correcta |
| npm ci --dry-run con el lockfile final | Correcto | Correcto |
| npm ls --depth=0 | Sin dependencias inválidas | Sin dependencias inválidas |
| TypeScript: npm run typecheck | Sin errores | Sin errores |
| ESLint: npm run lint | Sin errores ni advertencias | Sin errores ni advertencias |
| npx expo install --check | Dependencias compatibles | Dependencias compatibles |
| npx expo-doctor | 21/21 comprobaciones | 21/21 comprobaciones |
| npm run build:all | Exporta Android, iOS y web | Exporta Android, iOS y web |
| Consola web final, carga nueva | 0 errores / 0 advertencias | 0 errores / 0 advertencias |

Se ejecutaron también **115 comprobaciones suplementarias** en un arnés externo, sin introducir una infraestructura de tests en repositorios que no la tenían. Cubren validación y errores de almacenamiento, restauración/cola de temas, contratos de paleta, documentación y ausencia de alertas/supresiones, puntos de corte, ciclo de estilos, esquema y unicidad de las 25 fichas, umbral de scroll, movimiento reducido, limpieza de suscripciones y bloqueo/limpieza de recarga. Los módulos nativos se simulan en ese arnés: no sustituye un dispositivo real.

### Pruebas visuales e interactivas reales en navegador

- Saludo: las cuatro variantes, regreso al estilo inicial, persistencia del tema y redirección /explore → /.
- Catálogo: campo de texto y su salida, Button, Pressable y los tres Touchable generales con contadores, Switch y detener/reiniciar ActivityIndicator.
- Las cuatro listas se desplazaron horizontalmente; se comprobó scrollLeft real en sus contenedores.
- Modal: apertura y cierre; teclado: entrada de texto y cierre; área segura: alternativa moderna y cierre.
- RefreshControl: recarga por botón, estado deshabilitado y un único incremento después de un segundo.
- Volver arriba: aparición tras desplazarse, regreso y ocultación; persistencia del tema del catálogo al recargar.
- Vistas de 320, 390, 768 y 1280 puntos en ambos proyectos, sin desbordamiento horizontal de la página o sus encabezados. Se comprobó legibilidad y acceso a acciones en las capturas.

## Avisos y límites pendientes (no ocultados)

1. **Auditoría de dependencias:** npm audit continúa informando 29 incidencias en el proyecto 1 (18 altas, 11 moderadas) y 28 en el proyecto 2 (18 altas, 10 moderadas), sin críticas. Corresponden a dependencias transitivas y sus cadenas; los orígenes del informe son braces, node-forge, decode-uri-component y uuid. Se ejecutó npm audit fix sin forzar. Las propuestas restantes de npm implican cambios incompatibles, incluida una regresión a Expo 44 o un salto de Router a 58; no se aplicaron. No se afirma que las dependencias estén libres de vulnerabilidades ni que todo el alcance sea exclusivamente de desarrollo.
2. La instalación avisa que ESLint 9 y uuid 7 no tienen soporte actual. Se preservó la compatibilidad del SDK; estos avisos de herramientas no son alertas en pantalla. Resolverlos por completo requiere revisar la actualización del stack por separado.
3. La exportación Android/iOS confirma compilación JavaScript/Hermes y recursos, **no ejecución en hardware, APK/IPA ni publicación**. Falta probar físicamente teclado, notch, barra de estado, gesto de actualización, InputAccessoryView en iPhone y drawer/onda en Android. El guion de cada proyecto indica qué verificar.
4. Se conservó el primer proyecto tal como estaba: una pantalla y cuatro estilos, **sin pestañas**. Si la consigna final del profesor exige un tab adicional, ese requisito no está cubierto por el botón Cambiar estilos y debe resolverse antes de entregar esa consigna específica.
5. No se alteraron permisos de sistema, no se publicaron aplicaciones ni se ejecutó una compilación cloud con EAS. No se puede garantizar ausencia de alertas del sistema operativo o de versiones futuras de Expo Go.

## Cómo mostrar los trabajos

En una terminal por proyecto, entrar en su frontend, ejecutar npm ci y luego npm start -- --go --port 8101 para el saludo o --port 8102 para el catálogo. Para verlos solo en la computadora, usar npm run web con el puerto correspondiente. En esta sesión quedaron disponibles las vistas web en http://127.0.0.1:8101 y http://127.0.0.1:8102 mientras los servidores estén abiertos.

La entrega limpia contiene fuentes, recursos, configuración, lockfiles y documentación. Excluye node_modules, .expo, dist, .git, carpetas de herramientas y archivos privados. Reinstalar desde frontend; no descomprimir encima de otra versión con dependencias antiguas.

## Documentación oficial consultada

Expo SDK 57: https://docs.expo.dev/versions/v57.0.0/ . Las limitaciones de los componentes antiguos están documentadas por React Native: https://reactnative.dev/docs/0.86/safeareaview y https://reactnative.dev/docs/0.86/progressbarandroid . Para avisos específicos de web también se verificó el código instalado de react-native-web 0.21.3, sin modificar node_modules.

## Archivos intervenidos

Rutas relativas a rn0. Los 21 archivos de plantilla y el script retirados están respaldados fuera de la entrega. Se respetaron los cambios Git preexistentes, sin hacer commits ni restaurarlos.

| Proyecto | Archivo | Cambio |
| --- | --- | --- |
| proyecto-1-hola-mundo | .gitignore | modificado |
| proyecto-1-hola-mundo | docs/ARQUITECTURA.md | nuevo |
| proyecto-1-hola-mundo | docs/PRUEBAS-MANUALES.md | nuevo |
| proyecto-1-hola-mundo | frontend/.gitignore | nuevo |
| proyecto-1-hola-mundo | frontend/package-lock.json | modificado |
| proyecto-1-hola-mundo | frontend/package.json | modificado |
| proyecto-1-hola-mundo | frontend/src/app/explore.tsx | modificado |
| proyecto-1-hola-mundo | frontend/src/app/index.tsx | modificado |
| proyecto-1-hola-mundo | frontend/src/app/_layout.tsx | modificado |
| proyecto-1-hola-mundo | frontend/src/components/atoms/AppText.tsx | modificado |
| proyecto-1-hola-mundo | frontend/src/components/atoms/IconButton.tsx | modificado |
| proyecto-1-hola-mundo | frontend/src/components/molecules/BrandMark.tsx | modificado |
| proyecto-1-hola-mundo | frontend/src/components/templates/PageTemplate.tsx | modificado |
| proyecto-1-hola-mundo | frontend/src/constants/app.ts | modificado |
| proyecto-1-hola-mundo | frontend/src/context/ThemeContext.tsx | modificado |
| proyecto-1-hola-mundo | frontend/src/hooks/useBreakpoint.ts | modificado |
| proyecto-1-hola-mundo | frontend/src/hooks/useTheme.ts | modificado |
| proyecto-1-hola-mundo | frontend/src/pages/HomePage.tsx | modificado |
| proyecto-1-hola-mundo | frontend/src/services/storageService.ts | modificado |
| proyecto-1-hola-mundo | frontend/src/styles/breakpoints.ts | modificado |
| proyecto-1-hola-mundo | frontend/src/styles/colors.ts | modificado |
| proyecto-1-hola-mundo | frontend/src/styles/greeting.ts | modificado |
| proyecto-1-hola-mundo | frontend/src/styles/theme.ts | modificado |
| proyecto-1-hola-mundo | frontend/src/types/theme.ts | modificado |
| proyecto-1-hola-mundo | README.md | modificado |
| proyecto-1-hola-mundo | frontend/scripts/reset-project.js | eliminado |
| proyecto-1-hola-mundo | frontend/src/components/animated-icon.module.css | eliminado |
| proyecto-1-hola-mundo | frontend/src/components/animated-icon.tsx | eliminado |
| proyecto-1-hola-mundo | frontend/src/components/animated-icon.web.tsx | eliminado |
| proyecto-1-hola-mundo | frontend/src/components/app-tabs.tsx | eliminado |
| proyecto-1-hola-mundo | frontend/src/components/app-tabs.web.tsx | eliminado |
| proyecto-1-hola-mundo | frontend/src/components/external-link.tsx | eliminado |
| proyecto-1-hola-mundo | frontend/src/components/hint-row.tsx | eliminado |
| proyecto-1-hola-mundo | frontend/src/components/molecules/WelcomeCard.tsx | eliminado |
| proyecto-1-hola-mundo | frontend/src/components/themed-text.tsx | eliminado |
| proyecto-1-hola-mundo | frontend/src/components/themed-view.tsx | eliminado |
| proyecto-1-hola-mundo | frontend/src/components/ui/collapsible.tsx | eliminado |
| proyecto-1-hola-mundo | frontend/src/components/web-badge.tsx | eliminado |
| proyecto-1-hola-mundo | frontend/src/constants/routes.ts | eliminado |
| proyecto-1-hola-mundo | frontend/src/constants/theme.ts | eliminado |
| proyecto-1-hola-mundo | frontend/src/global.css | eliminado |
| proyecto-1-hola-mundo | frontend/src/hooks/use-color-scheme.ts | eliminado |
| proyecto-1-hola-mundo | frontend/src/hooks/use-color-scheme.web.ts | eliminado |
| proyecto-1-hola-mundo | frontend/src/hooks/use-theme.ts | eliminado |
| proyecto-1-hola-mundo | frontend/src/styles/spacing.ts | eliminado |
| proyecto-1-hola-mundo | frontend/src/styles/typography.ts | eliminado |
| proyecto-1-hola-mundo | frontend/src/utils/responsive.ts | eliminado |
| proyecto-2-componentes-nativos | .gitignore | modificado |
| proyecto-2-componentes-nativos | docs/ARQUITECTURA.md | nuevo |
| proyecto-2-componentes-nativos | docs/PRUEBAS-MANUALES.md | nuevo |
| proyecto-2-componentes-nativos | frontend/.gitignore | nuevo |
| proyecto-2-componentes-nativos | frontend/eslint.config.js | modificado |
| proyecto-2-componentes-nativos | frontend/package-lock.json | modificado |
| proyecto-2-componentes-nativos | frontend/package.json | modificado |
| proyecto-2-componentes-nativos | frontend/src/app/index.tsx | modificado |
| proyecto-2-componentes-nativos | frontend/src/app/_layout.tsx | modificado |
| proyecto-2-componentes-nativos | frontend/src/components/atoms/ActionButton.tsx | modificado |
| proyecto-2-componentes-nativos | frontend/src/components/atoms/AppText.tsx | modificado |
| proyecto-2-componentes-nativos | frontend/src/components/atoms/IconButton.tsx | modificado |
| proyecto-2-componentes-nativos | frontend/src/components/molecules/DemoDialog.tsx | modificado |
| proyecto-2-componentes-nativos | frontend/src/components/molecules/ScrollToTopButton.tsx | modificado |
| proyecto-2-componentes-nativos | frontend/src/components/organisms/ComponentCard.tsx | modificado |
| proyecto-2-componentes-nativos | frontend/src/components/organisms/ComponentPreview.tsx | modificado |
| proyecto-2-componentes-nativos | frontend/src/components/organisms/InteractionPreview.tsx | modificado |
| proyecto-2-componentes-nativos | frontend/src/components/organisms/KeyboardPreview.tsx | modificado |
| proyecto-2-componentes-nativos | frontend/src/components/organisms/ListPreview.tsx | modificado |
| proyecto-2-componentes-nativos | frontend/src/components/organisms/PlatformPreview.tsx | modificado |
| proyecto-2-componentes-nativos | frontend/src/components/organisms/RefreshPreview.tsx | modificado |
| proyecto-2-componentes-nativos | frontend/src/components/templates/CatalogTemplate.tsx | modificado |
| proyecto-2-componentes-nativos | frontend/src/constants/app.ts | modificado |
| proyecto-2-componentes-nativos | frontend/src/context/ThemeContext.tsx | modificado |
| proyecto-2-componentes-nativos | frontend/src/data/components.ts | modificado |
| proyecto-2-componentes-nativos | frontend/src/hooks/useScrollToTop.ts | modificado |
| proyecto-2-componentes-nativos | frontend/src/hooks/useTheme.ts | modificado |
| proyecto-2-componentes-nativos | frontend/src/pages/ComponentsPage.tsx | modificado |
| proyecto-2-componentes-nativos | frontend/src/services/storageService.ts | modificado |
| proyecto-2-componentes-nativos | frontend/src/styles/colors.ts | modificado |
| proyecto-2-componentes-nativos | frontend/src/styles/theme.ts | modificado |
| proyecto-2-componentes-nativos | frontend/src/types/theme.ts | modificado |
| proyecto-2-componentes-nativos | README.md | modificado |
| raíz | LEEME-ENTREGA.md | nuevo |
| proyecto-1-hola-mundo | CHANGELOG.md | modificado |
| raíz | INFORME-REVISION.md | nuevo |
