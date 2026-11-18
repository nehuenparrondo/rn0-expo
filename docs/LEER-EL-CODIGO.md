# RN0 · Guía completa de las dos aplicaciones Expo

Revisión del código del 16 de noviembre de 2026.

RN0 reúne dos aplicaciones independientes de React Native con Expo SDK 58 y
TypeScript. La primera explora un saludo y sus estilos. La segunda presenta
25 componentes nativos con explicaciones y demostraciones.

La actualización de compatibilidad del 17 de noviembre se detalla en
[Expo SDK 58 y apertura de los QR](EXPO-SDK-58.md).

## 1. Carpetas y punto de entrada

| Aplicación | Carpeta de ejecución | Pantalla principal |
| --- | --- | --- |
| Saludo | proyecto-1-hola-mundo/frontend | src/pages/HomePage.tsx |
| Componentes | proyecto-2-componentes-nativos/frontend | src/pages/ComponentsPage.tsx |

Cada frontend tiene su propio package.json, app.json y tsconfig.json.
package.json usa expo-router/entry como entrada. Expo Router lee los archivos de
src/app. index.tsx delega en una página y _layout.tsx instala navegación y
proveedores alrededor de ella.

| Carpeta dentro de src | Para qué se usa |
| --- | --- |
| app | Rutas de Expo Router y composición raíz. |
| pages | Pantalla completa del ejercicio. |
| components/atoms | Texto y botones pequeños reutilizables. |
| components/molecules | Composición de piezas, como el diálogo. |
| components/organisms | Fichas y ejemplos con interacción propia. |
| components/templates | Estructura de pantalla, scroll, márgenes y cabecera. |
| context y hooks | Tema compartido y acceso reutilizable al estado. |
| services | Lectura y escritura de preferencias. |
| data | Contenido estático del catálogo de componentes. |
| styles, constants y types | Paletas, tamaños, claves y contratos TypeScript. |

Las demostraciones funcionan con componentes y estado local. La única
persistencia de estas aplicaciones es la preferencia de tema mediante AsyncStorage.

## 2. Aplicación 1 · Cómo cambia el saludo

