import { Arrow, ArrowDefs, DiagramFrame, LifecycleNode } from "./LifecyclePrimitives";

/** Cross-rail: reject vs return vs pending vs settled */
export default function OutcomeComparisonDiagram() {
  return (
    <DiagramFrame
      title="Payment outcomes by stage"
      caption="Reject = not accepted or processing stopped early. Pending = accepted into flow, no terminal outcome yet. Return = processed but reversed with a reason code. Settled = terminal success."
    >
      <svg viewBox="0 0 720 220" className="w-full min-w-[560px] h-auto" aria-hidden>
        <ArrowDefs />
        <LifecycleNode x={16} y={72} width={100} height={44} label="Submitted" tone="neutral" />
        <Arrow x1={116} y1={94} x2={148} y2={94} />
        <LifecycleNode x={148} y={72} width={120} height={44} label="In pipeline" sublabel="validation / routing" tone="neutral" />
        <Arrow x1={268} y1={94} x2={300} y2={94} />

        <LifecycleNode x={300} y={16} width={118} height={40} label="Reject" sublabel="NACK, RJCT" tone="reject" />
        <LifecycleNode x={300} y={72} width={118} height={40} label="Pending" sublabel="PDNG, no update" tone="pending" />
        <LifecycleNode x={300} y={128} width={118} height={40} label="Return" sublabel="R01, R02…" tone="return" />
        <LifecycleNode x={300} y={184} width={118} height={36} label="Settled" sublabel="ACSC" tone="settled" />

        <Arrow x1={418} y1={36} x2={468} y2={36} />
        <Arrow x1={418} y1={92} x2={468} y2={92} />
        <Arrow x1={418} y1={148} x2={468} y2={148} />
        <Arrow x1={418} y1={202} x2={468} y2={202} />

        <LifecycleNode x={468} y={16} width={108} height={40} label="Fix & resubmit" tone="reject" />
        <LifecycleNode x={468} y={72} width={108} height={40} label="Monitor SLA" tone="pending" />
        <LifecycleNode x={468} y={128} width={108} height={40} label="Investigate" tone="return" />
        <LifecycleNode x={468} y={184} width={108} height={36} label="Close case" tone="settled" />

        <line x1={388} y1={94} x2={300} y2={36} stroke="#9ca3af" strokeWidth={1} strokeDasharray="4 3" />
        <line x1={388} y1={94} x2={300} y2={92} stroke="#9ca3af" strokeWidth={1} strokeDasharray="4 3" />
        <line x1={388} y1={94} x2={300} y2={148} stroke="#9ca3af" strokeWidth={1} strokeDasharray="4 3" />
        <line x1={388} y1={94} x2={300} y2={202} stroke="#9ca3af" strokeWidth={1} strokeDasharray="4 3" />
      </svg>
    </DiagramFrame>
  );
}
