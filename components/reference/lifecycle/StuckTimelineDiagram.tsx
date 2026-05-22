import { ArrowDefs, DiagramFrame, LifecycleNode } from "./LifecyclePrimitives";

export default function StuckTimelineDiagram() {
  return (
    <DiagramFrame
      title="Stuck = expected event did not arrive in time"
      caption="Detection compares last known status and elapsed time to corridor SLA. Absence of pacs.002 (or equivalent) updates is treated as a signal, not silence."
    >
      <svg viewBox="0 0 640 100" className="w-full min-w-[480px] h-auto" aria-hidden>
        <ArrowDefs />
        <line x1={24} y1={70} x2={616} y2={70} stroke="#d1d5db" strokeWidth={2} />
        <LifecycleNode x={24} y={12} width={100} height={40} label="T0 submit" tone="neutral" />
        <LifecycleNode x={180} y={12} width={110} height={40} label="T1 ACSP" sublabel="last event" tone="pending" />
        <LifecycleNode x={360} y={12} width={130} height={40} label="T2 SLA window" sublabel="expected ACSC" tone="neutral" />
        <LifecycleNode x={520} y={12} width={110} height={40} label="No ACSC" sublabel="stuck flag" tone="pending" />
        <circle cx={64} cy={70} r={5} fill="#3b82f6" />
        <circle cx={235} cy={70} r={5} fill="#3b82f6" />
        <circle cx={425} cy={70} r={5} fill="#d97706" />
        <circle cx={575} cy={70} r={5} fill="#dc2626" />
      </svg>
    </DiagramFrame>
  );
}
