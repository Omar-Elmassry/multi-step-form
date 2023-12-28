import { useId } from "react";

type Props = {
  icon: JSX.Element;
  label: string;
  price: number;
  name?: string;
};

function PlanOption(props: Props) {
  const id = useId();
  return (
    <div className="w-full md:w-32">
      <input
        className="peer h-[1px] w-[1px] opacity-0"
        type="radio"
        name={props.name}
        id={props.name + id}
      />
      <label
        htmlFor={props.name + id}
        className="block w-full cursor-pointer rounded-lg border border-slate-300 p-4 hover:border-purplishBlue peer-checked:border-purplishBlue peer-checked:bg-alabaster md:h-40"
      >
        <div className="flex h-full items-center gap-3 md:flex-col md:items-start md:justify-between">
          {props.icon}

          <div>
            <p className="font-medium text-marineBlue">{props.label}</p>
            <p className="mt-1 text-sm text-coolGray md:mt-2">
              ${props.price}/mo
            </p>
          </div>
        </div>
      </label>
    </div>
  );
}

export default PlanOption;
