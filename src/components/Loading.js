import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Header from "./Header";
import Image from "next/image";

const Loading = () => {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    // const interval = setInterval(() => {
      setAnimation(!animation);
    // }, 500);

    // return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-screen">
      <Layout>
        <Header />
        <div className="absolute w-screen top-1/2 -translate-y-1/2  flex  flex-col  gap-30 sm:gap-10">
          <div className="relative">
            <Image
              className={`mx-auto w-3/4 sm:w-3/5 h-auto
               transition-transform duration-500  animate-spin`
              }
              src="/images/green-leaf-circle.png"
              width={280}
              height={265}
              alt="loading animation"
              priority={true}
            />
            <span
              className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
        font-bold text-2xl/7 text-center text-dark-green
        "
            >
              Loading Quiz
            </span>
          </div>

          <div className="text-black111 font-normal text-sm/4 text-center">
            <p>Answer questions correctly in the shortest</p>
            <p>
              timespan to improve your chances of winning.{" "}
              <span className="animate-ping text-black">...</span>{" "}
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Loading;
