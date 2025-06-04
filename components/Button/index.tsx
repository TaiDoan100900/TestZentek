import React from "react";
import cn from "utils/common";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = "primary", 
  children, 
  disabled = false,
  className = "",
  ...props 
}) => {
  const baseClasses = "px-8 py-2 h-9 rounded-full transition-all duration-300 ease-in-out cursor-pointer focus:outline-none sm:h-10";
  
  const variantClasses = {
    primary: {
      normal: "bg-primary text-button-primary",
      disabled: "bg-primary text-button-primary cursor-not-allowed opacity-40"
    },
    secondary: {
      normal: "bg-transparent text-button-secondary border-1 border-primary",
      disabled: "bg-transparent text-button-secondary border-1 border-primary cursor-not-allowed opacity-40"
    }
  };

  const getButtonClasses = () => {
    const state = disabled ? "disabled" : "normal";
    return cn(baseClasses, variantClasses[variant][state], className);
  };

  return (
    <button
      className={getButtonClasses()}
      disabled={disabled}
      {...props}
    >
      <h6 className="font-black text-base italic">
        {children}
      </h6>
    </button>
  );
};

export default Button;