"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [ipSearch, setIpSearch] = useState("");
  const router = useRouter();

  const handleSearch = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("ip", ipSearch);
    const newPath = `${window.location.pathname}?${searchParams}`;

    router.push(newPath);
  };

  return (
    <header className="flex flex-col items-center gap-5 py-6 bg-cover bg-pattern-mobile sm:bg-pattern-desktop h-[300px] sm:h-[280px] px-8">
      <h1 className="text-2xl font-semibold text-white">IP Addrss Tracker</h1>
      <div className="flex flex-row items-center w-full sm:w-[600px] overflow-hidden rounded-xl justify-between">
        <input
          className="w-full h-full px-4 py-3 outline-none "
          placeholder="search for any ip address or domain"
          type="text"
          value={ipSearch}
          onChange={(e) => setIpSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="w-[50px] text-xl flex items-center justify-center bg-black text-white h-full"
        >
          {">"}
        </button>
      </div>
    </header>
  );
}
