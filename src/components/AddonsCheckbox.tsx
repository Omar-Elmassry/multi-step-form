import { useId } from "react";

type Props = {
  title: string;
  description: string;
  price: number;
  name?: string;
  checked?: boolean;
};

function AddonsCheckbox({
  title,
  description,
  price,
  name,
  checked = false,
}: Props) {
  const id = useId();
  return (
    <div className="w-full">
      <input
        className="peer h-[1px] w-[1px] opacity-0"
        type="checkbox"
        name={name}
        id={name + id}
      />
      <label
        htmlFor={name + id}
        className="block w-full cursor-pointer rounded-lg border border-slate-300 p-4 hover:border-purplishBlue peer-checked:border-purplishBlue peer-checked:bg-alabaster "
      >
        <div className="flex items-center justify-between">
          <div className="">
            {checked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <rect width="20" height="20" rx="4" fill="#483EFF" />
                <path
                  d="M5 10L8.43298 13.433L14.866 7"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="3.5"
                  stroke="#D6D9E6"
                />
              </svg>
            )}
          </div>
          <div>
            <p className="font-medium text-marineBlue">{title}</p>
            <p className="mt-1 text-[0.85rem] text-coolGray md:mt-2">
              {description}
            </p>
          </div>
          <p className="mt-1 text-[0.85rem] text-purplishBlue md:mt-2">
            ${price}/mo
          </p>
        </div>
      </label>
    </div>
  );
}

export default AddonsCheckbox;
