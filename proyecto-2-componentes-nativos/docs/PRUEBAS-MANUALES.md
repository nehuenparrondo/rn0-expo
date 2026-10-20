# Guion de pruebas manuales

Ejecutar desde frontend siguiendo el README. Probar en claro y oscuro y con anchos de 320, 390, 768 y 1280 puntos. Este documento es un guion reproducible, no una afirmación de que se probó hardware físico.

## Común

- Abrir sin pantallas rojas ni alertas emergentes. Revisar también la consola: no ocultar advertencias.
- Alternar tema varias veces y recargar: se conserva el último modo.
- Comprobar márgenes, legibilidad, scroll y acceso a botones sin solapamiento del notch.
- Navegar con teclado y lector de pantalla; comprobar etiquetas y controles deshabilitados.
- Cerrar y volver a abrir Expo Go: la preferencia persiste.
- Rotar el dispositivo; ningún contenido ni acción debe quedar inaccesible.

## Catálogo

- Verificar cinco grupos, 25 fichas, numeración 01 a 25 y explicación/código de cada una.
- Escribir en Texto de ejemplo: Tu texto reproduce la entrada.
- Pulsar Button, Pressable y los Touchable generales: el contador de su ficha aumenta, sin alertas.
- Activar/desactivar Switch: cambia el estado visible.
- Desplazar las cuatro listas horizontalmente y comprobar grupos de SectionList.
- Detener/reiniciar ActivityIndicator.
- Abrir Modal y cerrarlo con Entendido o Cerrar; probar retroceso en Android.
- Abrir la demostración de teclado, escribir y cerrar. En un celular real, el teclado no debe tapar el campo.
- Abrir actualización y pulsar Actualizar ahora: cambia a Actualizando…, el botón se deshabilita y después de un segundo suma solo una actualización. Repetir y cerrar.
- Desplazarse más de 250 puntos: aparece Volver arriba. Pulsarlo: vuelve al inicio y se oculta. Repetir con movimiento reducido habilitado en el sistema.
- Abrir Ver alternativa de área segura: informa qué biblioteca usa y permite cerrar.
- ProgressBarAndroid mantiene la explicación histórica y no intenta ejecutar el componente deprecado.

## Solo en dispositivos físicos

- Android: abrir/cerrar DrawerLayoutAndroid y pulsar la onda de TouchableNativeFeedback.
- iOS: abrir InputAccessoryView, escribir y usar Listo sobre el teclado.
- iOS/Android: cambiar StatusBar y comprobar contraste de hora/batería.
- RefreshControl: probar gesto de arrastre desde arriba; en web usar el botón equivalente.
- Revisar notch y gestos de sistema. Los textos de plataforma en web son el comportamiento esperado, no errores.

## Interpretación

Los modales de demostración se abren a pedido y no son alertas de fallo. Un problema real de AsyncStorage se comunica en línea. Los avisos de instalación/auditoría de dependencias deben informarse, no silenciarse. Consultar el informe de revisión para distinguir pruebas realizadas de comprobaciones físicas pendientes.
