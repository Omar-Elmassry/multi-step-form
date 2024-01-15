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
      <h1 className="text-2xl font-bold text-marineBlue md:text-[2rem]">
        Select your plan
      </h1>
      <p className="text-coolGray">
        You have the option of monthly or yearly billing.
      </p>

      <div className="mt-5 flex flex-col justify-between gap-3 md:mt-9 md:flex-row">
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
      {errorMsg && (
        <p className="mt-1 text-sm text-strawberryRed">{errorMsg as string}</p>
      )}

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
