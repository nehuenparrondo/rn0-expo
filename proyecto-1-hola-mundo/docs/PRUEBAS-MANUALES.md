# Guion de pruebas manuales

Ejecutar desde frontend siguiendo el README. Probar en claro y oscuro y con anchos de 320, 390, 768 y 1280 puntos. Este documento es un guion reproducible, no una afirmación de que se probó hardware físico.

## Común

- Abrir sin pantallas rojas ni alertas emergentes. Revisar también la consola: no ocultar advertencias.
- Alternar tema varias veces y recargar: se conserva el último modo.
- Comprobar márgenes, legibilidad, scroll y acceso a botones sin solapamiento del notch.
- Navegar con teclado y lector de pantalla; comprobar etiquetas y controles deshabilitados.
- Cerrar y volver a abrir Expo Go: la preferencia persiste.
- Rotar el dispositivo; ningún contenido ni acción debe quedar inaccesible.

## Saludo

- Pulsar Cambiar estilos cuatro veces: se recorren todas las variantes y se regresa a la inicial.
- Alternar el tema en cualquier variante: se mantiene la tipografía.
- Entrar en /explore en web: redirige al saludo.
- Probar pantalla pequeña y orientación horizontal: se puede desplazar el contenido si no cabe.

## Interpretación

Los modales de demostración se abren a pedido y no son alertas de fallo. Un problema real de AsyncStorage se comunica en línea. Los avisos de instalación/auditoría de dependencias deben informarse, no silenciarse. Consultar el informe de revisión para distinguir pruebas realizadas de comprobaciones físicas pendientes.
