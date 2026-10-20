# Consigna 5 · RN0 · Introducción a React Native

Dos proyectos independientes de React Native con Expo y TypeScript:

| Carpeta | Contenido |
| --- | --- |
| `proyecto-1-hola-mundo/frontend/` | Saludo y variantes visuales |
| `proyecto-2-componentes-nativos/frontend/` | Catálogo didáctico de componentes nativos |

No hay backend, login ni base SQL en este trabajo. No ejecutar npm en esta raíz: abrir una terminal dentro de cada `frontend/`.

## Usar

Usar Node.js 24, ejecutar `npm ci` y después `npm start`. Los proyectos usan Expo SDK 57; el teléfono debe tener una versión compatible de Expo Go. Para abrir ambos simultáneamente usar puertos diferentes: `npm start -- --go --port 8101` y `npm start -- --go --port 8102`.

## Verificar

En cada frontend: `npm run validate`, `npm run build:web` o `npm run build:all`. La exportación no equivale a una APK/IPA ni a una prueba en un teléfono real. No hay una suite de tests automatizados propia.

## Documentación y alcance

Leer `LEEME-ENTREGA.md`, `INFORME-REVISION.md` y los archivos `docs/` de cada proyecto. **El primer proyecto conserva un selector de estilos, pero no agrega el nuevo tab que pide la consigna. Ese requisito sigue pendiente y no debe presentarse como cumplido.** Las observaciones de dependencias del informe previo tampoco se consideran resueltas por subir el código a GitHub.

Se conservan las licencias y créditos existentes. Esta copia excluye dependencias instaladas, cachés, compilaciones y archivos privados.
