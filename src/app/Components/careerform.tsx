"use client"
import React, { useState } from "react";
import Image from "next/image";
import chevrondown from "../../../public/aseets/svg/chevron-down.svg";
import file from "../../../public/aseets/svg/filetext.svg";
import { useNightMode } from "./NightModeContext";


const CareerForm = () => {
  const { isNightMode } = useNightMode();
  const [selectedOption, setSelectedOption] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  return (
    <div className={`inline-flex mt-[112px] pt-[107px] pr-[367px] pb-[106px] pl-[356px] sm:p-10 justify-center items-center flex-shrink-0 w-[100%]
    ${isNightMode ? "bg-[#292929]" : "bg-[#F0F0F0]"}`}>
      <div className={`flex p-[40px] sm:p-10 justify-center items-center  rounded-[14px] bg-[#FFF]
       ${isNightMode ? "bg-[#b9b9b92c]" : "bg-[#FFFFFF]"}`}>
        <div className="flex flex-col items-center gap-[26px]">
          <div className={`text-[25px] not-italic font-extrabold leading-[54px]
           ${isNightMode ? "text-[#FFFFFF]" : "text-[#000000]"}`}>
            Application Form
          </div>
          <div className="flex flex-col items-center gap-[27px]">
            <div className="flex flex-col items-start gap-[30px]">
              <div className="flex items-start gap-[23px] w-full sm:flex-col">
                <div className="flex w-full pt-[16px] pr-[20px] pb-[18px] pl-[20px] items-center  rounded-[14px] border-[1.5px] border-[solid] border-[#C8C8C8] ">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className=" bg-transparent border-none outline-none"
                  />
                </div>
                <div className="flex pt-[16px] w-full pr-[20px] pb-[18px] pl-[20px] items-center  rounded-[14px] border-[1.5px] border-[solid] border-[#C8C8C8] ">
                  <input
                    type="text"
                    placeholder="Email address"
                    className=" bg-transparent border-none outline-none"
                  />
                </div>
              </div>
              <div className="relative w-full">
                <div
                  className="flex pl-[20px] pr-[20px] py-[16px] items-start rounded-[14px] border-[1.5px] border-[solid] border-[#C8C8C8]  w-full cursor-pointer"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <div className="text-[#989898] text-[16px] not-italic font-medium leading-[160%]">
                    {selectedOption || "Select Position"}
                  </div>
                  <div className="flex justify-center items-start ml-auto">
                    <Image
                      src={chevrondown}
                      
                      alt="img"
                      style={{
                        marginLeft: "10px",
                        filter: isNightMode ? "brightness(0) invert(1)" : "none",
                        transform: dropdownOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                    />
                  </div>
                </div>
                {dropdownOpen && (
                  <div className={`absolute top-full left-0 w-full mt-1  border border-gray-300 rounded-md shadow-md 
                  ${isNightMode ? "text-[#000000] bg-[#a8a7a7d2]" : "text-[#000000] bg-[#FFFFFF]"}`}>
                  
                    {options.map((option, index) => (
                      <div
                        key={index}
                        className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex px-[198px] py-[50px] sm:p-5 justify-center items-center rounded-[17px] border-[1.5px] border-dashed  border-[#C8C8C8] ">
                <label className="flex justify-center items-center gap-[8px] cursor-pointer">
                  <div>
                    <Image src={file} alt="img" />
                  </div>
                  <div className="text-[#989898]  text-[16px] not-italic font-medium leading-[160%]">
                    {uploadedFile
                      ? uploadedFile.name
                      : "Upload your Resume or CV"}
                  </div>
                  <input
                    type="file"
                    accept=".pdf, .doc, .docx"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
            <div className="flex  px-[54px] py-[16px] justify-center items-center gap-[10px] rounded-[82px] bg-[#7D34FF]">
              <div className="text-center text-white text-[18px] not-italic font-bold leading-[150%]">
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
