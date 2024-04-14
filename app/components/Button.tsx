type Props = {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

export const Button = ({onClick, disabled, className, type, children}: Props) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
};
