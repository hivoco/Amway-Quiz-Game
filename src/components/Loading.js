import React from "react";
import Layout from "./Layout";
import Header from "./Header";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="relative">
      <Layout>
        <Header />
        <div className="absolute w-full  top-1/2 -translate-y-1/2 mx-auto flex flex-col  gap-30 sm:gap-10">
          <div className="relative">
            <Image
              className="mx-auto w-3/4 sm:w-3/5 h-auto animate-spin"
              src="/images/loading-image.png"
              width={280}
              height={265}
              alt="Picture of the author"
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
            <p>timespan to improve your chances of winning.</p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Loading;
