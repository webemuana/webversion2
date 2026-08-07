import Link from "next/link";

export default function NotFound() {
  return (
    <div className="empty-state">
      <h1 style={{ fontSize: 20, marginBottom: 8 }}>Página no encontrada</h1>
      <p style={{ marginBottom: 16 }}>El contenido que buscas no existe o ha sido movido.</p>
      <Link href="/" className="btn btn-primary">
        Volver al inicio
      </Link>
    </div>
  );
}
