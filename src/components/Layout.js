import Image from "next/image";

const Layout = ({ children,diffTopImage=false,className }) => {
  // every element is absolute here
  return (
    <div className={`h-svh w-full relative ${className}`}>
      {!diffTopImage && (
        <Image
          className="absolute w-full h-auto  top-0 left-0 z-0"
          src="/images/leaves-divider-illustration.png"
          width={375}
          height={36}
          alt="leaves-divider-illustration"
          priority={true}
        />
      )}

      {diffTopImage && (
        <>
          <Image
            className="absolute top-8 left-6 z-0"
            src="/images/green-dots.png"
            width={68}
            height={16}
            alt="leaves-divider-illustration"
            priority={true}
          />

          <Image
            className="absolute w-auto h-[15vh] top-0 right-0 z-0"
            src="/images/green-wave-top-banner.png"
            width={174}
            height={120}
            alt="green-wave-top-banner"
            priority={true}
          />
        </>
      )}
      {children}

      <Image
        className="absolute max-w-1/2 h-auto  left-0 bottom-0 z-0"
        src="/images/leafy-corner-deco.png"
        width={177}
        height={174}
        alt="leafy-corner-deco"
        priority={true}
      />

      <div className="absolute overflow-hidden w-25 h-25 bottom-0 right-0 z-0">
        <div className="bg-[#BDD83C] rounded-full w-50 h-50 " />
      </div>
    </div>
  );
};

export default Layout;
