# RN0 · Abrir ambas aplicaciones con Expo Go SDK 58

Actualización del 17 de noviembre de 2026.

RN0 contiene dos proyectos independientes. Se alinearon con Expo SDK 58,
React 19.3 y React Native 0.88.1 para abrirlos en el mismo Expo Go del iPhone.
El paquete expo utiliza los parches de la familia 58; el manifiesto para Expo Go
debe indicar sdkVersion 58.0.0. app.json conserva la versión propia de la aplicación.

## Qué se actualizó

- package.json y package-lock.json de cada frontend: dependencias compatibles.
- app.json de cada frontend: rutas web sin carga asíncrona, manteniendo el recorrido
  sencillo de las pantallas y la navegación nativa.
- useScrollToTop.ts: la referencia usa ScrollViewInstance.
- PlatformPreview.tsx: la referencia del ejemplo Android usa ComponentRef para
  ajustarse al tipo real que exporta DrawerLayoutAndroid.

Las preferencias de tema conservan sus claves de AsyncStorage. Los ejemplos del
catálogo mantienen sus estados e interacciones. Las APIs exclusivas de cada sistema
se siguen mostrando en su plataforma correspondiente.

## Ejecutar

En proyecto-1-hola-mundo/frontend:

```powershell
npm ci
npm start -- --go --lan --web --port 8101 --max-workers 2
```

En proyecto-2-componentes-nativos/frontend:

```powershell
npm ci
npm start -- --go --lan --web --port 8102 --max-workers 2
```

Mantener las dos terminales abiertas. En el navegador, abrir localhost:8101 o
localhost:8102. En el iPhone, escanear el QR de la aplicación elegida con la cámara
y abrirlo con Expo Go. El teléfono y la PC deben estar en la misma red.
Los QR dependen de la IP actual de la computadora; volver a generarlos si cambia la red.

Estas aplicaciones funcionan con estado local y preferencias; no necesitan levantar
un backend ni una base MySQL para mostrar el saludo o el catálogo.

## Comprobaciones realizadas

| Comprobación | Hola Mundo | Catálogo de componentes |
| --- | --- | --- |
| npm run validate: TypeScript y ESLint | Correcto | Correcto |
| npx expo install --fix | Dependencias alineadas | Dependencias alineadas |
| npx expo-doctor | 20/20 correctas | 20/20 correctas |
| npm run build:all -- --max-workers 2 | iOS, Android y web correctos | iOS, Android y web correctos |
| Página web local | HTTP 200 en 8101 | HTTP 200 en 8102 |
| Manifiesto iOS del QR por red local | sdkVersion 58.0.0 | sdkVersion 58.0.0 |

La prueba física del iPhone se completa abriendo el QR correspondiente. Las
exportaciones anteriores comprueban el empaquetado; las APIs específicas de cada
sistema deben probarse en ese dispositivo.

## Avisos de dependencias

La instalación de npm informa 43 avisos en el saludo y 42 en el catálogo, incluidos
avisos altos en dependencias transitivas. Se conservaron las versiones compatibles
recomendadas por Expo y no se aplicaron cambios forzados que alteren el SDK.
Estos avisos pueden revisarse con npm audit en cada frontend.

## Fuentes oficiales

- [SDK 58](https://docs.expo.dev/versions/v58.0.0/).
- [Migración de Expo Router](https://docs.expo.dev/router/migrate/sdk-57-to-58/).
- [Tipos estrictos de React Native](https://reactnative.dev/docs/strict-typescript-api).
