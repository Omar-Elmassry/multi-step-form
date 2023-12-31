import { Input } from "./ui/input";

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
    </>
  );
}

export default PersonalInfoStep;
