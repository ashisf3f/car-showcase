"use client";
import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { manufacturers } from "@/constants";
const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="serach-manufacturer w-full">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              height={20}
              width={20}
              className="ml-4"
              alt="car-logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagan"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <Transition
            leave="transition ease-in duration-100"
            leaveFrom="opactiy-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            {filteredManufacturers.map((item) => (
              <Combobox.Option
              as="span"
                key={item}
                className={({ active }) =>
                  `relative search-manufacturer__option block ${
                    active ? "bg-primary-blue text-white" : "text-gray-900"
                  } `
                }
                value={item}
              >
                {item}
              </Combobox.Option>
            ))}
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
