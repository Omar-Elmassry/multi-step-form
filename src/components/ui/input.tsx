import * as React from "react";

import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  name: string;
}

const Input: React.FC<InputProps> = ({
  className,
  type,
  label,
  name,
  ...props
}) => {
  const id = React.useId();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message;

  return (
    <div>
      <div className="flex justify-between px-1 pb-2 text-sm">
        <label htmlFor={name + id} className="text-marineBlue">
          {label}
        </label>

        {errorMessage && (
          <p className="font-bold text-strawberryRed">
            {errorMessage as string}
          </p>
        )}
      </div>
      <input
        id={name + id}
        type={type}
        className={cn(
          "flex h-12 w-full rounded-lg border bg-white px-3 py-2 font-medium text-marineBlue placeholder:font-normal placeholder:text-coolGray focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          errorMessage
            ? "border-strawberryRed"
            : "border-slate-300 focus-visible:border-purplishBlue ",
          className,
        )}
        {...props}
        {...register(name)}
      />
    </div>
  );
};

Input.displayName = "Input";

export { Input };
