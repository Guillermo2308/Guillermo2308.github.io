# Activación del envío automático (Form.taxi)

El formulario nuevo está operativo en modo correo manual y copia de consulta. No transmite a Form.taxi hasta completar la activación.

1. Registrar una cuenta gratuita en https://form.taxi/panel/account/register y confirmar el correo. Crear una conexión de formulario llamada Consultas web GGV. Configurar el destinatario profesional autorizado y las notificaciones, comprobar la protección antispam.
2. En Privacy, crear y descargar el contrato de tratamiento (DPA) y revisar la información del proveedor. Ver https://docs.form.taxi/en/privacy.
3. Copiar el endpoint https://form.taxi/s/FORM_CODE (no contraseñas). Sustituir el valor vacío de endpoint en assets/js/consultation.js por la URL real. Actualizar las políticas ES/EN antes de activar: proveedor y subencargados, finalidad, IP y agente de usuario, conservación según contrato, ubicación y derechos. Actualizar las versiones de los scripts para evitar caché.
4. Probar ambas páginas con consultas ficticias identificadas, comprobar que llega el correo y se puede responder al visitante; verificar errores, spam y funcionamiento móvil. Confirmar el uso autorizado de la cuenta institucional. No confundir aceptación del backend con recepción efectiva del correo.

Documentación: https://docs.form.taxi/en/form-setup y https://docs.form.taxi/en/javascript.
