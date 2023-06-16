"use client";
import { CustomFilterProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();
  const handleUpdateParams = (e: { title : string; value: string }) => {
    // const newPathName = ''
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName);
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative w-full z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title} </span>
            <Image
              src="chevron-up-down.svg"
              height={20}
              width={20}
              alt="up down"
              className="object-contain ml-4"
            />
          </Listbox.Button>
          <Transition
            // as="span"
            leave="transition ease-in duration-100"
            leaveFrom="opactiy-100"
            leaveTo="opactiry-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ?  "font-bold " : "font-normal"
                      } `}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
