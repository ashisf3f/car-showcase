"use client";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import CustomBtn from "./CustomBtn";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathName);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomBtn
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full"
          textStyle="text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
