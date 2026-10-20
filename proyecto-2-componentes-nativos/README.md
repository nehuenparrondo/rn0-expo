# Proyecto 2 · Catálogo de componentes nativos

Ejercicio de React Native con Expo y TypeScript: 25 fichas en cinco grupos con descripción, propósito, propiedades principales, fragmento JSX y ejemplos interactivos. Conserva el diseño violeta/fucsia y el tema claro/oscuro persistente.

## Alcance del catálogo

- Fundamentos: View, Text, Image, ImageBackground y TextInput.
- Interacción: Button, Pressable, Switch y las tres variantes Touchable.
- Listas: ScrollView, FlatList, SectionList, VirtualizedList y RefreshControl.
- Interfaz/sistema: ActivityIndicator, Modal, KeyboardAvoidingView y StatusBar.
- Plataforma: DrawerLayoutAndroid, TouchableNativeFeedback, InputAccessoryView y dos fichas históricas (SafeAreaView original y ProgressBarAndroid).

Los componentes exclusivos solo se ejecutan en su sistema: drawer y onda en Android; barra accesoria en iOS. La barra de estado y el teclado nativo requieren un celular. En web se explican estos límites, sin simular una API nativa.

React Native Web desaconseja TouchableWithoutFeedback: su ficha usa Pressable sin efecto visual en el navegador y lo aclara en pantalla. En iOS/Android conserva el componente nativo. No se silencia la advertencia: se evita ejecutar la API desaconsejada en web.

SafeAreaView del núcleo y ProgressBarAndroid son obsoletos. Se conservan sus explicaciones y código histórico, **sin importarlos ni ejecutarlos**: la primera ficha demuestra la alternativa react-native-safe-area-context y la segunda es documental. Así se evitan avisos de deprecación sin ocultarlos. Los fragmentos JSX son orientativos: no constituyen una aplicación completa para copiar sin importar ni definir sus variables.

La actualización está simulada durante un segundo y bloquea duplicados. Las listas son horizontales para evitar virtualización anidada en el mismo eje. «Volver arriba» aparece después de 250 puntos de desplazamiento y respeta movimiento reducido.

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
      organisms/                # Demostraciones especializadas (catálogo)
      templates/            # Estructura de pantalla y áreas seguras
    data/                   # Datos y tipos del catálogo didáctico
    context/                # Estado global y persistencia del tema
    hooks/                  # Comportamientos reutilizables
    services/               # Adaptador de AsyncStorage
    constants/              # Claves propias del proyecto
    styles/                 # Paletas y temas tipados
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
