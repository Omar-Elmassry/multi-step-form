import { plans } from "@/FormInfo";
import PlanOption from "./PlanOption";
import { Switch } from "./ui/switch";
// import { useState } from "react";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

function SelectPlanStep() {
  // const [planDuration, setPlanDuration] = useState("monthly");
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const duration = watch("duration");

  const errorMsg = errors.plan?.message;

  return (
    <>
      <h1 className="text-[2rem] font-bold text-marineBlue">
        Select your plan
      </h1>
      <p className="text-coolGray">
        You have the option of monthly or yearly billing.
      </p>

      <div className="mt-9 flex flex-col justify-between gap-3 md:flex-row">
        {plans.map((plan) => (
          <PlanOption
            key={plan.name}
            icon={plan.icon}
            planName={plan.name}
            price={plan.price}
            inputName="plan"
          />
        ))}
      </div>
      <p className="mt-1 h-[2ch] text-sm text-strawberryRed">
        {errorMsg && (errorMsg as string)}
      </p>

      <div className="mt-6 flex items-center justify-center gap-6 rounded-lg bg-alabaster py-4">
        <p
          className={cn(
            "text-sm font-bold ",
            duration === "monthly" ? "text-marineBlue" : "text-coolGray",
          )}
        >
          Monthly
        </p>

        <Switch
          onCheckedChange={(v) => {
            setValue("duration", v ? "yearly" : "monthly");
          }}
        />

        <p
          className={cn(
            "text-sm font-bold ",
            duration === "yearly" ? "text-marineBlue" : "text-coolGray",
          )}
        >
          yearly
        </p>
      </div>
    </>
  );
}

export default SelectPlanStep;
