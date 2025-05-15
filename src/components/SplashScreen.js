import { X } from "lucide-react";
import Image from "next/image";

const SplashScreen = () => {
  return (
    <div className="h-svh w-full flex flex-col justify-center items-center relative">
      <Image
        className="absolute top-0 sm:-top-28 w-full h-auto z-0"
        src={"/images/leaves.png"}
        width={267}
        height={54}
        alt="nutrilite logo"
        priority={true}
      />

      <section className="flex  flex-col justify-center items-center   relative z-50">
        <Image
          className="h-auto self-start"
          src={"/images/green-dots.png"}
          width={80}
          height={18}
          alt="green dots image"
          priority={true}
        />

        <div className="h-full  space-y-1.5">
          <Image
            className="w-auto "
            src={"/logos/Nutrilite-logo.png"}
            width={267}
            height={54}
            alt="nutrilite logo"
            priority={true}
          />
          <X className="mx-auto" />

          <Image
            className="w-auto"
            src={"/logos/hivoco-color-logo-black-text.png"}
            width={267}
            height={45}
            alt="hivoco company logo"
            priority={true}
          />
        </div>

        <Image
          className="self-end h-auto "
          src={"/images/green-dots.png"}
          width={80}
          height={18}
          alt="green dots image"
          priority={true}
        />
      </section>

      <Image
        className="absolute bottom-0 sm:-bottom-32 rotate-180 w-full h-auto z-0"
        src={"/images/leaves.png"}
        width={267}
        height={54}
        alt="nutrilite logo"
        priority={true}
      />
    </div>
  );
};

export default SplashScreen;
