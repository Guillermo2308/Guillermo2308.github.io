# Formulario de consultas — Form.taxi

Configuración de envío incorporada el 19 de noviembre de 2026. El titular ha mostrado la creación del formulario y del DPA en el panel, así como la configuración del correo receptor. Conservar el DPA en archivo privado, nunca en el repositorio público. El endpoint de envío es público; la clave de la API no se utiliza y debe mantenerse privada y regenerarse si ha quedado expuesta.

El formulario usa POST y una respuesta JSON (HTTP 200 y success=true); solo entonces confirma el envío. Sin JavaScript se usa la página de confirmación del proveedor. Las políticas de privacidad ES/EN identifican el servicio, los datos técnicos y la conservación según la documentación oficial. Revisar el DPA descargado y confirmar que el correo institucional está autorizado para esta finalidad.

Prueba de aceptación: realizar una consulta ficticia por idioma desde el dominio publicado, comprobar el mensaje en la web, la presencia en el archivo de Form.taxi y la recepción del correo. Comprobar que la dirección del remitente permite responder, revisar las carpetas spam y eliminar los datos de prueba cuando no sean necesarios. No confundir aceptación del servicio con entrega efectiva del correo.

Documentación: https://docs.form.taxi/en/javascript y https://docs.form.taxi/en/privacy.
