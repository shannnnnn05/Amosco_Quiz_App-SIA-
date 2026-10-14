import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const pundasyon =
  "inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-xl px-[26px] py-3.5 text-[15px] font-bold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60";

const mgaBaryante = {
  primary:
    "border-none bg-linear-to-r from-accent to-accent-blue text-[#04121a] shadow-[0_10px_26px_rgba(56,225,255,0.22)] hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(56,225,255,0.32)] active:translate-y-0 disabled:cursor-not-allowed disabled:bg-none disabled:bg-off disabled:text-off-fg disabled:shadow-none disabled:hover:translate-y-0",
  secondary:
    "border border-line bg-transparent text-fg hover:border-accent hover:text-accent",
};

function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${pundasyon} ${mgaBaryante[variant]} ${className}`}
      {...props}
    />
  );
}

export default Button;
