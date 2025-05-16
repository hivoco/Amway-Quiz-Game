import Header from "@/components/Header";
import Layout from "@/components/Layout";
import SplashScreen from "@/components/SplashScreen";
import { CircleArrowRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const App = () => {
  const [displaySplash, setDisplaySplash] = useState(true);
  useEffect(() => {
    setTimeout(() => setDisplaySplash(false), 1500);
  }, []);
  return (
    <>
      {displaySplash ? (
        <SplashScreen />
      ) : (
        <Layout diffTopImage={true}>
          <div className="flex items-center justify-center gap-3 pt-[11vh] pb-[5vh]">
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
          <div className="font-extrabold text-[42px]/13 text-center ">
            <h1 className=" text-[#79bf44]">Nutrilite</h1>
            <h1 className=" text-dark-green">Triple Protect</h1>
          </div>

          <Image
            className="mx-auto h-[43%] w-auto"
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
              className="bg-white text-dark-green mx-auto mt-[4vh]"
            />
          </Link>

          {/* </section> */}
        </Layout>
      )}
    </>
  );
};

export default App;
