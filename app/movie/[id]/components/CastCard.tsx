import { CastProperties } from "@/network/interface";
import Image from "next/image";
import React from "react";

interface ICastCard {
  data: CastProperties;
}

const CastCard: React.FC<ICastCard> = ({ data }) => {
  const { profile_path, name } = data ?? {};
  return (
    <div className="w-[15%] h-[350px] flex-shrink-0">
      <div className="w-full h-[250px] rounded-xl overflow-hidden scrollbar-hide bg-slate-800">
        <Image
          src={`https://image.tmdb.org/t/p/w780${profile_path}`}
          width={2000}
          height={2000}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <h4 className="line-clamp-1 font-semibold text-lg mt-2">{name}</h4>
    </div>
  );
};

export default CastCard;
