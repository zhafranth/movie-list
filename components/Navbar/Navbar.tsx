"use client";

import { Input } from "@heroui/react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiSearchCircle } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="flex items-center gap-x-8">
      <Input
        isClearable
        placeholder="Search"
        classNames={{
          base: "w-[300px]",
        }}
        radius="full"
        startContent={<CiSearch />}
      />
      <p>Movie</p>
    </div>
  );
};

export default Navbar;
