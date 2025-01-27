"use client";

import { Input } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleSearch = useCallback(() => {
    router.push(`/search?title=${encodeURIComponent(query.trim())}`);
  }, [query, router]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

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
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Link href="/">Movie</Link>
    </div>
  );
};

export default Navbar;
