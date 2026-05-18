"use client";

import { useEffect, useRef, useState } from "react";

interface MermaidDiagramProps {
  chart: string;
}

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rendered, setRendered] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    import("mermaid")
      .then(({ default: mermaid }) => {
        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          themeVariables: {
            background: "transparent",
            primaryColor: "#1e1e1e",
            primaryBorderColor: "#333333",
            primaryTextColor: "#9ca3af",
            lineColor: "#444444",
            edgeLabelBackground: "transparent",
            secondaryColor: "#1e1e1e",
            tertiaryColor: "#1e1e1e",
            fontSize: "12px",
          },
          flowchart: { curve: "basis", padding: 16 },
        });
        const id = `mermaid-${Math.random().toString(36).slice(2)}`;
        return mermaid.render(id, chart);
      })
      .then(({ svg }) => {
        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg;
          setRendered(true);
        }
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => { cancelled = true; };
  }, [chart]);

  if (error) return null;

  return (
    <div
      ref={ref}
      className={`overflow-x-auto transition-opacity duration-300 ${rendered ? "opacity-100" : "opacity-0"} [&_svg]:max-w-full [&_svg]:h-auto`}
    />
  );
}
