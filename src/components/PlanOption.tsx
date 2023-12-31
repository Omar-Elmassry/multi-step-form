import { cn } from "@/lib/utils";
import { useId } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  icon: JSX.Element;
  planName: string;
  price: number;
  inputName: string;
};

function PlanOption({ icon, planName, price, inputName = "plan" }: Props) {
  const id = useId();

  const { register, watch } = useFormContext();
  const duration = watch("duration");

  return (
    <div className="w-full md:w-32">
      <input
        className="peer hidden h-[1px] w-[1px] opacity-0"
        type="radio"
        value={planName}
        id={inputName + id}
        {...register(inputName)}
      />
      <label
        htmlFor={inputName + id}
        className="block w-full cursor-pointer rounded-lg border border-slate-300 p-4 hover:border-purplishBlue peer-checked:border-purplishBlue peer-checked:bg-alabaster md:h-40"
      >
        <div
          className={cn(
            "flex h-full gap-3 md:flex-col md:items-start md:justify-between",
            duration === "yearly" ? "items-start" : "items-center",
          )}
        >
          {icon}

          <div>
            <p className="font-medium text-marineBlue">{planName}</p>
            <p className="mt-1 text-sm text-coolGray md:mt-2">
              ${duration === "yearly" ? price * 10 : price}/mo
            </p>

            {duration === "yearly" && (
              <p className="mt-1 text-xs text-marineBlue">2 months free</p>
            )}
          </div>
        </div>
      </label>
    </div>
  );
}

export default PlanOption;
