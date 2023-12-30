import { Button } from "./ui/button";
// type Props = {};

// function PersonalInfoStep({}: Props) {
function FinishingStep() {
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
              <h2 className="font-medium text-marineBlue">Arcade (Monthly)</h2>
              <Button
                variant="text"
                className="h-auto p-0 text-sm underline hover:text-purplishBlue"
              >
                Change
              </Button>
            </div>
            <p className="font-bold text-marineBlue">$9/mo</p>
          </div>

          <hr className="mt-6" />

          <div className="">
            <div className="mt-4 flex justify-between">
              <p className=" text-sm text-coolGray">Online service</p>
              <p className=" text-sm text-marineBlue">+$1/mo</p>
            </div>
            <div className="mt-4 flex justify-between">
              <p className=" text-sm text-coolGray">Online service</p>
              <p className=" text-sm text-marineBlue">+$1/mo</p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex w-full justify-between px-6 ">
          <p className="text-sm text-coolGray">Total (per month)</p>
          <p className="text-xl font-bold text-purplishBlue">+$12/mo</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 flex w-full justify-between bg-white p-5 md:static md:ml-auto md:mt-auto md:p-0">
        <Button variant="text">Go back</Button>
        <Button variant="secondary">Confirm</Button>
      </div>
    </>
  );
}

export default FinishingStep;
