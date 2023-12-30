import ThankYouIcon from "../assets/images/icon-thank-you.svg";

function ThankYouStep() {
  return (
    <div className="flex flex-grow flex-col items-center justify-center py-20 md:py-0">
      <div className="">
        <img src={ThankYouIcon} alt="" />
      </div>
      <h1 className="mt-8 text-4xl font-bold text-marineBlue">Thank You!</h1>
      <p className="mt-3 text-center text-coolGray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default ThankYouStep;
