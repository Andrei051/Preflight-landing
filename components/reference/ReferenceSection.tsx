export default function ReferenceSection({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-6">
      <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-3">{heading}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}
