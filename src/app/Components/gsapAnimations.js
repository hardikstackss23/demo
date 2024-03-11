import gsap from "gsap";

export const applyNightModeAnimation = (isNightMode) => {
  gsap.to("body", {
    backgroundColor: isNightMode ? "#000000" : "#ffffff",
    color: isNightMode ? "#ffffff" : "#000000",
  });  
};

export default gsap;


