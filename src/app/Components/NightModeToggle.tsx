import React from "react";
import { useNightMode } from "./NightModeContext";
import * as SvgComponent from "../../../public/aseets/svg/svgcomponent";

const NightModeToggle = () => {
  const { isNightMode, toggleNightMode } = useNightMode();

  const handleToggleClick = () => {
    toggleNightMode();
  };

  return (
    <div
      className="cursor-pointer"
      onClick={handleToggleClick}
    >
      {isNightMode ? <SvgComponent.Svg31 /> : <SvgComponent.Svg3 />}
    </div>
  );
};

export default NightModeToggle;