import { Arrow, ArrowDefs, DiagramFrame, LifecycleNode } from "./LifecyclePrimitives";

export default function Pacs002FlowDiagram() {
  return (
    <DiagramFrame
      title="pacs.002 status progression (simplified)"
      caption="ACSP is acceptance into processing, not final settlement. PDNG without a follow-up status within the corridor window is a common stuck signal."
    >
      <svg viewBox="0 0 640 120" className="w-full min-w-[480px] h-auto" aria-hidden>
        <ArrowDefs />
        <LifecycleNode x={12} y={36} width={88} height={44} label="Submitted" tone="neutral" />
        <Arrow x1={100} y1={58} x2={128} y2={58} />
        <LifecycleNode x={128} y={36} width={88} height={44} label="ACSP" sublabel="accepted" tone="pending" />
        <Arrow x1={216} y1={58} x2={244} y2={58} />
        <LifecycleNode x={244} y={20} width={88} height={40} label="PDNG" sublabel="pending" tone="pending" />
        <LifecycleNode x={244} y={68} width={88} height={40} label="RJCT" sublabel="rejected" tone="reject" />
        <Arrow x1={332} y1={40} x2={360} y2={40} />
        <Arrow x1={332} y1={88} x2={360} y2={88} label="or" />
        <LifecycleNode x={360} y={36} width={96} height={44} label="ACSC" sublabel="settled" tone="settled" />
        <line x1={216} y1={58} x2={244} y2={40} stroke="#6b7280" strokeWidth={1.5} />
        <line x1={216} y1={58} x2={244} y2={88} stroke="#6b7280" strokeWidth={1.5} />
        <LifecycleNode x={480} y={36} width={140} height={44} label="No update" sublabel="→ stuck detection" tone="pending" />
        <Arrow x1={428} y1={58} x2={480} y2={58} label="timeout" />
      </svg>
    </DiagramFrame>
  );
}
