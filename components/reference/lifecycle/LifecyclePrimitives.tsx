import type { ReactNode } from "react";

export type NodeTone = "neutral" | "pending" | "reject" | "return" | "settled";

const toneFill: Record<NodeTone, string> = {
  neutral: "#f3f4f6",
  pending: "#fef3c7",
  reject: "#fee2e2",
  return: "#ffedd5",
  settled: "#dcfce7",
};

const toneStroke: Record<NodeTone, string> = {
  neutral: "#9ca3af",
  pending: "#d97706",
  reject: "#dc2626",
  return: "#ea580c",
  settled: "#16a34a",
};

export function DiagramFrame({
  title,
  caption,
  children,
}: {
  title: string;
  caption?: string;
  children: ReactNode;
}) {
  return (
    <figure className="my-6 rounded-lg border border-gray-200 bg-gray-50/80 p-4">
      <figcaption className="sr-only">{title}</figcaption>
      <p className="text-sm font-medium text-gray-900 mb-3">{title}</p>
      <div className="overflow-x-auto">{children}</div>
      {caption && <p className="mt-3 text-xs text-gray-500 leading-relaxed">{caption}</p>}
    </figure>
  );
}

export function LifecycleNode({
  x,
  y,
  width,
  height,
  label,
  sublabel,
  tone = "neutral",
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  sublabel?: string;
  tone?: NodeTone;
}) {
  const h = sublabel ? height + 14 : height;
  return (
    <g role="img" aria-label={sublabel ? `${label}: ${sublabel}` : label}>
      <rect
        x={x}
        y={y}
        width={width}
        height={h}
        rx={6}
        fill={toneFill[tone]}
        stroke={toneStroke[tone]}
        strokeWidth={1.5}
      />
      <text
        x={x + width / 2}
        y={y + (sublabel ? 20 : h / 2 + 5)}
        textAnchor="middle"
        className="fill-gray-900"
        style={{ fontSize: 12, fontWeight: 600 }}
      >
        {label}
      </text>
      {sublabel && (
        <text
          x={x + width / 2}
          y={y + 38}
          textAnchor="middle"
          className="fill-gray-600"
          style={{ fontSize: 10 }}
        >
          {sublabel}
        </text>
      )}
    </g>
  );
}

export function Arrow({
  x1,
  y1,
  x2,
  y2,
  label,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label?: string;
}) {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#6b7280" strokeWidth={1.5} markerEnd="url(#arrow)" />
      {label && (
        <text x={midX} y={midY - 6} textAnchor="middle" className="fill-gray-500" style={{ fontSize: 9 }}>
          {label}
        </text>
      )}
    </g>
  );
}

export function ArrowDefs() {
  return (
    <defs>
      <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
        <path d="M0,0 L8,4 L0,8 Z" fill="#6b7280" />
      </marker>
    </defs>
  );
}
