import { useState } from "react";

const ProgressBar = ({count}) => {
  // const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 10; // (10 dots total)

  // const handleClick = () => {
  //   // cap at totalSteps-1
  //   setCurrentStep((prev) => (prev < totalSteps - 1 ? prev + 1 : prev));
  // };

  return (
    <div
      // onClick={handleClick}
      className="flex w-full items-center justify-between relative py-1.5 mb-5"
    >
      {/* Line connecting all dots at the back-ground */}
      <div className="absolute h-1 bg-[#BFBFBF] left-0 right-0 top-1/2 transform -translate-y-1/2 z-0"></div>

      {/* Dots 10 */}
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full z-10 transition-all duration-300 ease-out flex items-center justify-center
                ${index <= count ? "bg-[#00A55C]" : "bg-[#BFBFBF]"}`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
