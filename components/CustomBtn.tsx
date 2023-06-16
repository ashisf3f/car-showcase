"use client";

import { CustomBtnProps } from "@/types";
import Image from "next/image";

const CustomBtn = ({
  title,
  btnType,
  containerStyles,
  handleClick,
  textStyle,
  rightIcon,
  isDisabled,
}: CustomBtnProps) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="right icon" fill />
        </div>
      )}
    </button>
  );
};

export default CustomBtn;
