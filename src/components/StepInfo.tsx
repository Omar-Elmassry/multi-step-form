import { cn } from "@/lib/utils";

type Props = {
  number: number;
  title: string;
  active?: boolean;
};

function StepInfo({ number, title, active }: Props) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full border ",
          active
            ? "border-lightBlue bg-lightBlue text-marineBlue"
            : "border-white text-white",
        )}
      >
        <p className="font-bold">{number}</p>
      </div>
      <div className="hidden md:block">
        <p className="text-xs text-pastelBlue">STEP {number}</p>
        <p className="text-sm font-bold uppercase text-white">{title}</p>
      </div>
    </div>
  );
}

export default StepInfo;
