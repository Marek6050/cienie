import type { ReactNode } from "react";

/** Pasek sekcji: wspólna szerokość i rytm pionowy dla wszystkich siatek. */
export function Sekcja({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-3 py-10 sm:px-6 sm:py-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1200px]">{children}</div>
    </section>
  );
}
