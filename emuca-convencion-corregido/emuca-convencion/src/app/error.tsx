"use client";

import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // En producción: enviar a un servicio de monitorización (p.ej.
    // Application Insights, ya que el resto del ecosistema es Microsoft).
    console.error(error);
  }, [error]);

  return (
    <div className="empty-state">
      <h1 style={{ fontSize: 20, marginBottom: 8 }}>Algo ha ido mal</h1>
      <p style={{ marginBottom: 16 }}>
        No hemos podido cargar este contenido. Puedes intentarlo de nuevo.
      </p>
      <button type="button" className="btn btn-primary" onClick={() => reset()}>
        Reintentar
      </button>
    </div>
  );
}
