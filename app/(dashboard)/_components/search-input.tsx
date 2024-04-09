"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, ChangeEvent } from "react";
import { useDebouncedCallback } from "use-debounce";

import { Input } from "@/components/ui/input";

export const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("query") || "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const debouncedSearch = useDebouncedCallback((searchValue) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    if (searchValue && searchValue.trim() !== "") {
      newSearchParams.set("query", searchValue);
    } else {
      newSearchParams.delete("query");
    }
    router.push(`?${newSearchParams.toString()}`);
  }, 500);

  useEffect(() => {
    debouncedSearch(value);
  }, [value, debouncedSearch]);

  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 -translate-y-1/2 left-3 transform text-muted-foreground h-4 w-4" />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search"
        type="search"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
