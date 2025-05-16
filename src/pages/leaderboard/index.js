import Layout from "@/components/Layout";
import Loading from "@/components/Loading";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const LeaderBoard = () => {
  const leaderboardList = [
    { rank: "2nd", name: "Vidhaan", points: 96 },
    { rank: "3rd", name: "Vinay", points: 92 },
    { rank: "4th", name: "Adya", points: 89 },
    { rank: "5th", name: "Shruti", points: 88 },
  ];
  const searchParams = useSearchParams();
  const session_id = searchParams.get("session_id") || "";
  const name = searchParams.get("name") || "";

  const [isLoading, setIsLoading] = useState(false);

  const getInfo = () => {
    setIsLoading(true);
    fetch(
      `http://192.168.0.6:5000/api/get_top5?session_id=${session_id}&name=${name}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Return the promise for the next then
      })
      .then((data) => {
        console.log("Success:", data);

        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
        setIsRoomExists(null); // Reset on error
      });
  };

  useEffect(() => {
    getInfo();
  }, []);

  if (isLoading) {
    <Loading />;
  }

  return (
    <Layout>
      <section className="flex w-full gap-2.5 items-center justify-center pt-16 pb-[3.6vh]">
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

      <h1
        className="text-[32px]/9 w-87/100 mx-auto tracking-wider text-center uppercase text-[#F9FBEA]
      shadow-[6px_6px_0px_#BDD83C] bg-dark-green pt-1.5 pb-1 rounded-lg
      "
      >
        LEADERBOARD
      </h1>

      <div className="flex items-center justify-between w-3/4 max-w-4/5 mx-auto">
        <h2 className="text-dark-green text-shadow-[0px_2px_2px_#00A55C26] font-bold text-[32px]/9 ">
          1st
        </h2>

        <Image
          className="h-48 w-auto"
          alt="prize with glare in bg"
          width={180}
          height={180}
          src="/images/Trophy+Glare.png"
          quality={100}
        />

        <h2 className="text-dark-green text-shadow-[0px_2px_2px_#00A55C26] font-bold text-[32px]/9 ">
          98
          <br />
          pts.
        </h2>
      </div>

      <h2 className="text-dark-green text-shadow-[0px_2px_2px_#00A55C26] font-bold text-[32px]/9 text-center">
        SHREYA{" "}
      </h2>

      <section className="px-6 flex flex-col gap-2 font-medium">
        {leaderboardList.map((el) => (
          <div
            key={el.rank}
            className="outline-2 border-dark-green rounded-full py-4 px-5 text-lg/5.5 text-center text-black111
            flex items-center justify-between "
          >
            <div className="flex items-center gap-4">
              <span>{el.rank}</span>
              <span>{el.name}</span>
            </div>

            <span className="capitalize">Pts.{el.points}</span>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default LeaderBoard;
