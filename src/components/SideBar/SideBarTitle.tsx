function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2 mt-4 border-b border-white/10 pb-2">
      <span className="font-bebas text-xs tracking-[0.2em] text-neutral-500">
        {children}
      </span>
    </div>
  );
}

export default SectionTitle;
