const Skeleton = ({ className = "" }) => (
  <div
    className={`relative overflow-hidden rounded-md bg-[var(--border)]/40 ${className}`}
  >
    <div className="absolute inset-0 shimmer" />
  </div>
);

export default Skeleton;