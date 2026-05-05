# Grupo Gemis Web

Sitio estático listo para Vercel con cuatro entradas principales:

- `/` - Hub general Grupo Gemis
- `/research` - Grupo Gemis Research
- `/consulting` - Grupo Gemis Consulting
- `/academy` - Grupo Gemis Academy
- `/contact` - Contacto
- `/maintenance` - Sitio en mantenimiento

## Por qué Vercel

- Dominio propio sin wrappers de Squarespace ni URLs de Apps Script.
- Deploy automático desde GitHub.
- Código editable por cualquier persona del equipo.
- Páginas rápidas, estáticas y fáciles de mantener.
- Formularios y automatizaciones se pueden agregar después con serverless functions o servicios externos.

## Estructura

```text
grupo-gemis-web/
  index.html
  research/
    index.html
    papers/index.html
  consulting/index.html
  academy/index.html
  contact/index.html
  maintenance/index.html
  assets/css/styles.css
  assets/js/main.js
  assets/img/
  vercel.json
  package.json
```

## Desarrollo local

Desde esta carpeta:

```bash
npm run dev
```

Luego abrir:

```text
http://localhost:3000
```

También podés usar directamente:

```bash
python3 -m http.server 3000
```

## Página de mantenimiento

La página de mantenimiento está disponible en:

```text
http://localhost:3000/maintenance/
```

En producción sería:

```text
https://www.grupogemis.com/maintenance/
```

El sitio está actualmente configurado para mostrar mantenimiento global desde `vercel.json`.

Para volver al sitio normal:

1. Renombrar `vercel.json` a `vercel.maintenance.json`.
2. Renombrar `vercel.production.json` a `vercel.json`.
3. Commit + push a `main`.

Para volver a activar mantenimiento más adelante, invertir nuevamente esos nombres y pushear.

## Deploy en Vercel

1. Crear un repo en GitHub, por ejemplo `grupo-gemis-web`.
2. Subir esta carpeta al repo.
3. Entrar a Vercel.
4. `Add New Project`.
5. Importar el repo.
6. Framework preset: `Other`.
7. Build command: dejar vacío.
8. Output directory: dejar vacío o `.`.
9. Deploy.
10. En `Settings > Domains`, agregar `grupogemis.com` o el dominio/subdominio elegido.

## Dominio recomendado

Opción principal:

```text
www.grupogemis.com
www.grupogemis.com/research
www.grupogemis.com/consulting
www.grupogemis.com/academy
```

Si el dominio está en Squarespace, se puede apuntar a Vercel desde DNS cuando el sitio esté listo.

## Edición de contenido

- Textos generales: editar cada `index.html`.
- Estilos globales: editar `assets/css/styles.css`.
- Animaciones/interacciones: editar `assets/js/main.js`.
- Imágenes/logo: subir a `assets/img/` y cambiar los `src`.
- Publicaciones: editar en `assets/data/papers.json`

## Logo

El logo principal ya está guardado en:

```txt
assets/img/logo-gemis-official.png
```

Todas las páginas lo usan con:

```html
<img class="brand-logo" src="/assets/img/logo-gemis-official.png?v=20260420b" alt="Grupo Gemis" data-logo>
```

## Formularios

Hoy `/contact` usa email directo como placeholder. Opciones recomendadas:

- Formspree para salir rápido.
- Vercel Serverless Function + Resend para email profesional.
- Vercel Serverless Function + Google Sheets para registrar leads.
- HubSpot si quieren CRM.

## Notas

Este proyecto reemplaza la necesidad de usar Apps Script como hosting y evita los problemas de layout de Squarespace. Apps Script puede seguir usándose como backend si se necesita guardar consultas en Sheets o disparar automatizaciones.

## Publicaciones / Papers

Editar `assets/data/papers.json` con el formato:
```text
{
  "category": "knowledge-management",
  "title": "Nuevo paper",
  "description": "Descripción del paper.",
  "citation": "Autor, A. (2026). Nuevo paper.",
  "pdf": "/assets/papers/nuevo-paper.pdf"
}
```

> [!TIP]
> Las categorias son: knowledge-management, artificial-intelligence o education-tics
