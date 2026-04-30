interface Props {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`rounded-xl border p-5
bg-(--card) border-(--border)
shadow-[0_1px_2px_rgba(0,0,0,0.2)]
dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
