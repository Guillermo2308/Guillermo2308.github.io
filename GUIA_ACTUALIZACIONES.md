# Guía sencilla de actualizaciones

## Qué editar según el cambio

| Cambio | Archivo o carpeta |
|---|---|
| Cargo, contacto, ORCID, Scholar, CV | `_data/perfil.yml` |
| Áreas de especialización | `_data/areas.yml` |
| Presentación y textos de portada | `index.html` |
| Nuevo proyecto o línea | Crear `.md` en `_proyectos/` |
| Nueva publicación científica | Crear `.md` en `_publicaciones/` |
| Nuevo artículo divulgativo | Crear `.md` en `_articulos/` |
| Apariencia | `assets/css/style.css` |
| Documentos descargables | `assets/docs/` |

## Proceso de actualización recomendado

1. Descargar una copia del repositorio o guardar el último ZIP.
2. Enviarme esa versión y el nuevo contenido, con indicación de qué se puede hacer público.
3. Revisar los cambios y la información científica, incluidos DOI, fechas, financiadores y afiliaciones.
4. Subir a GitHub los archivos nuevos o modificados. GitHub Pages vuelve a generar la web automáticamente.
5. Comprobar el resultado en ordenador y móvil. Si hay errores, GitHub permite restaurar una versión anterior.

## Ejemplo de nueva publicación

Crear `_publicaciones/mi-publicacion.md`:

```markdown
---
title: "Título real y verificado"
tipo: Publicación científica
orden: 1
resumen: "Resumen original breve"
doi: "10.xxxx/xxxxx"
---

## Referencia
Autores, revista, año, volumen y páginas.

## Contribución
Síntesis científica propia, resultados y límites.
```

La página de inicio la mostrará automáticamente. Los nombres y DOI del ejemplo **no son datos reales**.

## Precauciones

- Los artículos etiquetados como borrador son marcadores editoriales: **retirarlos o completarlos antes de publicar**.
- La ficha de LANA3P identifica expresamente que se trata de una propuesta en preparación.
- El correo de contacto, ORCID y CV permanecen vacíos hasta su revisión.
- No subir documentación confidencial ni información de clientes sin permiso.
- No colocar claves o contraseñas en el repositorio público.
- Las consultas de asesoramiento profesional deberán ajustarse a las autorizaciones institucionales aplicables.
