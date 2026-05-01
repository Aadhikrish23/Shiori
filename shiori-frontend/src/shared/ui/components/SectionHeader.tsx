import { motion } from "framer-motion";

const SectionHeader = ({ title, subtitle, right }: any) => (
  <div className="flex items-end justify-between mb-4">
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl font-semibold text-[var(--text)] relative"
      >
        {title}
        <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-[var(--accent)] rounded-full" />
      </motion.h2>
      {subtitle && (
        <p className="text-sm text-[var(--muted)] mt-1">{subtitle}</p>
      )}
    </div>
    {right}
  </div>
);

export default SectionHeader;