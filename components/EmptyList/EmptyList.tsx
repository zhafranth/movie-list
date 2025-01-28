import React from "react";
import { MdMovieFilter } from "react-icons/md";

const Empty = () => {
  return (
    <div className="h-[80vh] w-full flex flex-col justify-center items-center">
      <MdMovieFilter size={64} />
      <p className="mt-4">There are no movies that matched your query. ...</p>
    </div>
  );
};

export default Empty;
