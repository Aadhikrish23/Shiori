interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md"; 
  disabled?: boolean;
  className?: string;
}

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled,
  className = "",
}: Props) => {
  const base =
    "px-4 py-2.5 rounded-lg text-sm font-medium transition shadow-sm";

 const styles = {
  primary:
    "bg-blue-600 hover:bg-blue-500",
  secondary:
    "bg-purple-600 hover:bg-purple-500",
  danger:
    "bg-red-500 hover:bg-red-400",
  ghost:
    "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
};
const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2.5 text-sm",
};

  return (
    <button
      onClick={onClick}
      disabled={disabled}
       className={`${base} ${sizes[size]} ${styles[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;