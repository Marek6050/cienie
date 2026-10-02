import type { CSSProperties, ElementType, ReactNode } from "react";

/** Element wchodzi na scenę z opóźnieniem zależnym od `i` — kaskada w obrębie slajdu. */
export function Wej({
  i = 0,
  as: Tag = "div",
  className = "",
  children,
}: {
  i?: number;
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={`wej ${className}`} style={{ "--i": i } as CSSProperties}>
      {children}
    </Tag>
  );
}
