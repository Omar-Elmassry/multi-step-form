import { addons } from "@/FormInfo";
import AddonsCheckbox from "./AddonsCheckbox";

function PickAddonsStep() {
  return (
    <>
      <h1 className="text-[2rem] font-bold text-marineBlue">Pick add-ons</h1>
      <p className="text-coolGray">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="mt-9 flex flex-col gap-4">
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
