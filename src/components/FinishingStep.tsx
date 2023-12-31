import { useFormContext } from "react-hook-form";
import { Button } from "./ui/button";
import { addons, plans } from "@/FormInfo";

type Props = {
  backToPlans: () => void;
};

function FinishingStep({ backToPlans }: Props) {
  const { watch } = useFormContext();

  const plan = watch("plan");
  const duration = watch("duration");
  const pickedAddons = watch("addons");

  const addonsTotalPrice = pickedAddons.reduce(
    (acc: number, curr: string) =>
      acc + (addons.find((a) => a.title === curr)?.price ?? 0),
    0,
  );

  const planPrice = plans.find((p) => p.name === plan)?.price;

  const totalPrice = addonsTotalPrice + (planPrice ?? 0);

  return (
    <>
      <h1 className="text-[2rem] font-bold text-marineBlue">Finishing up</h1>
      <p className="text-coolGray">
        Double-check everything looks OK before confirming.
      </p>

      <div className="w-full">
        <div className="mt-9 flex flex-col rounded-lg bg-alabaster px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start justify-start">
              <h2 className="font-medium text-marineBlue">
                {plan} ({duration})
              </h2>
              <Button
                className="h-auto p-0 text-sm underline hover:text-purplishBlue"
                variant="text"
                type="button"
                onClick={backToPlans}
              >
                Change
              </Button>
            </div>
            <p className="font-bold text-marineBlue">
              ${duration === "yearly" ? (planPrice ?? 0) * 10 : planPrice ?? 0}
              /mo
            </p>
          </div>

          {pickedAddons.length > 0 && (
            <>
              <hr className="mt-6" />

              <div className="">
                {pickedAddons.map((value: string) => {
                  const addon = addons.find((a) => a.title === value);
                  return (
                    <div key={value} className="mt-4 flex justify-between">
                      <p className=" text-sm text-coolGray">{addon?.title}</p>
                      <p className=" text-sm text-marineBlue">
                        +$
                        {duration === "yearly"
                          ? (addon?.price ?? 0) * 10
                          : addon?.price}
                        /mo
                      </p>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
        <div className="mt-6 flex w-full justify-between px-6 ">
          <p className="text-sm text-coolGray">Total (per month)</p>
          <p className="text-xl font-bold text-purplishBlue">
            +$
            {duration === "yearly" ? totalPrice * 10 : totalPrice}
            /mo
          </p>
        </div>
      </div>
    </>
  );
}

export default FinishingStep;
