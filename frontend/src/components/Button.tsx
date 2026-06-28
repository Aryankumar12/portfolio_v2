import { type ReactNode } from "react";
import { useTheme } from "../context/ThemeContext";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  target?: string;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
}

// ✅ Wrapper outside the component
interface WrapperProps {
  children: ReactNode;
  isDark: boolean;
}

const GradientWrapper = ({ children, isDark }: WrapperProps) => (
  <span className={`relative inline-flex rounded-full p-[6px] transition-all duration-300
    ${isDark ? "gradient-border-dark" : "gradient-border-light"}`}>
    <span className={`relative inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full cursor-pointer z-10
      ${isDark ? "bg-zinc-900 text-white" : "bg-white text-zinc-900"}`}>
      {children}
    </span>
  </span>
);
const Button = (props: ButtonProps) => {
  const { isDark } = useTheme();

  if (props.href) {
    return (
      <a href={props.href} target={props.target} className="hover:scale-105 transition-all duration-300">
        <GradientWrapper isDark={isDark}>{props.children}</GradientWrapper>
      </a>
    );
  }

  return (
    <button
      type={props.type || "button"}
      disabled={props.disabled}
      onClick={props.onClick}
      className="disabled:opacity-50 disabled:cursor-not-allowed bg-transparent border-none p-0"
    >
      <GradientWrapper isDark={isDark}>{props.children}</GradientWrapper>
    </button>
  );
};

export default Button;