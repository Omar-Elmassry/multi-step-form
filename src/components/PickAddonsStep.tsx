import { Button } from "./ui/button";

import AddonsCheckbox from "./AddonsCheckbox";

// type Props = {};

// function PickAddonsStep({}: Props) {
function PickAddonsStep() {
  return (
    <>
      <h1 className="text-[2rem] font-bold text-marineBlue">Pick add-ons</h1>
      <p className="text-coolGray">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="mt-9 flex flex-col gap-4">
        <AddonsCheckbox
          title="Online service"
          description="Access to multiplayer games"
          price={1}
          name="addon"
          checked
          duration="yearly"
        />
        <AddonsCheckbox
          title="Larger storage"
          description="Extra 1TB of cloud save"
          price={2}
          name="addon"
          duration="yearly"
        />
        <AddonsCheckbox
          title="Customizable profile"
          description="Custom theme on your profile"
          price={2}
          name="addon"
          duration="yearly"
        />
      </div>

      <div className="absolute bottom-0 left-0 flex w-full justify-between bg-white p-5 md:static md:ml-auto md:mt-auto md:p-0">
        <Button variant="text">Go back</Button>
        <Button variant="primary">Next Step</Button>
      </div>
    </>
  );
}

export default PickAddonsStep;
