interface Props {
  label: string;
  variant?: "blue" | "green" | "gray" | "red";
}

const Badge = ({ label, variant = "gray" }: Props) => {
const styles = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  green: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  gray: "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300",
  red: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
};
  return (
    <span
      className={`px-2 py-1 text-xs rounded-full ${styles[variant]}`}
    >
      {label}
    </span>
  );
};

export default Badge;