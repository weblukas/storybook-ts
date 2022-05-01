import React from "react";
// import { ReactComponent as ImportedSVG } from "path/to/myIcon.svg";
import * as SvgPaths from "./SvgPaths";

const iconExists = (name: string) => Object.keys(SvgPaths).includes(name);

interface SvgCompProps {
  name: keyof typeof SvgPaths;
}

const SvgComp: React.FC<SvgCompProps> = ({ name = "Test" }) => {
  console.log(SvgPaths["Test"]);

  if (!iconExists(name)) {
    return <span>missing icon</span>;
  }

  const Icon = SvgPaths[name];
  // if (name === "test") return TestSvg;
  return <Icon />;
};

export default SvgComp;
