// "use client"
// import React from "react";
// import reviwes from "../../../public/aseets/svg/Reviews.svg";
// import fadeicons from "../../../public/aseets/svg/fadeiconsleft.svg";
// import fadeiconswhite from "../../../public/aseets/svg/fadeiconswhite.svg"
// import ceo from "../../../public/aseets/png/ceo.jpg"
// import CustomImage from "next/CustomImage";
// import { useNightMode } from "../Components/NightModeContext";


// const AboutMessage = () => {
//   const { isNightMode } = useNightMode();

//   return (
//     <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-[8.125rem] ">
//       <div
//         className={`text-2xl md:text-5xl not-italic font-extrabold mt-6 md:ml-14 
       
//         ${
//           isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
//         }`}>
//         Founder Message
//       </div>

//       <div
//         className={`flex w-full sm:w-auto sm:h-auto md:w-auto md:h-auto lg:w-auto lg:h-auto xl:w-auto h-auto px-[5px] sm:px-[20px] md:px-[20px] lg:px-[40px] xl:px-[55px] py-[10px] sm:py-[20px] md:py-[30px] lg:py-[40px] rounded-[10px] sm:rounded-[14px] mt-14 
//         ${
//           isNightMode ? "bg-[#424242]" : "bg-[#F0F0F0]"
//         }`}>
//         <div
//           className={`w-full sm:w-full md:w-full md:h-auto lg:w-full lg:h-full xl:w-full h-[382px] flex-col flex justify-center sm:justify-end sm:gap-6 shrink-0 rounded-[10px] sm:rounded-[14px]
//           ${
//             isNightMode ? "bg-black" : "bg-white"
//           }`}>
//           <div className="flex shrink-0 stroke-[2px] sm:flex-col stroke-[#C6C6C6] px-2 sm:px-5 md:px-10 mt-4 sm:mt-6 md:mt-14">
//             <div className="flex flex-row">
//               <div>
//                 <CustomImage src={reviwes} alt="CustomImage 1" className="ml-1 sm:ml-3" />
//               </div>
//               <div>
//                 <CustomImage src={reviwes} alt="CustomImage 1" className="ml-1" />
//               </div>
//             </div>
//             <div className=" text-xs sm:text-[1rem] md:text-2xl not-italic font-bold leading-[28px] sm:leading-[2rem] md:leading-[40px] lg:leading-[46px] w-[250px] sm:w-auto md:w-[800px] xl:w-[838px] ml-1 sm:ml-3 sm:mt-2">
//               Jay Mevada is the founder, CXO, and growth hacker at Leo9 Studio
//               headquartered in Mumbai, India, and an office in N.J., U.S.A..{" "}
//             </div>
//           </div>

//           <div className="flex items-start justify-start flex-col ml-1 sm:ml-3 md:ml-20 px-2 sm:px-5 md:px-10 xl:mt-5">
//             <div
//               className={`text-xs sm:text-[1.1rem] md:text-xl not-italic font-semibold leading-[28px] sm:leading-[46px] md:leading-[56px] lg:leading-[56px] 
//               ${
//                 isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
//               }`}>
//               Jay Mevada
//             </div>
//             <div
//               className={`text-xs sm:text-[1.1rem] md:text-xl not-italic font-semibold leading-[28px] sm:leading-[36px] md:leading-[16px] 
//             : "text-[#777777]"
//           `}
//             >
//               Web Developer
//             </div>
//           </div>

//           <div className="flex justify-start mt-10 sm:mt-0">
//             <CustomImage
//             src={isNightMode ? fadeiconswhite : fadeicons}
//             alt="CustomImage 1"
//               className="sm:w-[92px] sm:h-[43px] md:w-[150px] "
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMessage;


"use client"
import React from "react";
import reviwes from "../../../public/aseets/svg/Reviews.svg";
import fadeicons from "../../../public/aseets/svg/fadeiconsleft.svg";
import fadeiconswhite from "../../../public/aseets/svg/fadeiconswhite.svg"
import ceo from "../../../public/aseets/png/ceo.jpg"
import CustomImage from "./CustomImage";
import { useNightMode } from "./NightModeContext";


const AboutMessage = () => {
  const { isNightMode } = useNightMode();

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-[8.125rem] ">
      <div
        className={`text-2xl md:text-5xl not-italic font-extrabold mt-6 md:ml-14 
       
        ${
          isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
        }`}>
        Founder Message
      </div>

      <div
        className={`flex w-full sm:w-auto sm:h-auto md:w-auto md:h-auto lg:w-auto lg:h-auto xl:w-auto h-auto px-[5px] sm:px-[20px] md:px-[20px] lg:px-[40px] xl:px-[55px] py-[10px] sm:py-[20px] md:py-[30px] lg:py-[40px] rounded-[10px] sm:rounded-[14px] mt-14 
        ${
          isNightMode ? "bg-[#424242]" : "bg-[#F0F0F0]"
        }`}>
        <div
          className={`w-full sm:w-full md:w-full md:h-auto lg:w-full lg:h-full xl:w-full h-[382px] flex-col flex justify-center sm:justify-end sm:gap-6 shrink-0 rounded-[10px] sm:rounded-[14px]
          ${
            isNightMode ? "bg-black" : "bg-white"
          }`}>
            <div className="flex-[1_0_0] flex flex-col">
          <div className="flex shrink-0 stroke-[2px] sm:flex-col stroke-[#C6C6C6] px-2 sm:px-5 md:px-10 mt-4 sm:mt-6 md:mt-14">
            <div className="flex flex-row">
              <div>
                <CustomImage src={reviwes} alt="CustomImage 1" className="ml-1 sm:ml-3" />
              </div>
              <div>
                <CustomImage src={reviwes} alt="CustomImage 1" className="ml-1" />
              </div>
            </div>
            <div className="text-xs sm:text-[1rem] md:text-2xl not-italic font-bold leading-[28px] sm:leading-[2rem] md:leading-[40px] lg:leading-[46px] w-[250px] sm:w-auto md:w-[400px] xl:w-[600px] ml-1 sm:ml-3 sm:mt-2">
              Jay Mevada is the founder, CXO, and growth hacker at Leo9 Studio
              headquartered in Mumbai, India, and an office in N.J., U.S.A..
            </div>
          </div>
          <div className="flex items-start  justify-start flex-col ml-1 sm:ml-3 md:ml-20 px-2 sm:px-5 md:px-10 xl:mt-5">
            <div
              className={`text-xs sm:text-[1.1rem] md:text-xl not-italic font-semibold leading-[28px] sm:leading-[46px] md:leading-[56px] lg:leading-[56px] 
              ${
                isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
              }`}>
              Jay Mevada
            </div>
            <div
              className={`text-xs sm:text-[1.1rem] md:text-xl not-italic font-semibold leading-[28px] sm:leading-[36px] md:leading-[16px] 
            : "text-[#777777]"
          `}
            >
              Web Developer
            </div>
          </div>

          <div className="flex justify-start mt-10 sm:mt-0">
            <CustomImage
            src={isNightMode ? fadeiconswhite : fadeicons}
            alt="CustomImage 1"
              className="sm:w-[92px] sm:h-[43px] md:w-[150px] "
            />
          </div>

          <div className="w-auto flex mt-[-27rem] justify-end mix-blend-multiply md:hidden lg:flex sm:hidden">
            <CustomImage src={ceo} alt="img" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMessage;
