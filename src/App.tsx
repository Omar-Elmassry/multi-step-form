import SidebarArt from "./assets/images/bg-sidebar-desktop.svg?react";
import MobileArt from "./assets/images/bg-sidebar-mobile.svg";
import FinishingStep from "./components/FinishingStep";
import PickAddonsStep from "./components/PickAddonsStep";
import PersonalInfoStep from "./components/PersonalInfoStep";
import SelectPlanStep from "./components/SelectPlanStep";
import StepInfo from "./components/StepInfo";
import ThankYouStep from "./components/ThankYouStep";

function App() {
  return (
    <>
      <img
        className="absolute top-0 z-[-1] block w-full md:hidden"
        src={MobileArt}
        alt=""
      />
      <main className="mx-4 mb-auto mt-24 flex w-full rounded-2xl bg-white p-4 shadow-main md:h-[75vh] md:max-h-[37.5rem] md:w-3/4 md:max-w-[57.75rem]">
        <div className="max-w-[17.125rem] md:relative md:isolate md:w-1/3 md:flex-shrink-0">
          <SidebarArt className="absolute z-[-1] hidden md:block" />
          <div className="absolute left-0 top-0 flex w-full justify-center gap-5 px-8 py-10 md:flex-col md:gap-8">
            <StepInfo number={1} title="YOUR INFO" active={true} />
            <StepInfo number={2} title="SELECT PLAN" />
            <StepInfo number={3} title="ADD-ONS" />
            <StepInfo number={4} title="SUMMARY" />
          </div>
        </div>
        <div className="flex-grow">
          <div className="container mx-0 flex h-full w-full flex-col px-2 pb-4 md:mx-auto md:max-w-[90%] md:px-8 md:pt-10">
            {/* <PersonalInfoStep /> */}
            {/* <SelectPlanStep /> */}
            {/* <PickAddonsStep /> */}
            {/* <FinishingStep /> */}
            {/* <ThankYouStep /> */}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
