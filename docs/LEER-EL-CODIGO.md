# Consigna 5 · Entender los dos proyectos de Expo

## Qué incluye y qué no

Son dos aplicaciones separadas: proyecto-1-hola-mundo y proyecto-2-componentes-nativos. Cada una se ejecuta dentro de su frontend. Usan React Native, Expo SDK 57 y TypeScript. No hay backend, login, MySQL ni envío de correo: sus demostraciones no dependen de RN1 ni de R5.

## Orden de lectura

src/app/_layout.tsx instala navegación y tema → src/app/index.tsx elige la pantalla → src/pages presenta el ejercicio → src/components arma las piezas → styles/data/services contienen los datos y ayudas.

Expo Router usa los nombres dentro de app como rutas. Un archivo de componentes reutilizables debe vivir fuera de app si no debe ser una pantalla navegable.

## Proyecto 1: saludo y estilos

HomePage conserva styleIndex en useState. El botón calcula el siguiente índice usando el resto de dividir por GREETING_STYLES.length: al llegar al último vuelve al primero. GREETING_STYLES contiene las variantes de presentación; no se crea otra cuenta ni otro registro con cada pulsación.

useBreakpoint toma el ancho para ajustar tamaños y PageTemplate concentra el marco visual. AppText recibe props de contenido y estilo para que los textos mantengan un criterio común.

**Alcance pendiente:** cambiar estilos en esta pantalla no es agregar un tab. La ruta explore redirige al inicio; no presentar la pestaña adicional de la consigna como implementada. Esta documentación no modifica ese comportamiento.

## Proyecto 2: catálogo de componentes

data/components.ts es la fuente estática de fichas: nombre, para qué sirve, ejemplo y observaciones. ComponentsPage recorre grupos con map y calcula una numeración continua. Pasa entry y number por props a ComponentCard; ComponentPreview elige el ejemplo visual.

Las demostraciones de interacción, teclado, listas, plataforma y actualización están separadas para no mezclar toda la pantalla. El ancho decide una o dos columnas, sin duplicar el catálogo. Los componentes históricos o exclusivos de una plataforma están señalados; verlos en una ficha no significa que se ejecuten en cualquier teléfono.

## Qué se guarda y qué se pierde

ThemeContext usa services/storageService.ts para guardar la preferencia de tema en AsyncStorage. Cada proyecto usa su clave. AsyncStorage es local al dispositivo/aplicación: no es MySQL y no se utiliza para contraseñas.

El estilo seleccionado y los valores de los ejemplos son estado de pantalla. Reiniciar puede devolverlos a su valor inicial; no hay una tabla ni un JSON de usuarios esperando ser leído.

## Asincronía y limpieza

restoreTheme espera la lectura del tema y comprueba que el componente siga activo antes de actualizarlo. Los ejemplos con temporizadores limpian sus recursos cuando corresponde. RefreshPreview simula la espera de actualizar con estado/temporizador: no hace una descarga real desde un servidor.

DemoDialog es un diálogo dentro de la aplicación controlado por props; no es un alert del sistema. La distinción ayuda a seguir quién abre/cierra la vista y dónde se guarda su estado.

## Qué archivo tocar

- Cambiar el texto del saludo: HomePage.
- Agregar/ajustar una variante: styles/greeting.ts.
- Cambiar la explicación de un componente: data/components.ts.
- Cambiar una demostración: el Preview correspondiente, no los datos de todo el catálogo.
- Cambiar colores o tema: styles y ThemeContext.

## Ejecutar y validar

En cada frontend: npm ci y npm start. Para abrir ambos usar puertos diferentes. npm run validate ejecuta TypeScript y lint; build:web y build:all exportan recursos. Una exportación no es una APK/IPA ni certifica permisos y gestos en un dispositivo físico. Los avisos de dependencias de INFORME-REVISION.md conservan su alcance: documentarlos no los corrige ni deben ocultarse.

La organización sigue el SDK del proyecto; referencia oficial: https://docs.expo.dev/versions/v57.0.0/. No se agregaron librerías ni se cambió la versión para documentar.

## Encontrar una función en el editor

En el archivo de código, los bloques de comentario explican responsabilidades, entradas/salidas y efectos importantes. Buscar el nombre con Ctrl+F permite encontrar la función; después usar Buscar referencias para ver quién la llama. El mapa siguiente incluye enlaces a los archivos reales y a las líneas vigentes al documentar.

[Mapa de archivos y funciones](MAPA-ARCHIVOS-Y-FUNCIONES.md).

Documentación en español del código activo. No se cambiaron instrucciones ejecutables, dependencias, secretos ni datos. Los respaldos con fechas, node_modules, compilaciones y archivos privados no son el código activo documentado. Los resultados de comprobación se registran por separado y no certifican servicios externos ni requisitos pendientes.
