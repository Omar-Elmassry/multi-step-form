import PlanOption from "./PlanOption";
import { Button } from "./ui/button";
import AdvancedIcon from "../assets/images/icon-advanced.svg?react";
import ArcadeIcon from "../assets/images/icon-arcade.svg?react";
import ProIcon from "../assets/images/icon-pro.svg?react";
import { Switch } from "./ui/switch";
import { useState } from "react";
import { cn } from "@/lib/utils";

// type Props = {};

// function PersonalInfoStep({}: Props) {
function SelectPlanStep() {
  const [planDuration, setPlanDuration] = useState("monthly");
  return (
    <>
      <h1 className="text-[2rem] font-bold text-marineBlue">
        Select your plan
      </h1>
      <p className="text-coolGray">
        You have the option of monthly or yearly billing.
      </p>

      <div className="mt-9 flex flex-col justify-between gap-3 md:flex-row">
        <PlanOption
          icon={<ArcadeIcon />}
          label="Arcade"
          price={9}
          name="plan"
          duration={planDuration}
        />
        <PlanOption
          icon={<AdvancedIcon />}
          label="Advanced"
          price={12}
          name="plan"
          duration={planDuration}
        />
        <PlanOption
          icon={<ProIcon />}
          label="Pro"
          price={15}
          name="plan"
          duration={planDuration}
        />
      </div>

      <div className="mt-8 flex items-center justify-center gap-6 rounded-lg bg-alabaster py-4">
        <p
          className={cn(
            "text-sm font-bold ",
            planDuration === "monthly" ? "text-marineBlue" : "text-coolGray",
          )}
        >
          Monthly
        </p>

        <Switch
          onCheckedChange={(v) => {
            setPlanDuration(v ? "yearly" : "monthly");
          }}
        />

        <p
          className={cn(
            "text-sm font-bold ",
            planDuration === "yearly" ? "text-marineBlue" : "text-coolGray",
          )}
        >
          yearly
        </p>
      </div>

      <div className="absolute bottom-0 left-0 flex w-full justify-between bg-white p-5 md:static md:ml-auto md:mt-auto md:p-0">
        <Button variant="text">Go back</Button>
        <Button variant="primary">Next Step</Button>
      </div>
    </>
  );
}

export default SelectPlanStep;
