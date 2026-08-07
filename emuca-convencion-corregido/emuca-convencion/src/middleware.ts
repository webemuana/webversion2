// Proteccion de acceso con usuario/contrasena compartidos.
//
// Al abrir cualquier URL del sitio, el navegador muestra su propio
// dialogo nativo de "usuario y contrasena" (autenticacion HTTP
// Basic). Sin las credenciales correctas, no se sirve ninguna
// pagina. Las credenciales se definen como variables de entorno en
// Vercel (APP_USER y APP_PASSWORD) y nunca quedan escritas en el codigo.
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (authHeader?.startsWith("Basic ")) {
    const base64Credentials = authHeader.slice("Basic ".length).trim();

    if (base64Credentials) {
      try {
        const decodedCredentials = atob(base64Credentials);
        const separatorIndex = decodedCredentials.indexOf(":");

        if (separatorIndex !== -1) {
          const user = decodedCredentials.slice(0, separatorIndex);
          const password = decodedCredentials.slice(separatorIndex + 1);
          const expectedUser = process.env.APP_USER;
          const expectedPassword = process.env.APP_PASSWORD;

          if (
            expectedUser &&
            expectedPassword &&
            user === expectedUser &&
            password === expectedPassword
          ) {
            return NextResponse.next();
          }
        }
      } catch {
        // Cabecera Basic mal formada: se responde con 401 mas abajo.
      }
    }
  }

  return new NextResponse(
    "Acceso restringido. Introduce las credenciales facilitadas.",
    {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Emuca Convencion", charset="UTF-8"',
      },
    }
  );
}

// La proteccion se aplica a todo el sitio EXCEPTO a los archivos
// internos de Next.js necesarios para cargar la aplicacion.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
