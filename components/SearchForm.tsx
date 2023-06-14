"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {};

export default function SearchForm({}: Props) {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const submitSearch = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();

    if (inputValue === "") {
      router.push(`/`);
    } else router.push(`search/${inputValue}`);
  };

  return (
    <form className="mt-3 mb-6 flex flex-row gap-1 " onSubmit={submitSearch}>
      <input
        type="text"
        className="w-full rounded-tl-md rounded-bl-md h-12 bg-slate-900 px-6 text-white placeholder:text-slate-500"
        placeholder="Search your movie..."
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
      />

      <button
        type="submit"
        className="text-slate-400 bg-slate-900 px-4 py-1 rounded-tr-md rounded-br-md hover:scale-95 hover:text-slate-300 transition-all text-sm"
      >
        Search
      </button>
    </form>
  );
}