[HomePage](../proyecto-1-hola-mundo/frontend/src/pages/HomePage.tsx#L19) conserva
styleIndex con useState(0). Obtiene la variante de GREETING_STYLES y calcula su
tamaño a partir del ancho de pantalla.

1. Pressable recibe la pulsación en onPress.
2. setStyleIndex calcula (currentIndex + 1) % GREETING_STYLES.length.
3. La pantalla elige otra entrada de styles/greeting.ts.
4. AppText recibe las propiedades de texto y el tono de esa variante.
5. React Native vuelve a representar Hola Mundo con ese estilo.

Las cuatro variantes cambian peso, cursiva, familia, espaciado, mayúsculas, tamaños
y tonos. En la variante monoespaciada se usa Menlo en iOS y monospace en las demás
plataformas. Cambiar estilo conserva el tema activo. El índice de estilo se reinicia
al volver a montar la pantalla.

[useBreakpoint](../proyecto-1-hola-mundo/frontend/src/hooks/useBreakpoint.ts#L14)
obtiene las dimensiones actuales. styles/breakpoints.ts define los cortes de móvil,
tablet y escritorio. Los estilos del saludo separan tamaño móvil y tamaño de escritorio.

PageTemplate reúne el monograma, el contenido desplazable, áreas seguras y el botón
del tema. AppText envuelve Text con tipografía y tonos comunes. IconButton aporta
etiqueta accesible y una superficie táctil amplia.

## 3. Aplicación 2 · Cómo se arma el catálogo

[COMPONENT_GROUPS](../proyecto-2-componentes-nativos/frontend/src/data/components.ts)
contiene cinco grupos y 25 fichas. Cada ficha describe name, description, useCase,
props y code. El fragmento code es texto didáctico. El ejemplo ejecutable se
implementa en un componente de demostración.

[ComponentsPage](../proyecto-2-componentes-nativos/frontend/src/pages/ComponentsPage.tsx#L16)
recorre grupos y fichas con map. Calcula la numeración sumando la cantidad de fichas
de los grupos anteriores. Desde 900 puntos distribuye dos columnas, y por debajo
muestra una. Cada ficha recibe entry y number por props.

ComponentCard presenta la explicación y entrega entry.name a
[ComponentPreview](../proyecto-2-componentes-nativos/frontend/src/components/organisms/ComponentPreview.tsx#L34).
Su switch selecciona la demostración. Cada instancia conserva su propio estado.
Escribir en TextInput o pulsar un botón no modifica las otras fichas.

### Los 25 componentes

| Componente | Para qué sirve | Qué muestra o permite probar |
| --- | --- | --- |
| View | Agrupar y distribuir elementos con Flexbox. | Bloques con colores y espacios. |
| Text | Representar texto con formato. | Un texto con color. |
| Image | Mostrar imágenes. | Un recurso local del proyecto. |
| ImageBackground | Superponer contenido a una imagen. | Texto sobre una composición gráfica. |
| TextInput | Recibir texto. | value y onChangeText actualizan el texto visible. |
| Button | Ejecutar una acción básica. | Un contador de pulsaciones. |
| Pressable | Personalizar una pulsación. | Pulsación normal, prolongada y respuesta visual. |
| Switch | Elegir un valor booleano. | Alternar Activado y Desactivado. |
| TouchableOpacity | Responder reduciendo opacidad. | Pulsaciones con transparencia. |
| TouchableHighlight | Resaltar al pulsar. | Respuesta visual de fondo. |
| TouchableWithoutFeedback | Detectar una pulsación sin efecto añadido. | Contador local, con adaptación para web. |
| ScrollView | Desplazar contenido montado completo. | Una lista horizontal de ejemplo. |
| FlatList | Renderizar una lista de datos de forma gradual. | Elementos con renderItem y keyExtractor. |
| SectionList | Agrupar una lista en secciones. | Encabezados y elementos por grupo. |
| VirtualizedList | Personalizar el acceso a una colección virtualizada. | getItem y getItemCount. |
| RefreshControl | Actualizar mediante gesto. | Recarga simulada y contador de actualizaciones. |
| ActivityIndicator | Indicar una operación pendiente. | Activar y detener el indicador. |
| Modal | Presentar contenido encima de una pantalla. | Abrir y cerrar DemoDialog. |
| KeyboardAvoidingView | Adaptar el espacio al teclado. | Formulario dentro de un diálogo. |
| StatusBar | Ajustar la barra del sistema móvil. | Cambio de apariencia en plataformas compatibles. |
| DrawerLayoutAndroid | Panel lateral nativo de Android. | Abrir y cerrar el drawer en Android. |
| TouchableNativeFeedback | Efecto de onda nativo de Android. | Pulsación con Ripple en Android. |
| InputAccessoryView | Barra adicional sobre el teclado de iOS. | Botón Listo en un iPhone o iPad. |
| SafeAreaView | Respetar zonas del sistema. | La alternativa de react-native-safe-area-context. |
| ProgressBarAndroid | API histórica de progreso. | Ficha documental, sin montar el componente obsoleto. |

### Dónde vive cada interacción

[InteractionPreview](../proyecto-2-componentes-nativos/frontend/src/components/organisms/InteractionPreview.tsx#L34)
agrupa Button, Pressable, Switch y Touchable. handlePress usa el valor anterior
del contador. La pulsación prolongada de Pressable suma cinco. En web, la ficha
TouchableWithoutFeedback utiliza Pressable como adaptación.

[ListPreview](../proyecto-2-componentes-nativos/frontend/src/components/organisms/ListPreview.tsx#L45)
implementa las listas. Conviene comparar las props de ScrollView con las de
FlatList para explicar la diferencia entre montar contenido y virtualizar datos.

[refresh](../proyecto-2-componentes-nativos/frontend/src/components/organisms/RefreshPreview.tsx#L32)
simula un segundo de espera. pendingTimer impide iniciar dos actualizaciones a la
vez. El efecto de limpieza cancela el temporizador al desmontar el ejemplo.

KeyboardPreview abre el teclado en un formulario, lo oculta al cerrar y utiliza
InputAccessoryView solo cuando corresponde a iOS. PlatformPreview comprueba
Platform.OS antes de montar ejemplos exclusivos. El diálogo comparte cierre
explícito y onRequestClose para el botón de retroceso del sistema.

CatalogTemplate organiza la pantalla y el desplazamiento. useScrollToTop y
ScrollToTopButton permiten volver al comienzo de un catálogo largo.

## 4. Tema y persistencia

Cada aplicación tiene un ThemeProvider independiente. El recorrido es el mismo.

1. Al montar, restoreTheme llama a getThemePreference.
2. storageService lee AsyncStorage y acepta light o dark.
3. isThemeReady indica que terminó la restauración.
4. toggleTheme alterna el estado.
5. Un efecto encola saveThemePreference para conservar el último cambio.

| Aplicación | Clave de AsyncStorage | Contenido |
| --- | --- | --- |
| Saludo | @proyecto1/theme | light o dark. |
| Componentes | @proyecto2/theme | light o dark. |

pendingSave serializa escrituras si se pulsa varias veces. Las banderas isActive
evitan actualizar estado desde efectos desmontados. Los errores de lectura o
guardado se muestran dentro de la interfaz. El tema puede cambiar visualmente
aunque falle su persistencia.

Los estados de los ejemplos, como texto, pulsaciones, modales o carga, viven en
memoria. El catálogo vive en data/components.ts. AsyncStorage conserva únicamente
la preferencia de apariencia.

## 5. TypeScript y estilos

NativeComponentName restringe los nombres que puede recibir el distribuidor.
Los tipos del tema exigen la misma estructura para las paletas clara y oscura.
Las interfaces describen props y evitan usos incompatibles durante la compilación.

StyleSheet.create organiza los estilos de React Native como objetos. Los colores
semánticos se obtienen del tema. useWindowDimensions actualiza la distribución al
rotar o redimensionar. Las áreas seguras evitan superponer contenido a zonas del sistema.

## 6. Ejecutar en la computadora y en el celular

Abrir una terminal en el frontend de cada aplicación e instalar con npm ci.

Para ver la primera en la computadora.

    npm start -- --web --localhost --port 8101

Para la segunda utilizar el mismo comando con el puerto 8102.
Para Expo Go en el iPhone, iniciar en modo de red local.

    npm start -- --go --lan --port 8101

Mantener la terminal abierta, conectar el teléfono y la PC a la misma red y
escanear el QR vigente con la cámara. El QR depende de la dirección actual de
la PC. Una imagen de QR vieja puede apuntar a una dirección que ya cambió.
Usar una versión de Expo Go compatible con el SDK instalado.

Web permite revisar la mayoría de las interacciones. El teclado de iOS, StatusBar,
el drawer y los efectos exclusivos se comprueban en el dispositivo correspondiente.

Dentro de cada frontend, npm run validate ejecuta TypeScript y lint.
npm run build:web exporta la web y npm run build:all empaqueta las plataformas.
Los documentos PRUEBAS-MANUALES.md de cada aplicación completan el recorrido de prueba.

## 7. Estado de la consigna y límites reales

La primera aplicación tiene la pantalla del saludo y el botón de estilos.
Su ruta /explore redirige al inicio. La navegación actual usa Stack y todavía
carece de la pestaña adicional mencionada en la consigna original.
Esta revisión documenta ese estado para que pueda distinguirse del saludo ya implementado.

La segunda incluye 25 fichas en cinco grupos. Las APIs obsoletas se explican y las
exclusivas se montan únicamente en su plataforma. Por eso revisar la web por sí sola
no demuestra el comportamiento del teclado de iOS o del drawer de Android.

## 8. Preguntas para la defensa

| Pregunta | Respuesta breve y archivo |
| --- | --- |
| ¿Dónde comienza la aplicación? | expo-router/entry y src/app/_layout.tsx. |
| ¿Dónde está el Hola Mundo? | HomePage.tsx, con AppText y los estilos de greeting.ts. |
| ¿Qué hace el botón de estilos? | Avanza styleIndex y React Native vuelve a representar el texto. |
| ¿Qué datos se pasan por props? | entry y number a ComponentCard, y name a ComponentPreview. |
| ¿Dónde se guardan los componentes? | Son contenido estático de data/components.ts. |
| ¿Por qué el tema recuerda la elección? | ThemeProvider escribe AsyncStorage mediante storageService. |
| ¿Por qué dos temas no se mezclan? | Cada aplicación utiliza una clave distinta. |
| ¿La actualización consulta Internet? | RefreshPreview usa un temporizador local de un segundo. |
| ¿Por qué cambia entre celular y escritorio? | useWindowDimensions decide tamaños y columnas. |
| ¿Para qué sirve TypeScript? | Comprueba contratos, props y nombres de componentes durante el desarrollo. |
| ¿Hay otra pestaña en el saludo? | Actualmente explore redirige al inicio; esa parte de la consigna queda pendiente. |

El [mapa de archivos y funciones](MAPA-ARCHIVOS-Y-FUNCIONES.md) permite abrir cada
módulo y localizar sus funciones por nombre y línea.

## 9. Verificación de la revisión documental del 16 de noviembre

Se ejecutó npm run validate dentro del frontend de cada aplicación. Ambas
terminaron correctamente: TypeScript y ESLint aprobaron los dos proyectos.

El mapa reúne 57 archivos y enlaza 42 funciones o componentes declarados.
Se contrastaron las 25 fichas con sus demostraciones y se documentaron las
adaptaciones por plataforma. La comparación del código ejecutable antes y después
confirma que los comentarios mantienen el comportamiento original.

Se actualizaron README.md, esta guía y MAPA-ARCHIVOS-Y-FUNCIONES.md, además de
comentarios sobre saludo, catálogo y estado aislado de cada ficha.
El teclado, los gestos y los controles específicos requieren el recorrido en
iPhone o Android descrito arriba. El pendiente de la pestaña adicional se detalla
en el apartado 7.
