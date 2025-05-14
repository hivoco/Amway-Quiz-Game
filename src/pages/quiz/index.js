import Options from "@/components/Options";
import ProgressBar from "@/components/ProgressBar";
import { ArrowLeft, LogOut, Mic, Volume2, VolumeOff } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Quiz = () => {
  const [clicked, setClicked] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [ansType, setAnsType] = useState("");

  return (
    <div
      className={`pt7 pt-4 pb- min-h-svh max-w-md mx-auto grid  relative ${
        ansType === "text" ? "grid-rows-[auto_1fr_auto_auto]" : ""
      }`}
    >
      <section className="w-full fle grid flex-col gap-1.5 px-6">
        <nav className=" w-full flex justify-between items-center ">
          <div className="flex items-center gap-3 ">
            <ArrowLeft size={24} />
            <span className="text-dark-green font-semibold text-lg/5.5 ">
              01/10
            </span>
          </div>

          <div className="flex flex-col gap-2.5  ">
            <span className="p-3  rounded-full bg-[#79BF44] outline-1 outline-dark-green">
              <LogOut color="white" size={16} />
            </span>

            <span
              onClick={() => setIsMuted((prev) => !prev)}
              className="p-3 rounded-full bg-[#79BF44] outline-1 outline-dark-green"
            >
              {isMuted ? (
                <VolumeOff color="white" size={16} />
              ) : (
                <Volume2 color="white" size={16} />
              )}
            </span>
          </div>
        </nav>

        <ProgressBar />
      </section>

      {/* ${ansType  ? "grid-rows-[minmax(auto,19%)_minmax(auto,25%)_minmax(auto,7%)] md:grid-rows-none" : ""
      } */}
      <section
        className={`w-full fle flex-col grid gap-2 px-6
                ${ansType ? "grid-rows-[90px_120px_40px]" : ""} 
        `}
      >
        <div className="font-semibold text-base/5 tracking-wide text-[#111111] outline outline-black p-3.5 rounded-xl">
          {"Q1."}
          You're recommending Triple Protect to someone who catches flu often.
          What do you highlight?
        </div>

        <div className="relative  overflow-visible flex items-center justify-center cursor-pointer ">
          <div
            onClick={() => setClicked(!clicked)}
            className="flex flex-col gap- justify-center items-center z-50 relative py-6 pt-5 "
          >
            <Image
              className={`${clicked ? "w-15" : ""}`}
              width={41.5}
              height={60}
              alt="solid mic white"
              src={clicked ? "/gif/waves.gif" : "/images/mic.png"}
              priority={true}
            />
            <span className="font-medium text-xs/4 text-center text-white ">
              {clicked ? "Listening" : "Tap to answer"}
            </span>
          </div>

          <Image
            className="absolute inset-0 z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 "
            width={110}
            height={120}
            alt="green hexagon"
            src={"/images/green-hexagon.png"}
            priority={true}
          />
        </div>

        {ansType === "text" ? (
          <div class=" py-2 px-3.5 w-full flex justify-left border-b border-black ">
            <input
              type="text"
              placeholder="Type your answer here"
              class="font-medium w-full text-base/5.5 tracking-wide text-black111/65  bg-transparent text-left  focus:outline-none"
            />
          </div>
        ) : (
          <Options />
        )}
      </section>

      <div className=" w-full flex items-center gap-5 mt-4 px-6">
        <button className="shadow-[0px_2px_2px_#00993333] w-1/2 rounded-xl font-semibold text-xl/6 outline-2 outline-dark-green text-dark-green text-center py-3">
          Skip
        </button>

        <button className="shadow-[0px_2px_2px_#00993333] w-1/2 rounded-xl font-semibold text-xl/6 outline-2 outline-dark-green text-dark-green text-center py-3">
          Submit
        </button>
      </div>

      <Image
        src={"/images/green-curves-graphic.png"}
        className="w-full h-auto  bottom-0 left-0 right-0 "
        width={375}
        height={120}
        alt="green graphics image abstract"
        priority={true}
      />
    </div>
  );
};

export default Quiz;
