import { Arrow, ArrowDefs, DiagramFrame, LifecycleNode } from "./LifecyclePrimitives";

export default function SwiftPipelineDiagram() {
  return (
    <DiagramFrame
      title="SWIFT failure stages"
      caption="NACK = format/network reject before business processing. Routing failures occur at correspondent hops. Business rejects/returns happen at beneficiary processing."
    >
      <svg viewBox="0 0 700 100" className="w-full min-w-[520px] h-auto" aria-hidden>
        <ArrowDefs />
        <LifecycleNode x={8} y={28} width={90} height={44} label="Submit" tone="neutral" />
        <Arrow x1={98} y1={50} x2={118} y2={50} />
        <LifecycleNode x={118} y={28} width={100} height={44} label="Network" sublabel="NACK here" tone="reject" />
        <Arrow x1={218} y1={50} x2={238} y2={50} />
        <LifecycleNode x={238} y={28} width={110} height={44} label="Routing" sublabel="intermediary" tone="return" />
        <Arrow x1={348} y1={50} x2={368} y2={50} />
        <LifecycleNode x={368} y={28} width={120} height={44} label="Beneficiary" sublabel="business return" tone="return" />
        <Arrow x1={488} y1={50} x2={508} y2={50} />
        <LifecycleNode x={508} y={28} width={100} height={44} label="Settled" tone="settled" />
      </svg>
    </DiagramFrame>
  );
}
