import type { ReactNode } from "react";

export const T = {
  k: (c: ReactNode) => <span style={{ color: "var(--syntax-keyword)" }}>{c}</span>,
  s: (c: ReactNode) => <span style={{ color: "var(--syntax-string)" }}>{c}</span>,
  f: (c: ReactNode) => <span style={{ color: "var(--syntax-fn)" }}>{c}</span>,
  v: (c: ReactNode) => <span style={{ color: "var(--syntax-var)" }}>{c}</span>,
  c: (c: ReactNode) => <span style={{ color: "var(--syntax-comment)", fontStyle: "italic" }}>{c}</span>,
  n: (c: ReactNode) => <span style={{ color: "var(--syntax-number)" }}>{c}</span>,
  p: (c: ReactNode) => <span style={{ color: "var(--muted-foreground)" }}>{c}</span>,
};

export function CodeBlock({ children }: { children: ReactNode }) {
  return (
    <pre className="font-mono-code text-[13.5px] leading-7 text-foreground whitespace-pre-wrap break-words">
      {children}
    </pre>
  );
}

export function WithLines({ lines }: { lines: ReactNode[] }) {
  return (
    <div className="flex">
      <div
        aria-hidden
        className="select-none pr-4 text-right font-mono-code text-[13px] leading-7"
        style={{ color: "var(--vscode-line)" }}
      >
        {lines.map((_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>
      <div className="flex-1 min-w-0">
        <CodeBlock>
          {lines.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </CodeBlock>
      </div>
    </div>
  );
}