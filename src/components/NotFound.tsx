export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-6 py-24 text-center">
      <p className="text-lg font-black">Page not found</p>
      <p className="text-[12.5px] text-[var(--color-ink-dim)]">The page you're looking for doesn't exist.</p>
    </div>
  );
}
