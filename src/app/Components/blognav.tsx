"use client";
import React, { useState } from "react";
import CustomImage from "./CustomImage";
import chevrondown from "../../../public/aseets/svg/chevron-down.svg";
import { useNightMode } from "./NightModeContext";


const BlogNav = () => {
  const { isNightMode } = useNightMode();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMobileCategory, setSelectedMobileCategory] = useState("All");

  const categories = [
    "All",
    "React",
    "UX/UI",
    "Design",
    "Product",
    "Research",
    "Mobile App",
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedMobileCategory(category);
    setShowDropdown(false);
  };

  return (
    <div className="flex items-center  lg:gap-0 justify-around mt-[60px]">
      <div className="flex items-center sm:hidden">
        <div
          className={`flex cursor-pointer px-[20px] py-[10px] justify-center items-center gap-[10px] border-b-[2px_solid_${
            selectedMobileCategory === "All" ? "#7E34FF" : "#FFF"
          }] `}
          onClick={() => handleCategoryChange("All")}
        >
          <div
            className={`text-[${
              selectedMobileCategory === "All" ? "#7E34FF" : "#959595"
            }] text-center text-[20px] not-italic font-semibold leading-[24px]`}
          ></div>
        </div>
        <div className="text-[#959595] cursor-pointer items-center text-[20px] not-italic font-medium leading-[24px] flex flex-row gap-[30px]">
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`${
                selectedMobileCategory === category ? "text-[#7E34FF] border-b-2 border-b-[#7E34FF] border-solid" : ""
              } cursor-pointer`}
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      <div className="relative xl:w-[294px] lg:w-[200px] sm:w-[100%] sm:mx-4">
        <div
          className="flex items-center sm:justify-between cursor-pointer px-[24px] py-[12px] rounded-[60px] border-[1.5px] border-[solid] border-[#D0D0D0] bg-[#FDFDFD] md:hidden lg:block"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="flex items-center justify-between sm:justify-between">
            <div className="text-[#595959] text-[16px] sm:text-[18px] not-italic font-semibold leading-[24px]">
              {selectedCategory}
            </div>
            <div className="ml-2 sm:hidden">
              <CustomImage src={chevrondown} alt="img" />
            </div>
          </div>
          <div className="ml-2 sm:block md:hidden">
            <CustomImage src={chevrondown} alt="img" />
          </div>
        </div>

        {showDropdown && (
          <div className={`absolute mt-2 p-2 border border-gray-300 rounded xl:w-[294px] lg:w-[200px] sm:w-[100%]
          ${isNightMode ? "bg-[#000000]" : "bg-[#FFFFFF]"
        }`}
      > 
            {categories.map((category) => (
              <div
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`cursor-pointer hover:bg-gray-100 p-2
                ${isNightMode ? "hover:bg-black" : "hover:bg-gray-100"
              }`}
              >
                {category}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogNav;
