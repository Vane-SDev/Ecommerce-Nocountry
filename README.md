# E-commerce · Simulación laboral No Country

Tienda online desarrollada en equipo durante la simulación laboral de [No Country](https://www.nocountry.tech/) (noviembre – diciembre de 2023): cuatro semanas para llevar un producto de la idea a la presentación final ante un Tech Lead.

**Mi rol:** desarrollo frontend. Cuando la diseñadora dejó el equipo, me hice cargo del diseño en Figma: ajusté la paleta de colores y armé la versión mobile.

## Este repositorio

Es la base con la que arrancamos el proyecto: estructura de carpetas del frontend y del backend, configuración y primeras pantallas. El desarrollo del equipo siguió después en otro repositorio.

- **Frontend:** navbar responsive con menú hamburguesa, carrusel del home, tarjetas de productos, footer y formularios de registro e inicio de sesión, con transiciones entre rutas.
- **Backend:** API con autenticación por JWT y modelos de usuarios y roles.

## Stack

| Frontend | Backend |
|---|---|
| React 18 · Vite · Tailwind CSS · React Router · Swiper | Node.js · Express · Sequelize · PostgreSQL · JWT · bcrypt |

## Correrlo en local

```bash
# Frontend
cd front
npm install
npm run dev

# Backend (necesita una base PostgreSQL y un archivo .env con BD_NOMBRE, BD_USER, BD_PASS, BD_HOST y BD_PORT)
cd back
npm install
npm run dev
```
