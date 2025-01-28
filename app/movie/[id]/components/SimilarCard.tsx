import { MovieItem } from "@/network/interface";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaImage } from "react-icons/fa";

interface ISimilarCard {
  data: MovieItem;
}

const SimilarCard: React.FC<ISimilarCard> = ({ data }) => {
  const { title, release_date, poster_path, id } = data ?? {};
  return (
    <Link
      href={`/movie/${id}`}
      className="w-[15%] h-[350px] flex-shrink-0 cursor-pointer"
    >
      <div className="w-full h-[250px] rounded-xl overflow-hidden scrollbar-hide bg-slate-800">
        {poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w780${poster_path}`}
            width={2000}
            height={2000}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <FaImage size={32} />
          </div>
        )}
      </div>
      <h4 className="line-clamp-1 font-semibold text-lg mt-2">{title}</h4>
      <p className="font-extralight">
        {dayjs(release_date).format("MMM DD, YYYY")}
      </p>
    </Link>
  );
};

export default SimilarCard;
