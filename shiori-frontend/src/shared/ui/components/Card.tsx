interface Props {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`
        rounded-xl border p-5
        bg-(--card)
        border-(--border)
        transition-all duration-300
        hover:shadow-lg
        hover:scale-[1.02]
        ${className}
      `}
    >
      {children}
    </div>
  );
};



export default Card;
