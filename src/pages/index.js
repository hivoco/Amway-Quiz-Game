import Header from "@/components/Header";
import Layout from "@/components/Layout";
import SplashScreen from "@/components/SplashScreen";
import { CircleArrowRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const App = () => {
  const [displaySplash, setDisplaySplash] = useState(true);

  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (!displaySplash) {
      setAnimation(true);
    }
  }, [displaySplash]);
  
  useEffect(() => {
    setTimeout(() => setDisplaySplash(false), 3000);
  }, []);

  return (
    <>
      {displaySplash ? (
        <SplashScreen />
      ) : (
        <Layout diffTopImage={true} animation={animation}>
          <div
            className={`flex items-center justify-center gap-3 pt-[11vh] pb-[5vh] overflow-hidden
                      transition-all duration-1000 ease-in-out ${
                        animation
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-20 opacity-0"
                      }
            `}
          >
            <Image
              className=" "
              src={"/logos/Nutrilite-logo.png"}
              width={123}
              height={24}
              alt="nutrilite logo"
              priority={true}
            />
            <X className="" />

            <Image
              className=""
              src={"/logos/hivoco-color-logo-black-text.png"}
              width={123}
              height={20}
              alt="hivoco company logo"
              priority={true}
            />
          </div>

          {/* <section className="flex w-full gap-2.5 items-center justify-center "> */}
          {/* <Image
              alt="nutrilite-triple-protect"
              width={67}
              height={77}
              src="/images/nutrilite-triple-protect.png"
            /> */}

          {/* flex w-full  items-center justify-center */}
          <div
            className={`font-extrabold text-[42px]/13 text-center
                        transition-all duration-1000 ease-in-out pb[2.47vh]
                        ${
                          animation
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }
            `}
          >
            <h1 className=" text-[#79bf44]">Nutrilite</h1>
            <h1 className=" text-dark-green">Triple Protect</h1>
          </div>

          <Image
            className={`mx-auto h-[43vh] w-auto transition-all duration-1000 ease-in-out 
            ${
              animation
                ? "translate-y-0 opacity-100"
                : "translate-y-30 opacity-0"
            }`}
            alt="nutrilite-triple-protect"
            width={300}
            height={346}
            src="/images/nutrilite-triple-protect.png"
            priority={true}
            quality={100}
          />

          <Link href={"/register"}>
            <CircleArrowRight
              size={54}
              strokeWidth={1}
              className={`bg-white text-dark-green mx-auto mt-[4vh]
              transition-all duration-1000 ease-in-out 
              ${
                animation
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }
              `}
            />
          </Link>

          {/* </section> */}
        </Layout>
      )}
    </>
  );
};

export default App;
