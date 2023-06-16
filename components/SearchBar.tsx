"use client";

import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBtn = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={` z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnify"
      height={40}
      width={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const router = useRouter();
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("Please fill in the search box");
    }
    
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase()   );
  }; 

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete("limit");
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }
    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName);
  };
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item w-full">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchBtn otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          height={25}
          width={24}
          alt="model"
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchBtn otherClasses="sm:hidden" />
      </div>
      <SearchBtn otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
