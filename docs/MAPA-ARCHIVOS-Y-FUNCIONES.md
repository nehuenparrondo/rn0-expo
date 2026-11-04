# RN0 · Mapa del código activo

[Empezar por la explicación sencilla](LEER-EL-CODIGO.md). Este índice ayuda a ubicar piezas; no hace falta leerlo de principio a fin. Las líneas corresponden a esta revisión y pueden desplazarse si se edita el archivo.

## proyecto-1-hola-mundo

### [proyecto-1-hola-mundo/frontend/eslint.config.js](../proyecto-1-hola-mundo/frontend/eslint.config.js)

Configuración del análisis estático de código. Define reglas y archivos revisados; no decide permisos de usuarios ni persistencia.

Este archivo define composición, datos, configuración, tipos o reexportaciones. Seguir sus importaciones o buscar dónde se utiliza para ver el efecto en la aplicación.

### [proyecto-1-hola-mundo/frontend/src/app/explore.tsx](../proyecto-1-hola-mundo/frontend/src/app/explore.tsx)

Esta ruta conserva una redirección al inicio. No implementa la pestaña adicional pedida por la consigna; ese requisito sigue pendiente.

**Funciones para buscar:**

- [`ExploreRoute` · línea 11](../proyecto-1-hola-mundo/frontend/src/app/explore.tsx#L11)

### [proyecto-1-hola-mundo/frontend/src/app/index.tsx](../proyecto-1-hola-mundo/frontend/src/app/index.tsx)

Entrada de Expo Router que une una ruta con su pantalla. Los componentes de uso general permanecen fuera de app para no convertirse accidentalmente en rutas.

**Se conecta con:** [proyecto-1-hola-mundo/frontend/src/pages/HomePage.tsx](../proyecto-1-hola-mundo/frontend/src/pages/HomePage.tsx).

**Funciones para buscar:**

- [`HomeRoute` · línea 11](../proyecto-1-hola-mundo/frontend/src/app/index.tsx#L11)

### [proyecto-1-hola-mundo/frontend/src/app/_layout.tsx](../proyecto-1-hola-mundo/frontend/src/app/_layout.tsx)

Composición raíz de Expo Router: instala navegación y proveedores visuales alrededor de las pantallas. La persistencia se define en los servicios, no por el nombre de esta ruta.

**Se conecta con:** [proyecto-1-hola-mundo/frontend/src/context/ThemeContext.tsx](../proyecto-1-hola-mundo/frontend/src/context/ThemeContext.tsx), [proyecto-1-hola-mundo/frontend/src/hooks/useTheme.ts](../proyecto-1-hola-mundo/frontend/src/hooks/useTheme.ts).

**Funciones para buscar:**

- [`RootNavigator` · línea 17](../proyecto-1-hola-mundo/frontend/src/app/_layout.tsx#L17)
- [`RootLayout` · línea 35](../proyecto-1-hola-mundo/frontend/src/app/_layout.tsx#L35)

### [proyecto-1-hola-mundo/frontend/src/components/atoms/AppText.tsx](../proyecto-1-hola-mundo/frontend/src/components/atoms/AppText.tsx)

Componente reutilizable AppText. Sus props conectan contenido y acciones con el componente que lo usa; para seguir el dato, buscar sus importaciones y los callbacks recibidos en lugar de suponer que guarda directamente en una base.

**Se conecta con:** [proyecto-1-hola-mundo/frontend/src/hooks/useTheme.ts](../proyecto-1-hola-mundo/frontend/src/hooks/useTheme.ts).

**Funciones para buscar:**

- [`AppText` · línea 22](../proyecto-1-hola-mundo/frontend/src/components/atoms/AppText.tsx#L22)

### [proyecto-1-hola-mundo/frontend/src/components/atoms/IconButton.tsx](../proyecto-1-hola-mundo/frontend/src/components/atoms/IconButton.tsx)

Componente reutilizable IconButton. Sus props conectan contenido y acciones con el componente que lo usa; para seguir el dato, buscar sus importaciones y los callbacks recibidos en lugar de suponer que guarda directamente en una base.

**Se conecta con:** [proyecto-1-hola-mundo/frontend/src/hooks/useTheme.ts](../proyecto-1-hola-mundo/frontend/src/hooks/useTheme.ts).

**Funciones para buscar:**

- [`IconButton` · línea 27](../proyecto-1-hola-mundo/frontend/src/components/atoms/IconButton.tsx#L27)

### [proyecto-1-hola-mundo/frontend/src/components/molecules/BrandMark.tsx](../proyecto-1-hola-mundo/frontend/src/components/molecules/BrandMark.tsx)

Componente reutilizable BrandMark. Sus props conectan contenido y acciones con el componente que lo usa; para seguir el dato, buscar sus importaciones y los callbacks recibidos en lugar de suponer que guarda directamente en una base.

**Se conecta con:** [proyecto-1-hola-mundo/frontend/src/hooks/useTheme.ts](../proyecto-1-hola-mundo/frontend/src/hooks/useTheme.ts), [proyecto-1-hola-mundo/frontend/src/components/atoms/AppText.tsx](../proyecto-1-hola-mundo/frontend/src/components/atoms/AppText.tsx).

**Funciones para buscar:**

- [`BrandMark` · línea 15](../proyecto-1-hola-mundo/frontend/src/components/molecules/BrandMark.tsx#L15)

### [proyecto-1-hola-mundo/frontend/src/components/templates/PageTemplate.tsx](../proyecto-1-hola-mundo/frontend/src/components/templates/PageTemplate.tsx)

Componente reutilizable PageTemplate. Sus props conectan contenido y acciones con el componente que lo usa; para seguir el dato, buscar sus importaciones y los callbacks recibidos en lugar de suponer que guarda directamente en una base.

**Se conecta con:** [proyecto-1-hola-mundo/frontend/src/hooks/useBreakpoint.ts](../proyecto-1-hola-mundo/frontend/src/hooks/useBreakpoint.ts), [proyecto-1-hola-mundo/frontend/src/hooks/useTheme.ts](../proyecto-1-hola-mundo/frontend/src/hooks/useTheme.ts), [proyecto-1-hola-mundo/frontend/src/components/atoms/AppText.tsx](../proyecto-1-hola-mundo/frontend/src/components/atoms/AppText.tsx), [proyecto-1-hola-mundo/frontend/src/components/atoms/IconButton.tsx](../proyecto-1-hola-mundo/frontend/src/components/atoms/IconButton.tsx), [proyecto-1-hola-mundo/frontend/src/components/molecules/BrandMark.tsx](../proyecto-1-hola-mundo/frontend/src/components/molecules/BrandMark.tsx).

**Funciones para buscar:**

- [`PageTemplate` · línea 23](../proyecto-1-hola-mundo/frontend/src/components/templates/PageTemplate.tsx#L23)

### [proyecto-1-hola-mundo/frontend/src/constants/app.ts](../proyecto-1-hola-mundo/frontend/src/constants/app.ts)

Módulo auxiliar del proyecto. Las importaciones y símbolos siguientes permiten seguir su relación con el resto del código.

Este archivo define composición, datos, configuración, tipos o reexportaciones. Seguir sus importaciones o buscar dónde se utiliza para ver el efecto en la aplicación.

### [proyecto-1-hola-mundo/frontend/src/context/ThemeContext.tsx](../proyecto-1-hola-mundo/frontend/src/context/ThemeContext.tsx)

El proveedor carga y guarda el tema de este proyecto. Cada ejercicio usa su clave independiente y no comparte una cuenta de usuario.

**Se conecta con:** [proyecto-1-hola-mundo/frontend/src/services/storageService.ts](../proyecto-1-hola-mundo/frontend/src/services/storageService.ts), [proyecto-1-hola-mundo/frontend/src/styles/theme.ts](../proyecto-1-hola-mundo/frontend/src/styles/theme.ts), [proyecto-1-hola-mundo/frontend/src/types/theme.ts](../proyecto-1-hola-mundo/frontend/src/types/theme.ts).

**Funciones para buscar:**

- [`ThemeProvider` · línea 44](../proyecto-1-hola-mundo/frontend/src/context/ThemeContext.tsx#L44)
- [`restoreTheme` · línea 57](../proyecto-1-hola-mundo/frontend/src/context/ThemeContext.tsx#L57): Carga el tema de forma asíncrona al montar el proveedor. La bandera de actividad evita actualizar un componente que ya se desmontó.

### [proyecto-1-hola-mundo/frontend/src/hooks/useBreakpoint.ts](../proyecto-1-hola-mundo/frontend/src/hooks/useBreakpoint.ts)

Parte del sistema visual: comparte colores, tamaños o preferencia de tema según su implementación. La preferencia de apariencia es independiente de la autenticación y de los datos de las tareas.

**Se conecta con:** [proyecto-1-hola-mundo/frontend/src/styles/breakpoints.ts](../proyecto-1-hola-mundo/frontend/src/styles/breakpoints.ts).

**Funciones para buscar:**

- [`useBreakpoint` · línea 14](../proyecto-1-hola-mundo/frontend/src/hooks/useBreakpoint.ts#L14)

### [proyecto-1-hola-mundo/frontend/src/hooks/useTheme.ts](../proyecto-1-hola-mundo/frontend/src/hooks/useTheme.ts)

Parte del sistema visual: comparte colores, tamaños o preferencia de tema según su implementación. La preferencia de apariencia es independiente de la autenticación y de los datos de las tareas.

**Se conecta con:** [proyecto-1-hola-mundo/frontend/src/context/ThemeContext.tsx](../proyecto-1-hola-mundo/frontend/src/context/ThemeContext.tsx).

**Funciones para buscar:**

- [`useTheme` · línea 17](../proyecto-1-hola-mundo/frontend/src/hooks/useTheme.ts#L17)

### [proyecto-1-hola-mundo/frontend/src/pages/HomePage.tsx](../proyecto-1-hola-mundo/frontend/src/pages/HomePage.tsx)

El índice de estilo vive en useState y avanza de manera cíclica; recargar lo reinicia. Cambiar estilo no abre un tab nuevo ni modifica el tema persistido.

**Se conecta con:** [proyecto-1-hola-mundo/frontend/src/components/atoms/AppText.tsx](../proyecto-1-hola-mundo/frontend/src/components/atoms/AppText.tsx), [proyecto-1-hola-mundo/frontend/src/components/templates/PageTemplate.tsx](../proyecto-1-hola-mundo/frontend/src/components/templates/PageTemplate.tsx), [proyecto-1-hola-mundo/frontend/src/hooks/useBreakpoint.ts](../proyecto-1-hola-mundo/frontend/src/hooks/useBreakpoint.ts), [proyecto-1-hola-mundo/frontend/src/hooks/useTheme.ts](../proyecto-1-hola-mundo/frontend/src/hooks/useTheme.ts), [proyecto-1-hola-mundo/frontend/src/styles/greeting.ts](../proyecto-1-hola-mundo/frontend/src/styles/greeting.ts).

**Funciones para buscar:**

- [`HomePage` · línea 19](../proyecto-1-hola-mundo/frontend/src/pages/HomePage.tsx#L19)

### [proyecto-1-hola-mundo/frontend/src/services/storageService.ts](../proyecto-1-hola-mundo/frontend/src/services/storageService.ts)

Servicio reutilizable de la aplicación. Separa operaciones de datos o comunicación de la presentación; sus funciones importadas indican si la operación es local, HTTP o de servidor.

**Se conecta con:** [proyecto-1-hola-mundo/frontend/src/types/theme.ts](../proyecto-1-hola-mundo/frontend/src/types/theme.ts), [proyecto-1-hola-mundo/frontend/src/constants/app.ts](../proyecto-1-hola-mundo/frontend/src/constants/app.ts).

**Funciones para buscar:**

- [`saveThemePreference` · línea 21](../proyecto-1-hola-mundo/frontend/src/services/storageService.ts#L21): Guarda solo la preferencia visual en AsyncStorage. Es almacenamiento local del dispositivo, no una base de usuarios ni un lugar para contraseñas.
- [`getThemePreference` · línea 37](../proyecto-1-hola-mundo/frontend/src/services/storageService.ts#L37): Recupera la preferencia visual persistida y valida el valor antes de usarlo. La aplicación puede volver a su opción inicial si no hay una preferencia utilizable.

### [proyecto-1-hola-mundo/frontend/src/styles/breakpoints.ts](../proyecto-1-hola-mundo/frontend/src/styles/breakpoints.ts)

Parte del sistema visual: comparte colores, tamaños o preferencia de tema según su implementación. La preferencia de apariencia es independiente de la autenticación y de los datos de las tareas.

Este archivo define composición, datos, configuración, tipos o reexportaciones. Seguir sus importaciones o buscar dónde se utiliza para ver el efecto en la aplicación.

### [proyecto-1-hola-mundo/frontend/src/styles/colors.ts](../proyecto-1-hola-mundo/frontend/src/styles/colors.ts)

Parte del sistema visual: comparte colores, tamaños o preferencia de tema según su implementación. La preferencia de apariencia es independiente de la autenticación y de los datos de las tareas.

Este archivo define composición, datos, configuración, tipos o reexportaciones. Seguir sus importaciones o buscar dónde se utiliza para ver el efecto en la aplicación.

### [proyecto-1-hola-mundo/frontend/src/styles/greeting.ts](../proyecto-1-hola-mundo/frontend/src/styles/greeting.ts)

Módulo auxiliar del proyecto. Las importaciones y símbolos siguientes permiten seguir su relación con el resto del código.

Este archivo define composición, datos, configuración, tipos o reexportaciones. Seguir sus importaciones o buscar dónde se utiliza para ver el efecto en la aplicación.

### [proyecto-1-hola-mundo/frontend/src/styles/theme.ts](../proyecto-1-hola-mundo/frontend/src/styles/theme.ts)

Parte del sistema visual: comparte colores, tamaños o preferencia de tema según su implementación. La preferencia de apariencia es independiente de la autenticación y de los datos de las tareas.

**Se conecta con:** [proyecto-1-hola-mundo/frontend/src/styles/colors.ts](../proyecto-1-hola-mundo/frontend/src/styles/colors.ts), [proyecto-1-hola-mundo/frontend/src/types/theme.ts](../proyecto-1-hola-mundo/frontend/src/types/theme.ts).

Este archivo define composición, datos, configuración, tipos o reexportaciones. Seguir sus importaciones o buscar dónde se utiliza para ver el efecto en la aplicación.

### [proyecto-1-hola-mundo/frontend/src/types/theme.ts](../proyecto-1-hola-mundo/frontend/src/types/theme.ts)

Parte del sistema visual: comparte colores, tamaños o preferencia de tema según su implementación. La preferencia de apariencia es independiente de la autenticación y de los datos de las tareas.

Este archivo define composición, datos, configuración, tipos o reexportaciones. Seguir sus importaciones o buscar dónde se utiliza para ver el efecto en la aplicación.

## proyecto-2-componentes-nativos

### [proyecto-2-componentes-nativos/frontend/eslint.config.js](../proyecto-2-componentes-nativos/frontend/eslint.config.js)

Configuración del análisis estático de código. Define reglas y archivos revisados; no decide permisos de usuarios ni persistencia.

Este archivo define composición, datos, configuración, tipos o reexportaciones. Seguir sus importaciones o buscar dónde se utiliza para ver el efecto en la aplicación.

### [proyecto-2-componentes-nativos/frontend/src/app/index.tsx](../proyecto-2-componentes-nativos/frontend/src/app/index.tsx)

Entrada de Expo Router que une una ruta con su pantalla. Los componentes de uso general permanecen fuera de app para no convertirse accidentalmente en rutas.

**Se conecta con:** [proyecto-2-componentes-nativos/frontend/src/pages/ComponentsPage.tsx](../proyecto-2-componentes-nativos/frontend/src/pages/ComponentsPage.tsx).

**Funciones para buscar:**

- [`ComponentsRoute` · línea 10](../proyecto-2-componentes-nativos/frontend/src/app/index.tsx#L10)

### [proyecto-2-componentes-nativos/frontend/src/app/_layout.tsx](../proyecto-2-componentes-nativos/frontend/src/app/_layout.tsx)

Composición raíz de Expo Router: instala navegación y proveedores visuales alrededor de las pantallas. La persistencia se define en los servicios, no por el nombre de esta ruta.

**Se conecta con:** [proyecto-2-componentes-nativos/frontend/src/context/ThemeContext.tsx](../proyecto-2-componentes-nativos/frontend/src/context/ThemeContext.tsx), [proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts](../proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts).

**Funciones para buscar:**

- [`RootNavigator` · línea 16](../proyecto-2-componentes-nativos/frontend/src/app/_layout.tsx#L16)
- [`RootLayout` · línea 35](../proyecto-2-componentes-nativos/frontend/src/app/_layout.tsx#L35)

### [proyecto-2-componentes-nativos/frontend/src/components/atoms/ActionButton.tsx](../proyecto-2-componentes-nativos/frontend/src/components/atoms/ActionButton.tsx)

Componente reutilizable ActionButton. Sus props conectan contenido y acciones con el componente que lo usa; para seguir el dato, buscar sus importaciones y los callbacks recibidos en lugar de suponer que guarda directamente en una base.

**Se conecta con:** [proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts](../proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts), [proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx](../proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx).

**Funciones para buscar:**

- [`ActionButton` · línea 22](../proyecto-2-componentes-nativos/frontend/src/components/atoms/ActionButton.tsx#L22)

### [proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx](../proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx)

Componente reutilizable AppText. Sus props conectan contenido y acciones con el componente que lo usa; para seguir el dato, buscar sus importaciones y los callbacks recibidos en lugar de suponer que guarda directamente en una base.

**Se conecta con:** [proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts](../proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts).

**Funciones para buscar:**

- [`AppText` · línea 22](../proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx#L22)

### [proyecto-2-componentes-nativos/frontend/src/components/atoms/IconButton.tsx](../proyecto-2-componentes-nativos/frontend/src/components/atoms/IconButton.tsx)

Componente reutilizable IconButton. Sus props conectan contenido y acciones con el componente que lo usa; para seguir el dato, buscar sus importaciones y los callbacks recibidos en lugar de suponer que guarda directamente en una base.

**Se conecta con:** [proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts](../proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts).

**Funciones para buscar:**

- [`IconButton` · línea 27](../proyecto-2-componentes-nativos/frontend/src/components/atoms/IconButton.tsx#L27)

### [proyecto-2-componentes-nativos/frontend/src/components/molecules/DemoDialog.tsx](../proyecto-2-componentes-nativos/frontend/src/components/molecules/DemoDialog.tsx)

Diálogo controlado por props: visible decide si se muestra y el callback permite cerrarlo. Abrirlo no usa un alert del sistema.

**Se conecta con:** [proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts](../proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts), [proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx](../proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx).

**Funciones para buscar:**

- [`DemoDialog` · línea 21](../proyecto-2-componentes-nativos/frontend/src/components/molecules/DemoDialog.tsx#L21)

### [proyecto-2-componentes-nativos/frontend/src/components/molecules/ScrollToTopButton.tsx](../proyecto-2-componentes-nativos/frontend/src/components/molecules/ScrollToTopButton.tsx)

Componente reutilizable ScrollToTopButton. Sus props conectan contenido y acciones con el componente que lo usa; para seguir el dato, buscar sus importaciones y los callbacks recibidos en lugar de suponer que guarda directamente en una base.

**Se conecta con:** [proyecto-2-componentes-nativos/frontend/src/components/atoms/IconButton.tsx](../proyecto-2-componentes-nativos/frontend/src/components/atoms/IconButton.tsx).

**Funciones para buscar:**

- [`ScrollToTopButton` · línea 25](../proyecto-2-componentes-nativos/frontend/src/components/molecules/ScrollToTopButton.tsx#L25)

### [proyecto-2-componentes-nativos/frontend/src/components/organisms/ComponentCard.tsx](../proyecto-2-componentes-nativos/frontend/src/components/organisms/ComponentCard.tsx)

Recibe por props una ficha y su número; une explicación y vista previa sin duplicar los datos del catálogo.

**Se conecta con:** [proyecto-2-componentes-nativos/frontend/src/data/components.ts](../proyecto-2-componentes-nativos/frontend/src/data/components.ts), [proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts](../proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts), [proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx](../proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx), [proyecto-2-componentes-nativos/frontend/src/components/organisms/ComponentPreview.tsx](../proyecto-2-componentes-nativos/frontend/src/components/organisms/ComponentPreview.tsx).

**Funciones para buscar:**

- [`ComponentCard` · línea 19](../proyecto-2-componentes-nativos/frontend/src/components/organisms/ComponentCard.tsx#L19)

### [proyecto-2-componentes-nativos/frontend/src/components/organisms/ComponentPreview.tsx](../proyecto-2-componentes-nativos/frontend/src/components/organisms/ComponentPreview.tsx)

Selecciona la demostración que corresponde al nombre de componente. Los ejemplos específicos viven en módulos separados.

**Se conecta con:** [proyecto-2-componentes-nativos/frontend/src/data/components.ts](../proyecto-2-componentes-nativos/frontend/src/data/components.ts), [proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts](../proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts), [proyecto-2-componentes-nativos/frontend/src/components/atoms/ActionButton.tsx](../proyecto-2-componentes-nativos/frontend/src/components/atoms/ActionButton.tsx), [proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx](../proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx), [proyecto-2-componentes-nativos/frontend/src/components/molecules/DemoDialog.tsx](../proyecto-2-componentes-nativos/frontend/src/components/molecules/DemoDialog.tsx), [proyecto-2-componentes-nativos/frontend/src/components/organisms/InteractionPreview.tsx](../proyecto-2-componentes-nativos/frontend/src/components/organisms/InteractionPreview.tsx), [proyecto-2-componentes-nativos/frontend/src/components/organisms/KeyboardPreview.tsx](../proyecto-2-componentes-nativos/frontend/src/components/organisms/KeyboardPreview.tsx), [proyecto-2-componentes-nativos/frontend/src/components/organisms/ListPreview.tsx](../proyecto-2-componentes-nativos/frontend/src/components/organisms/ListPreview.tsx), [proyecto-2-componentes-nativos/frontend/src/components/organisms/PlatformPreview.tsx](../proyecto-2-componentes-nativos/frontend/src/components/organisms/PlatformPreview.tsx), [proyecto-2-componentes-nativos/frontend/src/components/organisms/RefreshPreview.tsx](../proyecto-2-componentes-nativos/frontend/src/components/organisms/RefreshPreview.tsx).

**Funciones para buscar:**

- [`ComponentPreview` · línea 34](../proyecto-2-componentes-nativos/frontend/src/components/organisms/ComponentPreview.tsx#L34)

### [proyecto-2-componentes-nativos/frontend/src/components/organisms/InteractionPreview.tsx](../proyecto-2-componentes-nativos/frontend/src/components/organisms/InteractionPreview.tsx)

Estado local para probar pulsaciones y controles; sus cambios no son cuentas ni registros persistidos.

**Se conecta con:** [proyecto-2-componentes-nativos/frontend/src/data/components.ts](../proyecto-2-componentes-nativos/frontend/src/data/components.ts), [proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts](../proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts), [proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx](../proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx).

**Funciones para buscar:**

- [`InteractionPreview` · línea 34](../proyecto-2-componentes-nativos/frontend/src/components/organisms/InteractionPreview.tsx#L34)
- [`handlePress` · línea 41](../proyecto-2-componentes-nativos/frontend/src/components/organisms/InteractionPreview.tsx#L41)

### [proyecto-2-componentes-nativos/frontend/src/components/organisms/KeyboardPreview.tsx](../proyecto-2-componentes-nativos/frontend/src/components/organisms/KeyboardPreview.tsx)

Demuestra teclado, foco y cierre del ejemplo sin convertirlo en un formulario de autenticación.

**Se conecta con:** [proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts](../proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts), [proyecto-2-componentes-nativos/frontend/src/components/atoms/ActionButton.tsx](../proyecto-2-componentes-nativos/frontend/src/components/atoms/ActionButton.tsx), [proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx](../proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx), [proyecto-2-componentes-nativos/frontend/src/components/molecules/DemoDialog.tsx](../proyecto-2-componentes-nativos/frontend/src/components/molecules/DemoDialog.tsx).

**Funciones para buscar:**

- [`KeyboardPreview` · línea 24](../proyecto-2-componentes-nativos/frontend/src/components/organisms/KeyboardPreview.tsx#L24)
- [`closeExample` · línea 39](../proyecto-2-componentes-nativos/frontend/src/components/organisms/KeyboardPreview.tsx#L39)

### [proyecto-2-componentes-nativos/frontend/src/components/organisms/ListPreview.tsx](../proyecto-2-componentes-nativos/frontend/src/components/organisms/ListPreview.tsx)

Muestra listas de ejemplo y sus elementos reutilizables; no descarga una colección desde una base.

**Se conecta con:** [proyecto-2-componentes-nativos/frontend/src/data/components.ts](../proyecto-2-componentes-nativos/frontend/src/data/components.ts), [proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts](../proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts), [proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx](../proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx).

**Funciones para buscar:**

- [`ListItem` · línea 34](../proyecto-2-componentes-nativos/frontend/src/components/organisms/ListPreview.tsx#L34)
- [`ListPreview` · línea 45](../proyecto-2-componentes-nativos/frontend/src/components/organisms/ListPreview.tsx#L45)

### [proyecto-2-componentes-nativos/frontend/src/components/organisms/PlatformPreview.tsx](../proyecto-2-componentes-nativos/frontend/src/components/organisms/PlatformPreview.tsx)

Agrupa ejemplos con comportamiento dependiente de la plataforma y evita tratar APIs históricas como funciones disponibles en todos los dispositivos.

**Se conecta con:** [proyecto-2-componentes-nativos/frontend/src/data/components.ts](../proyecto-2-componentes-nativos/frontend/src/data/components.ts), [proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts](../proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts), [proyecto-2-componentes-nativos/frontend/src/components/atoms/ActionButton.tsx](../proyecto-2-componentes-nativos/frontend/src/components/atoms/ActionButton.tsx), [proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx](../proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx), [proyecto-2-componentes-nativos/frontend/src/components/molecules/DemoDialog.tsx](../proyecto-2-componentes-nativos/frontend/src/components/molecules/DemoDialog.tsx), [proyecto-2-componentes-nativos/frontend/src/components/organisms/KeyboardPreview.tsx](../proyecto-2-componentes-nativos/frontend/src/components/organisms/KeyboardPreview.tsx).

**Funciones para buscar:**

- [`PlatformPreview` · línea 34](../proyecto-2-componentes-nativos/frontend/src/components/organisms/PlatformPreview.tsx#L34)

### [proyecto-2-componentes-nativos/frontend/src/components/organisms/RefreshPreview.tsx](../proyecto-2-componentes-nativos/frontend/src/components/organisms/RefreshPreview.tsx)

Demuestra el gesto de actualizar con estado y temporizador. No hay una petición real de red detrás del ejemplo.

**Se conecta con:** [proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts](../proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts), [proyecto-2-componentes-nativos/frontend/src/components/atoms/ActionButton.tsx](../proyecto-2-componentes-nativos/frontend/src/components/atoms/ActionButton.tsx), [proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx](../proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx), [proyecto-2-componentes-nativos/frontend/src/components/molecules/DemoDialog.tsx](../proyecto-2-componentes-nativos/frontend/src/components/molecules/DemoDialog.tsx).

**Funciones para buscar:**

- [`RefreshPreview` · línea 16](../proyecto-2-componentes-nativos/frontend/src/components/organisms/RefreshPreview.tsx#L16)
- [`refresh` · línea 32](../proyecto-2-componentes-nativos/frontend/src/components/organisms/RefreshPreview.tsx#L32): Simula el tiempo de una recarga del ejemplo y actualiza su estado visual. Este catálogo no consulta una API ni descarga registros reales.

### [proyecto-2-componentes-nativos/frontend/src/components/templates/CatalogTemplate.tsx](../proyecto-2-componentes-nativos/frontend/src/components/templates/CatalogTemplate.tsx)

Componente reutilizable CatalogTemplate. Sus props conectan contenido y acciones con el componente que lo usa; para seguir el dato, buscar sus importaciones y los callbacks recibidos en lugar de suponer que guarda directamente en una base.

**Se conecta con:** [proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts](../proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts), [proyecto-2-componentes-nativos/frontend/src/hooks/useScrollToTop.ts](../proyecto-2-componentes-nativos/frontend/src/hooks/useScrollToTop.ts), [proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx](../proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx), [proyecto-2-componentes-nativos/frontend/src/components/atoms/IconButton.tsx](../proyecto-2-componentes-nativos/frontend/src/components/atoms/IconButton.tsx), [proyecto-2-componentes-nativos/frontend/src/components/molecules/ScrollToTopButton.tsx](../proyecto-2-componentes-nativos/frontend/src/components/molecules/ScrollToTopButton.tsx).

**Funciones para buscar:**

- [`CatalogTemplate` · línea 25](../proyecto-2-componentes-nativos/frontend/src/components/templates/CatalogTemplate.tsx#L25)

### [proyecto-2-componentes-nativos/frontend/src/constants/app.ts](../proyecto-2-componentes-nativos/frontend/src/constants/app.ts)

Módulo auxiliar del proyecto. Las importaciones y símbolos siguientes permiten seguir su relación con el resto del código.

Este archivo define composición, datos, configuración, tipos o reexportaciones. Seguir sus importaciones o buscar dónde se utiliza para ver el efecto en la aplicación.

### [proyecto-2-componentes-nativos/frontend/src/context/ThemeContext.tsx](../proyecto-2-componentes-nativos/frontend/src/context/ThemeContext.tsx)

El proveedor carga y guarda el tema de este proyecto. Cada ejercicio usa su clave independiente y no comparte una cuenta de usuario.

**Se conecta con:** [proyecto-2-componentes-nativos/frontend/src/services/storageService.ts](../proyecto-2-componentes-nativos/frontend/src/services/storageService.ts), [proyecto-2-componentes-nativos/frontend/src/styles/theme.ts](../proyecto-2-componentes-nativos/frontend/src/styles/theme.ts), [proyecto-2-componentes-nativos/frontend/src/types/theme.ts](../proyecto-2-componentes-nativos/frontend/src/types/theme.ts).

**Funciones para buscar:**

- [`ThemeProvider` · línea 44](../proyecto-2-componentes-nativos/frontend/src/context/ThemeContext.tsx#L44)
- [`restoreTheme` · línea 57](../proyecto-2-componentes-nativos/frontend/src/context/ThemeContext.tsx#L57): Carga el tema de forma asíncrona al montar el proveedor. La bandera de actividad evita actualizar un componente que ya se desmontó.

### [proyecto-2-componentes-nativos/frontend/src/data/components.ts](../proyecto-2-componentes-nativos/frontend/src/data/components.ts)

Fuente de datos del catálogo: nombres, usos y ejemplos se definen aquí y las pantallas los recorren. Son contenido didáctico estático, no registros SQL.

Este archivo define composición, datos, configuración, tipos o reexportaciones. Seguir sus importaciones o buscar dónde se utiliza para ver el efecto en la aplicación.

### [proyecto-2-componentes-nativos/frontend/src/hooks/useScrollToTop.ts](../proyecto-2-componentes-nativos/frontend/src/hooks/useScrollToTop.ts)

Hook reutilizable que agrupa estado o comportamiento de React. El nombre use permite reconocer que se consume desde componentes u otros hooks, no como un endpoint del servidor.

**Funciones para buscar:**

- [`useScrollToTop` · línea 22](../proyecto-2-componentes-nativos/frontend/src/hooks/useScrollToTop.ts#L22)

### [proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts](../proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts)

Parte del sistema visual: comparte colores, tamaños o preferencia de tema según su implementación. La preferencia de apariencia es independiente de la autenticación y de los datos de las tareas.

**Se conecta con:** [proyecto-2-componentes-nativos/frontend/src/context/ThemeContext.tsx](../proyecto-2-componentes-nativos/frontend/src/context/ThemeContext.tsx).

**Funciones para buscar:**

- [`useTheme` · línea 17](../proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts#L17)

### [proyecto-2-componentes-nativos/frontend/src/pages/ComponentsPage.tsx](../proyecto-2-componentes-nativos/frontend/src/pages/ComponentsPage.tsx)

Lee el catálogo de data/components.ts y pasa cada entrada por props a ComponentCard. El ancho decide columnas; el catálogo no necesita servidor.

**Se conecta con:** [proyecto-2-componentes-nativos/frontend/src/data/components.ts](../proyecto-2-componentes-nativos/frontend/src/data/components.ts), [proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts](../proyecto-2-componentes-nativos/frontend/src/hooks/useTheme.ts), [proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx](../proyecto-2-componentes-nativos/frontend/src/components/atoms/AppText.tsx), [proyecto-2-componentes-nativos/frontend/src/components/organisms/ComponentCard.tsx](../proyecto-2-componentes-nativos/frontend/src/components/organisms/ComponentCard.tsx), [proyecto-2-componentes-nativos/frontend/src/components/templates/CatalogTemplate.tsx](../proyecto-2-componentes-nativos/frontend/src/components/templates/CatalogTemplate.tsx).

**Funciones para buscar:**

- [`ComponentsPage` · línea 16](../proyecto-2-componentes-nativos/frontend/src/pages/ComponentsPage.tsx#L16)

### [proyecto-2-componentes-nativos/frontend/src/services/storageService.ts](../proyecto-2-componentes-nativos/frontend/src/services/storageService.ts)

Servicio reutilizable de la aplicación. Separa operaciones de datos o comunicación de la presentación; sus funciones importadas indican si la operación es local, HTTP o de servidor.

**Se conecta con:** [proyecto-2-componentes-nativos/frontend/src/types/theme.ts](../proyecto-2-componentes-nativos/frontend/src/types/theme.ts), [proyecto-2-componentes-nativos/frontend/src/constants/app.ts](../proyecto-2-componentes-nativos/frontend/src/constants/app.ts).

**Funciones para buscar:**

- [`saveThemePreference` · línea 21](../proyecto-2-componentes-nativos/frontend/src/services/storageService.ts#L21): Guarda solo la preferencia visual en AsyncStorage. Es almacenamiento local del dispositivo, no una base de usuarios ni un lugar para contraseñas.
- [`getThemePreference` · línea 35](../proyecto-2-componentes-nativos/frontend/src/services/storageService.ts#L35): Recupera la preferencia visual persistida y valida el valor antes de usarlo. La aplicación puede volver a su opción inicial si no hay una preferencia utilizable.

### [proyecto-2-componentes-nativos/frontend/src/styles/colors.ts](../proyecto-2-componentes-nativos/frontend/src/styles/colors.ts)

Parte del sistema visual: comparte colores, tamaños o preferencia de tema según su implementación. La preferencia de apariencia es independiente de la autenticación y de los datos de las tareas.

Este archivo define composición, datos, configuración, tipos o reexportaciones. Seguir sus importaciones o buscar dónde se utiliza para ver el efecto en la aplicación.

### [proyecto-2-componentes-nativos/frontend/src/styles/theme.ts](../proyecto-2-componentes-nativos/frontend/src/styles/theme.ts)

Parte del sistema visual: comparte colores, tamaños o preferencia de tema según su implementación. La preferencia de apariencia es independiente de la autenticación y de los datos de las tareas.

**Se conecta con:** [proyecto-2-componentes-nativos/frontend/src/styles/colors.ts](../proyecto-2-componentes-nativos/frontend/src/styles/colors.ts), [proyecto-2-componentes-nativos/frontend/src/types/theme.ts](../proyecto-2-componentes-nativos/frontend/src/types/theme.ts).

Este archivo define composición, datos, configuración, tipos o reexportaciones. Seguir sus importaciones o buscar dónde se utiliza para ver el efecto en la aplicación.


### [proyecto-2-componentes-nativos/frontend/src/types/theme.ts](../proyecto-2-componentes-nativos/frontend/src/types/theme.ts)

Parte del sistema visual: comparte colores, tamaños o preferencia de tema según su implementación. La preferencia de apariencia es independiente de la autenticación y de los datos de las tareas.

Este archivo define composición, datos, configuración, tipos o reexportaciones. Seguir sus importaciones o buscar dónde se utiliza para ver el efecto en la aplicación.
