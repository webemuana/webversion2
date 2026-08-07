# Emuca Sales Convention — Web de convención comercial

Web responsive (no instalable como app) para la convención comercial
interna de Emuca. Pensada mobile-first para los comerciales asistentes:
se abre desde un enlace, sin necesidad de instalar nada.

## Contenido de este prototipo

- Inicio: cuenta atrás, próxima actividad, avisos destacados.
- Agenda por días con filtros por tipo de sesión y detalle de cada sesión.
- Añadir sesiones al calendario del móvil (genera un archivo `.ics`).
- Información práctica: hotel, transporte, horarios, contactos, wifi.
- Directorio de participantes y ponentes, con búsqueda y ficha individual.
- Sección "Más": biblioteca de documentos, avisos completos y encuestas
  (enlaces a Microsoft Forms).
- Idiomas: español, inglés, francés, italiano y portugués (selector en
  cabecera y en "Más").
- Todos los datos son de **demostración** (`src/data/*`), separados del
  código de la interfaz.

## Requisitos

- Node.js 18.18 o superior
- npm 9+ (o pnpm/yarn si se prefiere)

## Instalación

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000` (o `http://IP-DEL-ORDENADOR:3000` desde el
móvil, si están en la misma red, para probar el aspecto mobile-first real).

## Pruebas

```bash
npm run test
```

Cubre: cálculo de sesión actual/próxima, cuenta atrás, generación de
archivos `.ics` y validación de los datos de demostración con `zod`.

## Compilar para producción

```bash
npm run build
npm run start
```

## Publicación

Recomendado: **Vercel** (mismo creador de Next.js, despliegue directo desde
Git, HTTPS automático).

1. Subir el proyecto a un repositorio Git (GitHub/Azure DevOps/GitLab).
2. Importar el repositorio en Vercel (o en Azure Static Web Apps / App
   Service si se prefiere mantenerlo dentro del ecosistema Microsoft).
3. Variables de entorno: configurar `APP_USER` y `APP_PASSWORD` para
   proteger el acceso (ver sección de privacidad más abajo). Cuando se
   conecte a Microsoft Lists/SharePoint, añadir aquí también las
   credenciales de Microsoft Graph (`AZURE_CLIENT_ID`,
   `AZURE_CLIENT_SECRET`, `AZURE_TENANT_ID`, etc.) — nunca en el código.
4. Desplegar. Verificar que el dominio final usa HTTPS.
5. Compartir la URL que da Vercel (tipo `https://tu-proyecto.vercel.app`)
   por el canal que prefieras — no requiere instalación, se abre como
   cualquier página web.

## Conectar datos reales (Microsoft Lists / SharePoint)

Toda la lectura de datos pasa por `src/lib/data/repository.ts`. Para
conectar a datos reales:

1. Crear las listas en SharePoint/Microsoft Lists con los mismos campos
   que los tipos de `src/types/index.ts` (agenda, personas, documentos,
   avisos, encuestas, info práctica).
2. Registrar una aplicación en Azure AD con permisos de lectura sobre
   Microsoft Graph (`Sites.Read.All` o similar).
3. Sustituir, dentro de cada función de `repository.ts`, la lectura de
   `src/data/*` por una llamada a Microsoft Graph API, manteniendo la
   validación con los esquemas `zod` de `src/lib/schemas.ts` (así la web
   nunca renderiza datos externos mal formados).
4. Ningún componente de `src/app` ni `src/components` necesita cambios,
   porque solo conocen los tipos, no el origen de los datos.

## Estructura del proyecto

```
src/
  app/            Rutas (App Router de Next.js) — una carpeta por pantalla
  components/     Componentes reutilizables (SessionCard, BottomNav, etc.)
  data/           Datos de DEMOSTRACIÓN, separados del código
  lib/
    data/         Capa de acceso a datos (repository.ts)
    i18n/         Diccionarios de idioma y contexto de idioma
    schemas.ts    Validación (zod)
    dates.ts      Lógica de fechas/cuenta atrás
    ics.ts        Generación de archivos .ics
  middleware.ts   Protección con usuario/contraseña
  types/          Tipos TypeScript compartidos (el "contrato" de datos)
  __tests__/      Pruebas (Vitest)
```

## Privacidad: acceso restringido solo a quien recibe el enlace

Este proyecto **no está pensado para ser público**. Incluye tres capas de
protección, activas por defecto:

1. **`robots.txt`** y metaetiqueta `noindex`: los buscadores no indexan el
   sitio, así que no aparece en Google ni en ningún directorio.
2. **Contraseña compartida** (`src/middleware.ts`): al abrir cualquier
   página, el navegador pide un usuario y una contraseña (diálogo nativo,
   sin necesidad de programar una pantalla de login). Sin las credenciales
   correctas no se sirve ningún contenido.
3. **Repositorio de GitHub privado** (recomendado, se elige al crearlo):
   así nadie externo puede ver el código fuente.

### Configurar la contraseña

**En local, para probarla:**

```bash
cp .env.local.example .env.local
```

Edita `.env.local` y cambia `APP_USER` y `APP_PASSWORD` por las
credenciales que quieras usar. Vuelve a ejecutar `npm run dev` y
comprueba que `http://localhost:3000` te pide usuario y contraseña.

**En Vercel, para producción:**

1. En el proyecto importado en Vercel, ve a **Settings → Environment
   Variables**.
2. Añade dos variables: `APP_USER` y `APP_PASSWORD`, con los valores que
   quieras compartir con el equipo.
3. Guarda y vuelve a desplegar (**Deployments → ⋯ → Redeploy**) para que
   los cambios de variables de entorno se apliquen.
4. Comparte esas credenciales por un canal aparte del email con el
   enlace (por ejemplo, un mensaje de Teams/Slack), para que ni siquiera
   quien intercepte el correo pueda entrar sin la contraseña.

Importante: `.env.local` **nunca** debe subirse a GitHub (el
`.gitignore` del proyecto ya lo excluye). Las credenciales reales solo
deben vivir en Vercel.

## Riesgos de seguridad y protección de datos a revisar antes de producción

- Evaluar si el directorio de participantes necesita autenticación
  (Azure AD / Microsoft Entra ID), dado que muestra nombres, empresas y
  roles de personas reales.
- No exponer teléfonos/emails personales sin consentimiento explícito.
- Servir la web siempre bajo HTTPS.
- Si los documentos de la biblioteca son confidenciales, controlarlos por
  permisos de SharePoint y no por una carpeta pública.
- Incluir una nota de privacidad indicando qué datos de cada asistente se
  muestran en la web y con qué base legal (RGPD).

## Pendiente para pasar de prototipo a versión final

- Sustituir datos de demostración por datos reales del evento.
- Completar traducciones fr/it/pt (actualmente heredan literales del
  español salvo la navegación, para no inflar el prototipo).
- Decidir e implementar el modelo de autenticación, si aplica.
- Conectar `repository.ts` a Microsoft Lists/SharePoint.
