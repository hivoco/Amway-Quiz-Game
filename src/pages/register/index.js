import Header from "@/components/Header";
import Layout from "@/components/Layout";
import SelectLanguage from "@/components/SelectLanguage";
import { CircleArrowRight, CircleCheck } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [continueClicked, setContinueClicked] = useState(false);
//   const languages = ["hindi", "english"];
//   const [selectedLanguage, setSelectedLanguage] = useState("");
  return (
    <Layout>
      <div className="relative h-full w-full z-50  ">
        <Header />

        <div className="h-2/3 fle flex-col justify-stretch px-12 grid  grid-rows-[1fr_3.3fr_auto] gap-8 sm:gap-6 sm:w-4/5 sm:mx-auto ">
          <section className="flex w-full gap-2.5 items-center justify-center ">
            <Image
              alt="nutrilite-triple-protect"
              width={67}
              height={77}
              src="/images/nutrilite-triple-protect.png"
            />
            <div className="font-extrabold text-3xl/9 ">
              <h1 className=" text-[#79bf44]">Nutrilite</h1>
              <h1 className=" text-dark-green">Triple Protect</h1>
            </div>
          </section>

          {!continueClicked && (
            <>
              <section className="flex w-full flex-col gap-7 sm:gap-2 ">
                <div className="flex flex-col gap-2 items-center">
                  <Image
                    alt="plant icon"
                    width={90}
                    height={70}
                    src={"/images/plant-icon.png"}
                  />
                  <h1 className="text-dark-green font-bold text-2xl/7">
                    User Registration
                  </h1>
                </div>

                <div className="w-full flex flex-col gap-1 justify-center  ">
                  <input
                    type="text"
                    inputMode="text"
                    placeholder="Enter your name"
                    className={`
                    font-medium text-sm/6 align-middle text-black capitalize placeholder:text-[#8B8B8B] py-3.5 px-5 outline-3  outline-dark-green rounded-full`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label className="font-medium flex items-center gap-1 text-sm/4 text-dark-green text-left px-5">
                    {name ? (
                      <>
                        {name}
                        <CircleCheck
                          size={30}
                          className="text-white fill-dark-green"
                          strokeWidth={1.5}
                        />
                      </>
                    ) : (
                      "unique id"
                    )}
                  </label>
                </div>
              </section>

              <div
              onClick={()=>setContinueClicked(true)}
                className={`py-3.5 
  px-5   outline-dark-green rounded-full font-bold text-xl/6.5 text-center 
                ${
                  name
                    ? "text-white bg-dark-green outline-0 shadow-[0px_2px_2px_#00993333]"
                    : "text-dark-green bg-white/60 outline-2 "
                }
            `}
              >
                Continue
              </div>
            </>
          )}

          {continueClicked && <SelectLanguage />}
        </div>
      </div>
    </Layout>
  );
};

export default Register;
