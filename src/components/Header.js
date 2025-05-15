import Image from "next/image";
const Header = ({ className }) => {
  return (
    <header className={`w-full flex justify-between items-center px-5 !py-12 ${className}`}>
      <Image
        className="h-5 w-auto"
        src={"/logos/Nutrilite-logo.png"}
        width={99}
        height={20}
        alt="nutrilite logo"
        priority={true}
      />

      <Image
        className="h-5 w-auto"
        src={"/logos/hivoco-color-logo-black-text.png"}
        width={123}
        height={20}
        alt="nutrilite logo"
        priority={true}
      />
    </header>
  );
};

export default Header;
