import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, name, error, ...props }, ref) => {
    const id = React.useId();
    return (
      <div>
        <div className="flex justify-between px-1 pb-2 text-sm">
          <label htmlFor={name + id} className="text-marineBlue">
            {label}
          </label>

          {error && <p className="font-bold text-strawberryRed">{error}</p>}
        </div>
        <input
          id={name + id}
          type={type}
          className={cn(
            "flex h-12 w-full rounded-lg border bg-white px-3 py-2 font-medium text-marineBlue placeholder:font-normal placeholder:text-coolGray focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            error
              ? "border-strawberryRed"
              : "border-slate-300 focus-visible:border-purplishBlue ",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
