import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export function Input({ className = "", ...props }: InputProps) {
    return (
        <input
            className={`w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 transition-all focus:border-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-800 ${className}`}
            {...props}
        />
    );
}