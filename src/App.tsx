import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";

import SidebarArt from "./assets/images/bg-sidebar-desktop.svg?react";
import MobileArt from "./assets/images/bg-sidebar-mobile.svg";
import FinishingStep from "./components/FinishingStep";
import PickAddonsStep from "./components/PickAddonsStep";
import PersonalInfoStep from "./components/PersonalInfoStep";
import SelectPlanStep from "./components/SelectPlanStep";
import StepInfo from "./components/StepInfo";
import ThankYouStep from "./components/ThankYouStep";

import * as formInfo from "./FormInfo.tsx";
import { Button } from "./components/ui/button.tsx";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);
  const delta = currentStep - previousStep;

  const form = useForm<formInfo.Inputs>({
    defaultValues: formInfo.defaultValues,
    resolver: zodResolver(formInfo.schema),
    criteriaMode: "all",
  });

  const { handleSubmit, trigger } = form;

  const submitForm: SubmitHandler<formInfo.Inputs> = (data) => {
    console.log("data", data);
  };

  type FieldName = keyof formInfo.Inputs;

  const next = async () => {
    const fields = formInfo.steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < formInfo.steps.length - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <>
      <img
        className="absolute top-0 z-[-1] block w-full md:hidden"
        src={MobileArt}
        alt=""
      />
      <main className="mx-4 mb-auto mt-24 flex w-full rounded-2xl bg-white p-4 shadow-main md:h-[75vh] md:max-h-[37.5rem] md:w-3/4 md:max-w-[57.75rem]">
        <div className="z-10 max-w-[17.125rem] md:relative md:isolate md:w-1/3 md:flex-shrink-0">
          <SidebarArt className="absolute z-[-1] hidden md:block" />
          <div className="absolute left-0 top-0 flex w-full justify-center gap-5 px-8 py-10 md:flex-col md:gap-8">
            {formInfo.steps.map((stepInfo, index) => (
              <StepInfo
                key={index}
                number={index + 1}
                title={stepInfo.title}
                active={index === currentStep}
              />
            ))}
          </div>
        </div>
        <div className="flex-grow">
          <FormProvider {...form}>
            <form
              className="container mx-0 flex h-full w-full flex-col px-2 pb-4 md:mx-auto md:max-w-[90%] md:px-8 md:pt-10"
              onSubmit={handleSubmit(submitForm)}
            >
              <AnimatePresence initial={false}>
                {currentStep === 0 && (
                  <motion.div
                    initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <PersonalInfoStep />
                  </motion.div>
                )}
              </AnimatePresence>
              {currentStep === 1 && (
                <motion.div
                  initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <SelectPlanStep />
                </motion.div>
              )}
              {currentStep === 2 && (
                <motion.div
                  initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <PickAddonsStep />
                </motion.div>
              )}
              {currentStep === 3 && (
                <motion.div
                  initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <FinishingStep backToPlans={() => setCurrentStep(1)} />
                </motion.div>
              )}
              {currentStep === 4 && (
                <motion.div
                  className="flex flex-grow"
                  initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ThankYouStep />
                </motion.div>
              )}

              {currentStep < 4 && (
                <div className="absolute bottom-0 left-0 flex w-full justify-between bg-white p-5 md:static md:mt-auto md:p-0">
                  {currentStep > 0 && currentStep < 4 && (
                    <Button variant="text" type="button" onClick={prev}>
                      Go back
                    </Button>
                  )}

                  {currentStep >= 0 && currentStep < 3 && (
                    <Button
                      className="ml-auto"
                      variant="primary"
                      type="button"
                      onClick={next}
                    >
                      Next Step
                    </Button>
                  )}

                  {currentStep === 3 && (
                    <Button
                      variant="secondary"
                      type="submit"
                      onClick={() => setCurrentStep(4)}
                    >
                      Confirm
                    </Button>
                  )}
                </div>
              )}
            </form>
          </FormProvider>
        </div>
      </main>
    </>
  );
}

export default App;
