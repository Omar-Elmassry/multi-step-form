import { Input } from "./ui/input";

function PersonalInfoStep() {
  return (
    <>
      <h1 className="text-2xl font-bold text-marineBlue md:text-[2rem]">
        Personal Info
      </h1>
      <p className="text-coolGray">
        Please provide your name, email address, and phone number.
      </p>

      <section className="md:mt-9 mt-5 space-y-6">
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
