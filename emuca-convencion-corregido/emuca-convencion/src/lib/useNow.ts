"use client";

import { useEffect, useState } from "react";

// Hook simple que actualiza "ahora" cada segundo, usado para la
// cuenta atrás y para detectar la sesión actual/próxima.
export function useNow(intervalMs = 1000): Date {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return now;
}
