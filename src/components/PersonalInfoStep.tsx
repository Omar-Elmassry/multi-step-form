import { Button } from "./ui/button";
import { Input } from "./ui/input";

// type Props = {};

// function PersonalInfoStep({}: Props) {
function PersonalInfoStep() {
  return (
    <>
      <h1 className="text-[2rem] font-bold text-marineBlue">Personal Info</h1>
      <p className="text-coolGray">
        Please provide your name, email address, and phone number.
      </p>

      <section className="mt-9 space-y-6">
        <Input
          label="Name"
          type="text"
          name="name"
          placeholder="e.g. Stephen King"
        />
        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <Input
          label="Phone Number"
          type="tel"
          name="phone"
          placeholder="e.g. +1 234 567 890"
        />
      </section>

      <div className="absolute bottom-0 left-0 flex w-full bg-white p-5 md:static md:ml-auto md:mt-auto md:p-0">
        <Button variant="primary" className="ml-auto">
          Next Step
        </Button>
      </div>
    </>
  );
}

export default PersonalInfoStep;
