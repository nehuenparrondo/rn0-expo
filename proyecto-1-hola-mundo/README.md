# Proyecto 1 · Hola Mundo

Ejercicio introductorio en React Native con Expo y TypeScript. Conserva la pantalla actual del saludo «Hola Mundo.», sus cuatro estilos cíclicos y el selector de tema claro/oscuro persistente. No se agregaron pantallas, pestañas ni funciones ajenas a esta revisión.

## Funcionamiento

«Cambiar estilos» recorre cuatro apariencias: negrita, cursiva, monoespaciada y mayúsculas espaciadas; la quinta pulsación continúa el ciclo. El tema es independiente del estilo elegido. La ruta /explore redirige a / por compatibilidad con enlaces anteriores.

## Requisitos y arranque

- Node.js 24 y npm. Expo SDK 57, React Native 0.86.3, React 19.2.3 y TypeScript estricto.
- Abrir una terminal en la carpeta de este proyecto y entrar en **frontend**, donde está package.json.
- No hay backend, base de datos, registro ni correo: estos ejercicios funcionan localmente. No se requieren claves privadas.

```powershell
cd frontend
npm ci
npm start -- --go
```

En iPhone: instalar Expo Go compatible con SDK 57, conectar celular y PC al mismo Wi-Fi y escanear el QR con Cámara. Mantener la terminal abierta. Si Expo solicita una cuenta, iniciar sesión normalmente; no compartir contraseñas. En Windows no se dispone del simulador de iOS. Si la red aísla dispositivos, usar otra red autorizada; no desactivar protecciones. Solo con autorización de la red puede usarse `npx expo start --go --tunnel` (necesita Internet).

Si PowerShell bloquea npm.ps1, utilizar `npm.cmd`/ `npx.cmd` o Símbolo del sistema, sin cambiar la política de seguridad.

### Ver y comprobar en la computadora

```powershell
npm run web
npm run validate
npx expo install --check
npx expo-doctor
npm run build:all
```

- `validate`: TypeScript y ESLint, sin modificar fuentes.
- `build:web`: exportación web estática en frontend/dist.
- `build:all`: exportación de JavaScript y recursos para Android, iOS y web. **No genera APK/IPA ni demuestra ejecución en un celular.**
- `npm ci` reproduce package-lock.json. No usar `npm audit fix --force`: puede romper la compatibilidad del SDK.

## Estructura y responsabilidades

```text
frontend/
  src/
    app/                    # Rutas y proveedores globales de Expo Router
    pages/                  # Composición de la pantalla
    components/
      atoms/                # Texto y botones reutilizables
      molecules/            # Combinaciones pequeñas de componentes
      templates/            # Estructura de pantalla y áreas seguras
    context/                # Estado global y persistencia del tema
    hooks/                  # Comportamientos reutilizables
    services/               # Adaptador de AsyncStorage
    constants/              # Claves propias del proyecto
    styles/                 # Paletas, temas, puntos de corte y variantes del saludo
    types/                  # Contratos de TypeScript
  assets/                   # Imágenes, iconos y recursos locales
  app.json                  # Configuración Expo y plataformas
  package.json              # Dependencias y tareas
  package-lock.json         # Versiones reproducibles
  tsconfig.json             # Comprobación estática
  eslint.config.js          # Reglas de calidad
```

Ver [documentación técnica](docs/ARQUITECTURA.md) y [guion de comprobación manual](docs/PRUEBAS-MANUALES.md).

## Temas, accesibilidad y errores

La preferencia claro/oscuro se guarda con AsyncStorage. Cada proyecto tiene su propia clave; cambiar uno no afecta al otro. El selector se habilita después de leer la preferencia y las escrituras se procesan en orden para que prevalezca el último cambio.

Las áreas seguras se resuelven con react-native-safe-area-context. Los controles tienen etiquetas accesibles y estado deshabilitado cuando corresponde; se usan fuentes del sistema y recursos incluidos en el proyecto.

No se invocan Alert.alert ni window.alert y no se ocultan avisos con LogBox ni reemplazando console. Si falla el almacenamiento, se informa mediante texto integrado en la pantalla. Los modales didácticos del catálogo son intencionales, se abren al pulsar su botón y no son alertas de error.

## Entrega

Entregar fuentes, documentación, assets, configuración y package-lock.json. No incluir node_modules, .expo, dist, .git, cachés ni credenciales. El profesor instala las dependencias desde frontend con npm ci. Las advertencias de herramientas o dependencias no equivalen a alertas de la aplicación: consultar el informe de revisión para conocer los límites reales de lo comprobado.
