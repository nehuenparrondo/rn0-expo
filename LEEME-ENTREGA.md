# RN0 · Guía de entrega

Dos aplicaciones independientes con React Native, Expo y TypeScript:

| Carpeta | Contenido | Inicio desde su frontend |
| --- | --- | --- |
| proyecto-1-hola-mundo | Saludo con cuatro estilos y tema persistente | npm start -- --go --port 8101 |
| proyecto-2-componentes-nativos | Catálogo didáctico de 25 componentes | npm start -- --go --port 8102 |

Abrir una terminal para cada proyecto, entrar en su carpeta **frontend**, ejecutar npm ci y luego el comando de inicio. No ejecutar npm install en esta carpeta rn0: aquí no hay una aplicación raíz ni un backend. Conservar ambas terminales abiertas para mostrar ambos trabajos.

Cada proyecto incluye README, documentación técnica en docs/ARQUITECTURA.md, guion en docs/PRUEBAS-MANUALES.md y comentarios de intención/contratos junto al código. No dependen de RN1, R5 ni de Mailtrap.

## Antes de presentar

1. Instalar las dependencias con npm ci dentro de cada frontend.
2. Ejecutar npm run validate.
3. Revisar compatibilidad con npx expo install --check y npx expo-doctor.
4. Exportar con npm run build:all.
5. Abrir web o Expo Go y seguir las pruebas manuales. La exportación no es una APK ni un test de hardware.
6. Entregar fuentes y documentación sin node_modules, .expo, dist, .git ni archivos privados.

Se conserva el comportamiento actual; no se agregaron pestañas al primer ejercicio. Si el docente exige una navegación por pestañas en una consigna distinta, debe confirmarse ese requisito: no se debe considerar cubierto por el botón de cambio de estilo.
