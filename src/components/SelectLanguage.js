import { CircleArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SelectLanguage = () => {
  const languages = ["hindi", "english"];
  const [selectedLanguage, setSelectedLanguage] = useState("");

  return (
    <>
      <div className="w-full space-y-6">
        <h2 className="font-bold text-2xl/7.5 text-center text-dark-green">
          Choose Language
        </h2>

        {languages.map((l) => {
          return (
            <Image
              onClick={() => setSelectedLanguage(l.toLowerCase())}
              src={
                selectedLanguage === l.toLowerCase()
                  ? `/images/selected-option-${l}.png`
                  : `/images/unselected-option-${l}.png`
              }
              key={l}
              width={300}
              height={80}
              className="w-full h-auto"
              alt="language"
            />
          );
        })}
      </div>

      <Link
        href={
          selectedLanguage ? `/platformQuiz?language=${selectedLanguage}` : "#"
        }
      >
        <CircleArrowRight
          size={54}
          strokeWidth={1}
          className="bg-white text-dark-green mx-auto"
        />
      </Link>
    </>
  );
};

export default SelectLanguage;
