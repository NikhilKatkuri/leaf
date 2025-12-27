import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      aria-label={props.title}
      title={props.title}
      className={`ghost-button p-2 aspect-square ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
