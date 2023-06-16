"use client";
import { CarProps } from "@/types";
import { calculateRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import CustomBtn from "./CustomBtn";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateRent(city_mpg, year);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px]">
        <span className="self-start text-[14px]">Rs</span>
        {carRent}
        <span className="self-end text-[14px]">/Day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          alt={model}
          className="object-contain"
        />
      </div>
      <div className="realtive w-full  mt-2">
        <div className=" flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              style={{ width: "auto", height: "auto" }}
              height={20}
              width={20}
              alt="wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" height={20} width={20} alt="tire" />
            <p className="text-[14px]">{drive.toLowerCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/gas.svg"
              style={{ width: "auto", height: "auto" }}
              height={20}
              width={20}
              alt="gas"
            />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container -mt-12">
          <CustomBtn
            title="View More"
            containerStyles="w-full  py-[16px] rounded-full bg-primary-blue"
            textStyle="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => {
              setIsOpen(true);
            }}
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
        }}
        car={car}
      />
    </div>
  );
};

export default CarCard;
