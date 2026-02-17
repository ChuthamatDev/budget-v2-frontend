import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline";
    fullWidth?: boolean;
}

export function Button({
    variant = "primary",
    fullWidth = true,
    className = "",
    children,
    ...props
}: ButtonProps) {
    const baseStyle = "flex items-center justify-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-slate-900 text-white tracking-wide shadow-md shadow-slate-900/10 hover:bg-slate-800 hover:shadow-lg focus:ring-slate-900",
        outline: "border border-slate-200 bg-white text-slate-600 shadow-sm hover:bg-slate-50 hover:text-slate-900"
    };

    return (
        <button
            className={`${baseStyle} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}