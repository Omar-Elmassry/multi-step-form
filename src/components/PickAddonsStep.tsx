import { addons } from "@/FormInfo";
import AddonsCheckbox from "./AddonsCheckbox";

function PickAddonsStep() {
  return (
    <>
      <h1 className="text-2xl font-bold text-marineBlue md:text-[2rem]">
        Pick add-ons
      </h1>
      <p className="text-coolGray">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="mt-5 flex flex-col gap-4 md:mt-9">
        {addons.map((addon) => (
          <AddonsCheckbox
            key={addon.title}
            title={addon.title}
            description={addon.description}
            price={addon.price}
            inputName="addons"
          />
        ))}
      </div>
    </>
  );
}

export default PickAddonsStep;
