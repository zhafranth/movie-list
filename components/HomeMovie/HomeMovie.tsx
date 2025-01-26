import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

const HomeMovie = () => {
  return (
    <div className="w-full h-[60%] bg-blue-100 rounded-2xl overflow-hidden relative">
      <div className="relative h-full z-10 p-6 flex flex-col">
        <h2 className="bg-white rounded-full inline-block self-baseline text-slate-900 text-xs px-4 py-1">
          Hello
        </h2>
        <div className="w-3/6 mt-auto flex flex-col gap-y-2">
          <p className="font-semibold text-2xl">Super Mario Bros</p>
          <p className="font-extralight text-slate-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis enim a et porro delectus, ipsa velit facere? Ad,
            mollitia iusto!
          </p>
          <Button
            className="bg-white text-slate-950 self-baseline"
            radius="full"
            startContent={<FaPlay />}
          >
            Detail
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full z-0">
        <Image
          src="/mario-movie.png"
          alt="movie"
          width={2000}
          height={2000}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HomeMovie;
